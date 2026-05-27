# Daily Prompt

Copy-paste in **neuen** Project-Chat:

```text
Trader-Disziplin: Cash ist Position, Conviction > Noise, Daten vor Story, Halten ist aktiv. Kein Hype-Chase, kein erfundenes P&L.

Folge operator-protocol.md Phase 1–5 (intern).
Lies „Portfolio-Lebenszyklus“, „Lifecycle-Entscheidungsbaum“, „Operator-Modi“ und „Trader-Disziplin“ in operator-core.md.
Lies zuerst OPERATOR_VIEW in portfolio-state.md (inkl. modus, positionen_detail).
Zahlen NUR aus portfolio-state.md — nicht aus Memory.
Briefing-Zeile NS: exakt Werte aus OPERATOR_VIEW bzw. §0 (Start→Ziel, Fortschritt %, Lücke EUR, tag x/N).

Operator-Modus wählen:
- maintenance: keine MC-Kursupdates / Default — kein Web, §4 unverändert
- thesis_scan: Positionen + News-Prüfpunkt in §6 — Web nur News/Katalysator, keine Kursänderung
- action: nur bei Trigger aus §6/Regime-Event (Drawdown/Rebalance/These-Bruch) — Web ja, Kurse nur wenn MC bestätigt

Lifecycle (intern): Drawdown-/Risikostufe aus §6 zuerst|Rebalance-Schwelle→rebalancing prüfen|These bricht→V1 these_bruch|Story≥6.5+Setup≥6.0+Gate→K1/K2|sonst halten

Antwortformat strikt:
1) ### Briefing — YYYY-MM-DD (max. 12 Zeilen; ACT mit modus= und trigger=)
2) # UPDATED_PORTFOLIO_STATE (vollständig)
3) # UPDATED_WATCHLIST (nur bei Status-/Positions-/Verwerfen-Änderung)
4) # NEW_LOG_ENTRY (max. 15 Zeilen, inkl. Ausführung: keine|Kauf bestätigt|Verkauf bestätigt + QA: zielpfad_status|drawdown_stufe|regelkonflikt)
5) # REJECTED_IDEA (nur bei Verwerfen)

Keine Einleitung, keine Links im Briefing, keine Regelwiederholung, kein „ich habe gekauft/verkauft“.
```
