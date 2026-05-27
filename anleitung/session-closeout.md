# Session Closeout (~5 Min.)

> Nur für dich — **nicht** ins ChatGPT Project.

---

## Vor dem Chat

- [ ] [`mc-datenritual.md`](mc-datenritual.md) — Broker-Fills, FX, Kurse, pnl, `modus` in OPERATOR_VIEW
- [ ] [`../täglich/portfolio-state.md`](../täglich/portfolio-state.md) — `OPERATOR_VIEW` + Cash ok? (max. 4 Pos.; Cash-Reserve Standard 20 % — bei Override siehe §3 + Log `regelkonflikt`)
- [ ] §6 Drawdown-/Rebalance-Trigger mit aktuellem Depot abgeglichen?
- [ ] Neuer Chat → Project **HypeCycle**
- [ ] Project-Dateien aktuell (`operator-core`, `operator-protocol`, täglich/)

**Prompt:** [`daily-prompt.md`](daily-prompt.md)

---

## Nach dem Chat

- [ ] `# UPDATED_PORTFOLIO_STATE` → `portfolio-state.md` (ganze Datei, Kurse prüfen!)
- [ ] `# NEW_LOG_ENTRY` → `decision-log.md` **und** `decision-log-recent.md` (**Ausführung:** gesetzt? **QA:** `zielpfad_status`, `drawdown_stufe`, `regelkonflikt`)
- [ ] `# UPDATED_WATCHLIST` bei Status / Kauf / Verkauf / Verwerfen
- [ ] `# REJECTED_IDEA` → `ideen/rejected-ideas.md` wenn verworfen
- [ ] Verkauf: §4 Zeile weg, Cash stimmt, Watchlist aufgeräumt
- [ ] Project: `portfolio-state` + `decision-log-recent` **ersetzen**

---

## Monatlich

- [ ] Einträge > 14 Tage aus `decision-log-recent` → `archiv/`
- [ ] Project Memory prüfen ([`memory-seed.md`](memory-seed.md)) — keine Portfolio-Zahlen
