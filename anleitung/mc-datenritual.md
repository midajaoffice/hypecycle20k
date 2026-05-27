# MC-Datenritual — vor jedem Operator-Chat

> Nur für **Mission Control** — nicht ins ChatGPT Project.

Ohne dieses Ritual bleibt der Operator im Modus `maintenance` (pnl unverifiziert, Stop-Trigger tot).

---

## Checkliste (5 Min.)

- [ ] **Broker-Fill** bestätigt (Stückzahl, Fill-Kurs, Gebühr, Datum)
- [ ] **FX** USD→EUR notiert (falls US-Titel)
- [ ] **Aktueller Kurs** pro Position in §4 eingetragen (MC-Quelle: Broker oder manuell)
- [ ] **pnl %** geschätzt (siehe Formel unten)
- [ ] **PV** neu: Cash + Summe Positionswerte (nach Kurs)
- [ ] **OPERATOR_VIEW** aktualisiert: `kapital`, `modus`, `positionen_detail`
- [ ] **DQ** gesetzt: A/B nur wenn Kurse MC-bestätigt; sonst B + „NICHT VERIFIZIERT“ in §7

---

## Formeln (Orientierung)

```
pnl_pct ≈ (Aktueller_Kurs - Kaufkurs) / Kaufkurs × 100    (gleiche Währung pro Zeile)
Positionswert_EUR ≈ Stück × Aktueller_Kurs × FX           (oder Broker-Wert in EUR)
PV ≈ Cash + Σ Positionswerte
```

Bei Rohstoff-/ETF-Themen: relevante Makro- oder Sektor-News in §6 als Prüfpunkt notieren — ermöglicht Operator-Modus `thesis_scan`.

---

## OPERATOR_VIEW nach Ritual

```text
modus: maintenance|thesis_scan|action
positionen_detail: IE00B53SZB19 pnl=…% trigger_kurs=ok trigger_news=watch next=…|IE00063FT9K6 pnl=…% trigger_kurs=… trigger_news=… next=…
```

- **MC pflegt:** `pnl`, `next` (aus Broker/Calendar)
- **Operator pflegt** im Sync: `trigger_kurs`, `trigger_news` (ok|watch|offen|alarm)

---

## Modus-Empfehlung

| Situation | modus |
|---|---|
| Kurse aktualisiert, kein Kauf/Verkauf-Trigger | `maintenance` |
| Kurse ok, News-Scan für Positionen (§6) | `thesis_scan` |
| K1/V1 geplant oder §6-/Regime-Trigger (nicht nur Wochentag) | `action` |

Siehe auch: [`session-closeout.md`](session-closeout.md)
