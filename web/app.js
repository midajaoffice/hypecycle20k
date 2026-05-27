const DATA = {
  portfolio: "../täglich/portfolio-state.md",
  log: "../täglich/decision-log-recent.md",
};

const $ = (id) => document.getElementById(id);

function stripMd(s) {
  return s.replace(/\*\*/g, "").trim();
}

function parseMeta(text, label) {
  const re = new RegExp(`\\*\\*${label}:\\*\\*\\s*([^\\n*]+)`, "i");
  const m = text.match(re);
  return m ? m[1].trim() : "—";
}

function parseOperatorView(text) {
  const m = text.match(/## OPERATOR_VIEW[\s\S]*?```[\s\S]*?\n([\s\S]*?)```/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].trim().split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    out[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  return out;
}

function parseKvLine(line) {
  const parts = {};
  for (const chunk of line.split("|")) {
    let matched = false;
    for (const sep of ["=", ":"]) {
      if (chunk.includes(sep)) {
        const i = chunk.indexOf(sep);
        parts[chunk.slice(0, i).trim()] = chunk.slice(i + 1).trim();
        matched = true;
        break;
      }
    }
    if (!matched && chunk.includes("→")) {
      parts._goal = chunk;
    }
  }
  return parts;
}

function section(text, heading) {
  const re = new RegExp(
    `## ${heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?\\n([\\s\\S]*?)(?=\\n## |$)`,
  );
  const m = text.match(re);
  return m ? m[1] : "";
}

function subsection(text, heading) {
  const re = new RegExp(
    `### ${heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\n([\\s\\S]*?)(?=\\n### |\\n## |$)`,
  );
  const m = text.match(re);
  return m ? m[1] : "";
}

function parseMarkdownTable(block) {
  const rows = [];
  for (const line of block.split("\n")) {
    const t = line.trim();
    if (!t.startsWith("|")) continue;
    const cells = t
      .slice(1, -1)
      .split("|")
      .map((c) => stripMd(c.trim()));
    if (cells.every((c) => /^[-:]+$/.test(c))) continue;
    rows.push(cells);
  }
  return rows;
}

function tableFromRows(rows, colMap, rowFilter) {
  if (!rows.length) return '<p class="empty-state">Keine Daten.</p>';
  const [headers, ...data] = rows;
  const filtered = data.filter((row) => {
    if (!rowFilter) return true;
    return rowFilter(row, headers);
  });
  if (!filtered.length) {
    return '<p class="empty-state">Keine Einträge.</p>';
  }

  const headHtml = colMap
    .map((c) => `<th>${c.label}</th>`)
    .join("");

  const bodyHtml = filtered
    .map((row) => {
      const cells = colMap
        .map((c) => {
          const val = c.render ? c.render(row, headers) : row[headers.indexOf(c.key)] ?? "—";
          return `<td>${val}</td>`;
        })
        .join("");
      return `<tr>${cells}</tr>`;
    })
    .join("");

  return `<table><thead><tr>${headHtml}</tr></thead><tbody>${bodyHtml}</tbody></table>`;
}

function statusBadge(status) {
  const s = (status || "").toLowerCase();
  let cls = "badge-default";
  if (s.includes("position") || s === "offen") cls = "badge-position";
  else if (s.includes("kaufen")) cls = "badge-kaufen";
  else if (s.includes("beobachten")) cls = "badge-beobachten";
  else if (s.includes("daten")) cls = "badge-daten";
  return `<span class="badge ${cls}">${status}</span>`;
}

function assetCell(name, ticker) {
  return `<div class="asset-cell"><span class="name">${name}</span><span class="ticker">${ticker}</span></div>`;
}

function parseNorthStar(ov) {
  const ns = parseKvLine(ov.north_star || "");
  const goal = (ov.north_star || "").match(/([\d.,]+)→([\d.,]+)/);
  const start = goal ? parseMoneyCell(goal[1]) : NaN;
  const target = goal ? parseMoneyCell(goal[2]) : NaN;
  const luecke = parseMoneyCell(ns.luecke || "");
  return {
    start: Number.isNaN(start) ? "?" : start,
    target: Number.isNaN(target) ? "?" : target,
    progress: (ns.fortschritt || "0").replace(",", "."),
    luecke: Number.isNaN(luecke) ? ns.luecke || "—" : luecke,
    tag: ns.tag || "—",
    zielDatum: ns.ziel_datum || "—",
  };
}

function parseCapital(ov, capSection) {
  const kap = parseKvLine(ov.kapital || "");
  const table = parseMarkdownTable(capSection);
  const byLabel = {};
  for (const row of table) {
    if (row.length >= 2) byLabel[row[0]] = row[1];
  }
  return {
    cash: kap.cash || byLabel["Verfügbares Cash"] || "0",
    invest: kap.investiert || byLabel["Investiertes Kapital"] || "0",
    pv: kap.pv || byLabel["Aktueller geschätzter Portfoliowert"] || "0",
    dq: kap.dq || "—",
  };
}

function parseDecisionLog(text) {
  const entries = [];
  const parts = text.split(/^## /m).slice(1);
  for (const part of parts) {
    const lines = part.trim().split("\n");
    const dateLine = lines[0].trim();
    if (!/^\d{4}-\d{2}-\d{2}/.test(dateLine)) continue;
    const body = lines.slice(1).join("\n");
    const fields = [];
    for (const line of body.split("\n")) {
      const m = line.match(/^\*\*(.+?):\*\*\s*(.+)$/);
      if (m) fields.push({ key: m[1], val: m[2] });
    }
    entries.push({ date: dateLine.replace(/ \(.*\)$/, ""), fields });
  }
  return entries;
}

function fmtEur(n) {
  const num = parseFloat(String(n).replace(",", "."));
  if (Number.isNaN(num)) return n;
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(num);
}

/** Parses numbers like "125", "125 EUR", "135,76 USD", "1.234,56" from table cells. */
function parseMoneyCell(s) {
  if (s == null || s === "—") return NaN;
  let t = String(s).trim().replace(/\s*(EUR|USD|€)\s*$/i, "").trim();
  if (/\d,\d/.test(t)) {
    t = t.replace(/\./g, "").replace(",", ".");
  } else {
    t = t.replace(/,/g, "");
  }
  const n = parseFloat(t);
  return Number.isNaN(n) ? NaN : n;
}

/** Steuersatz aus `gebuehren_modell` (z. B. steuer_modell:26.375pct_DE) — Fallback 26,375 %. */
function parseSteuerRateFromOv(ov) {
  const g = (ov && ov.gebuehren_modell) || "";
  const m = g.match(/steuer_modell:([\d.,]+)pct/i);
  if (m) {
    const r = parseFloat(m[1].replace(",", ".")) / 100;
    if (!Number.isNaN(r) && r > 0 && r < 1) return r;
  }
  return 0.26375;
}

/**
 * Brutto = aktueller Positionswert (EUR).
 * Netto schätz. = Verkaufserlös nach pauschaler Abgeltungssteuer nur auf den Gewinn (Freibetrag ignoriert — Orientierung).
 */
function bruttoNettoSchätz(bruttoStr, einsatzStr, steuerRate) {
  const brutto = parseMoneyCell(bruttoStr);
  const einsatz = parseMoneyCell(einsatzStr);
  if (Number.isNaN(brutto)) return { brutto: "—", netto: "—" };
  const gewinn = Number.isNaN(einsatz) ? 0 : Math.max(0, brutto - einsatz);
  const steuer = gewinn * steuerRate;
  const netto = brutto - steuer;
  return {
    brutto: fmtEur(brutto),
    netto: Number.isNaN(netto) ? "—" : fmtEur(netto),
  };
}

function aggregatePositionsBruttoNetto(rows, steuerRate) {
  if (!rows || rows.length < 2) return null;
  const headers = rows[0];
  const idx = (h, name) => h.indexOf(name);
  let bruttoSum = 0;
  let nettoSum = 0;
  let any = false;
  for (const row of rows.slice(1)) {
    const asset = (row[0] || "").toLowerCase();
    if (asset === "keine" || asset === "fehlt") continue;
    const brutto = parseMoneyCell(row[idx(headers, "Positionswert")]);
    const einsatz = parseMoneyCell(row[idx(headers, "Positionsgröße")]);
    if (Number.isNaN(brutto)) continue;
    any = true;
    bruttoSum += brutto;
    const gewinn = Number.isNaN(einsatz) ? 0 : Math.max(0, brutto - einsatz);
    nettoSum += brutto - gewinn * steuerRate;
  }
  return any ? { bruttoSum, nettoSum } : null;
}

function renderNorthStar(ns, cap) {
  const pct = parseFloat(ns.progress) || 0;
  const r = 52;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  $("north-star").innerHTML = `
    <div class="progress-ring-wrap">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#5eead4"/>
            <stop offset="100%" stop-color="#38bdf8"/>
          </linearGradient>
        </defs>
        <circle class="progress-ring-bg" cx="60" cy="60" r="${r}"/>
        <circle class="progress-ring-fg" cx="60" cy="60" r="${r}"
          stroke-dasharray="${circ}" stroke-dashoffset="${offset}"/>
      </svg>
      <div class="progress-label">
        <span class="progress-pct">${pct.toFixed(1)}%</span>
        <span class="progress-sub">Fortschritt</span>
      </div>
    </div>
    <div class="ns-details">
      <div class="ns-goal">
        ${ns.start} <span class="arrow">→</span> ${ns.target} EUR
      </div>
      <div class="ns-row"><span>Ziel bis</span><span>${ns.zielDatum}</span></div>
      <div class="ns-row"><span>Portfoliowert</span><span>${fmtEur(cap.pv)}</span></div>
      <div class="ns-row"><span>Lücke</span><span>${fmtEur(ns.luecke)}</span></div>
      <div class="ns-row"><span>Tag</span><span>${ns.tag}</span></div>
    </div>
  `;
}

function renderCapital(cap, posAgg) {
  const cashPct =
    cap.pv > 0
      ? ((parseFloat(cap.cash) / parseFloat(cap.pv)) * 100).toFixed(0)
      : "—";
  const posBlock =
    posAgg != null
      ? `
    <div class="stat full brutto-netto-bar">
      <div class="stat-label">Positionen Brutto / Netto (schätz.)</div>
      <div class="stat-value brutto-netto-pair">
        <span title="Summe Positionswerte">${fmtEur(posAgg.bruttoSum)}</span>
        <span class="bn-sep">/</span>
        <span title="Nach Modell-Abgeltungssteuer auf Gewinn">${fmtEur(posAgg.nettoSum)}</span>
      </div>
      <p class="bn-hint">Netto: Steuer nur auf Gewinn (Positionswert − Einsatz); Freibetrag nicht eingerechnet.</p>
    </div>`
      : "";
  $("capital-stats").innerHTML = `
    <div class="stat full">
      <div class="stat-label">Portfoliowert</div>
      <div class="stat-value">${fmtEur(cap.pv)}</div>
    </div>
    ${posBlock}
    <div class="stat">
      <div class="stat-label">Cash</div>
      <div class="stat-value">${fmtEur(cap.cash)} <small>${cashPct}%</small></div>
    </div>
    <div class="stat">
      <div class="stat-label">Investiert</div>
      <div class="stat-value">${fmtEur(cap.invest)}</div>
    </div>
  `;
}

function renderOperator(ov) {
  const ents = (ov.letzte_entscheidung || "—").split("|");
  const rows = [
    ["Positionen", ov.positionen || "keine"],
    ["Watchlist Top", ov.watchlist_top || "—"],
    ["Letzte Aktion", ents[0] || "—"],
    ["Detail", ents[1] || "—"],
    ["Datum", ents[2] || "—"],
    ["Gebühren", ov.gebuehren_modell || "—"],
  ];
  $("operator-dl").innerHTML = rows
    .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`)
    .join("");
}

function renderPositions(rows, ov) {
  const idx = (h, name) => h.indexOf(name);
  const steuer = parseSteuerRateFromOv(ov);

  $("positions-table").innerHTML =
    tableFromRows(
      rows,
      [
        {
          label: "Asset",
          render: (row, h) => assetCell(row[idx(h, "Asset")], row[idx(h, "Ticker")]),
        },
        { label: "Markt", key: "Markt" },
        {
          label: "Kaufkurs",
          render: (r, h) =>
            `<span class="mono-cell">${r[idx(h, "Kaufkurs")] || "—"}</span>`,
        },
        {
          label: "Akt. Kurs",
          render: (r, h) =>
            `<span class="mono-cell">${r[idx(h, "Aktueller Kurs")] || "—"}</span>`,
        },
        {
          label: "Brutto",
          render: (r, h) => {
            const b = bruttoNettoSchätz(
              r[idx(h, "Positionswert")],
              r[idx(h, "Positionsgröße")],
              steuer,
            );
            return `<span class="mono-cell">${b.brutto}</span>`;
          },
        },
        {
          label: "Netto (schätz.)",
          render: (r, h) => {
            const b = bruttoNettoSchätz(
              r[idx(h, "Positionswert")],
              r[idx(h, "Positionsgröße")],
              steuer,
            );
            return `<span class="mono-cell netto-cell">${b.netto}</span>`;
          },
        },
        {
          label: "Status",
          render: (r, h) => statusBadge(r[idx(h, "Status")]),
        },
      ],
      (row) => {
        const asset = row[0]?.toLowerCase() || "";
        return asset !== "keine" && asset !== "fehlt";
      },
    ) +
    `<p class="table-footnote">Brutto = Positionswert. Netto = Verkauf nach pauschaler Steuer auf den Gewinn (Einsatz = Positionsgröße).</p>`;
}

function renderWatchlist(rows) {
  const idx = (h, name) => h.indexOf(name);

  $("watchlist-table").innerHTML = tableFromRows(
    rows,
    [
      {
        label: "Asset",
        render: (row, h) => assetCell(row[idx(h, "Asset")], row[idx(h, "Ticker")]),
      },
      { label: "Thema", key: "Thema" },
      {
        label: "Score",
        render: (r, h) => `<span class="score">${r[idx(h, "Score")]}</span>`,
      },
      {
        label: "Status",
        render: (r, h) => statusBadge(r[idx(h, "Status")]),
      },
      { label: "Nächster Schritt", key: "Nächster Prüfpunkt" },
    ],
    (row) => {
      const asset = row[0]?.toLowerCase() || "";
      return asset !== "fehlt";
    },
  );
}

function renderChecks(block) {
  const items = block
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- "))
    .map((l) => l.slice(2));
  $("open-checks").innerHTML = items.length
    ? items.map((i) => `<li>${i}</li>`).join("")
    : '<li class="empty-state">Keine offenen Punkte.</li>';
}

function logField(fields, key) {
  const f = fields.find((x) => x.key === key);
  return f ? f.val : "";
}

/** Ausführung-Feld oder Heuristik aus Fazit / Änderungen. */
function classifyTradingAction(fields) {
  const ausf = logField(fields, "Ausführung").toLowerCase();
  if (/verkauf\s*bestätigt|verkauft\s*bestätigt/.test(ausf)) {
    return { label: "Verkauft", sub: "Ausführung: Verkauf bestätigt", cls: "log-action--sell" };
  }
  if (/kauf\s*bestätigt|gekauft\s*bestätigt/.test(ausf)) {
    return { label: "Gekauft", sub: "Ausführung: Kauf bestätigt", cls: "log-action--buy" };
  }
  if (ausf === "keine" || ausf.includes("keine ausführung")) {
    return { label: "Kein Kauf", sub: "Ausführung: keine", cls: "log-action--none" };
  }

  const fazit = logField(fields, "Fazit").toLowerCase();
  const änderungen = logField(fields, "Änderungen").toLowerCase();
  const blob = `${fazit} ${änderungen}`;

  if (
    /keine ausführung|kein kauf|nicht gekauft|ohne ausführung|keine order|nur watchlist|watchlist erstellt,\s*keine|keine execution/i.test(
      fazit,
    ) ||
    /keine ausführung|kein trade|positionen weiter keine/i.test(änderungen)
  ) {
    return {
      label: "Kein Kauf",
      sub: "Keine Ausführung",
      cls: "log-action--none",
    };
  }
  if (/verkauft|verkauf ausgef|teil.?verkauf|position reduziert|verkauf.*bestät/i.test(blob)) {
    return { label: "Verkauf", sub: "Position reduziert / verkauft", cls: "log-action--sell" };
  }
  if (
    /gekauft|erstkauf|kauf ausgef|neuposition|orders? ausgef|ausführung.*\(kauf|kauf.*ausgef/i.test(
      blob,
    )
  ) {
    return { label: "Gekauft", sub: "Ausführung / neue Position", cls: "log-action--buy" };
  }
  return { label: "Kein Trade-Hinweis", sub: "Analyse / Planung", cls: "log-action--neutral" };
}

function renderLog(entries) {
  if (!entries.length) {
    $("decision-log").innerHTML = '<p class="empty-state">Kein Log.</p>';
    return;
  }
  $("decision-log").innerHTML = entries
    .slice(0, 5)
    .map((e) => {
      const act = classifyTradingAction(e.fields);
      return `
      <article class="log-entry">
        <div class="log-entry-head">
          <div class="log-date">${e.date}</div>
          <div class="log-action ${act.cls}" title="${act.sub}">
            <span class="log-action-label">${act.label}</span>
            <span class="log-action-sub">${act.sub}</span>
          </div>
        </div>
        ${e.fields
          .map((f) => {
            const hi = f.key === "Ausführung" ? " log-line--ausfuehrung" : "";
            return `<div class="log-line${hi}"><strong>${f.key}:</strong> ${f.val}</div>`;
          })
          .join("")}
      </article>
    `;
    })
    .join("");
}

function showError(msg) {
  const el = $("error-banner");
  el.textContent = msg;
  el.classList.remove("hidden");
}

function hideError() {
  $("error-banner").classList.add("hidden");
}

async function load() {
  hideError();
  try {
    const [portfolioText, logText] = await Promise.all([
      fetch(DATA.portfolio).then((r) => {
        if (!r.ok) throw new Error(`portfolio-state.md (${r.status})`);
        return r.text();
      }),
      fetch(DATA.log).then((r) => {
        if (!r.ok) throw new Error(`decision-log-recent.md (${r.status})`);
        return r.text();
      }),
    ]);

    const ov = parseOperatorView(portfolioText);
    const ns = parseNorthStar(ov);
    const cap = parseCapital(ov, section(portfolioText, "2. Kapital"));
    const updated = parseMeta(portfolioText, "Letztes Update");
    const dq = parseMeta(portfolioText, "Datenqualität");
    const modus = parseMeta(portfolioText, "Modus");

    $("header-meta").innerHTML = `
      <span class="meta-pill">Update <strong>${updated}</strong></span>
      <span class="meta-pill">DQ <strong class="dq-badge">${dq}</strong></span>
      <span class="meta-pill">${modus}</span>
    `;

    const positionRows = parseMarkdownTable(
      section(portfolioText, "4. Aktuelle Positionen"),
    );
    const steuerRate = parseSteuerRateFromOv(ov);
    const posAgg = aggregatePositionsBruttoNetto(positionRows, steuerRate);

    renderNorthStar(ns, cap);
    renderCapital(cap, posAgg);
    renderOperator(ov);
    renderPositions(positionRows, ov);
    renderWatchlist(
      parseMarkdownTable(section(portfolioText, "5. Watchlist-Zusammenfassung")),
    );
    renderChecks(
      subsection(portfolioText, "6.5 Offene Prüfpunkte") ||
        section(portfolioText, "6. Offene Prüfpunkte"),
    );
    renderLog(parseDecisionLog(logText));
  } catch (err) {
    showError(
      `${err.message} — Starte den lokalen Server mit ./web/start.sh und öffne http://localhost:8765/web/`,
    );
    console.error(err);
  }
}

$("btn-refresh").addEventListener("click", load);
load();
