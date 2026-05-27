# Erster Start-Prompt (nach aktueller Version)

> Copy-paste — **nicht** ins Project hochladen.  
> **Keine festen Euro-Zahlen hier:** North Star, PV und Ziel stehen in `portfolio-state.md` §0 und im **OPERATOR_VIEW**.

Project-Dateien aktuell? Dann senden:

```text
Folge operator-protocol.md Phase 1–5 (intern).
Lies zuerst OPERATOR_VIEW und §0 North Star in portfolio-state.md — dort sind Starsumme, Zielwert, Horizont (z. B. tag x/N) und Modus verbindlich.
Lies „Portfolio-Lebenszyklus“, „Lifecycle-Entscheidungsbaum“, „Operator-Modi“ und „Trader-Disziplin“ in operator-core.md (ETF-Core-Trigger-Priorität: Drawdown/Rebalance vor starren pnl-Heuristiken).

KONTEXT (nur aus Files, nicht erfinden):
- Bestand, Cash, PV: nur aus portfolio-state.md §2 / OPERATOR_VIEW
- Ausführungs- und Risikoregeln: portfolio-state.md §3 und §6 (6-Monats-Framework, Drawdown-Stufen, Rebalance)
- Gebühren/Steuer-Modell: portfolio-state §0 / operator-core (Richtwerte)
- Erlaubt/Verboten: operator-core „Märkte“

AUFGABE — Erster Zyklus in diesem Setup:
VALIDATE (DQ) → RESEARCH (Modus laut OPERATOR_VIEW: maintenance | thesis_scan | action) → SCORE (Watchlist/Positionen laut Files) → EMIT
Portfolio-Lebenszyklus: operator-protocol.md (max. 4 Positionen, Cash-Reserve Standard 20 % — bei dokumentiertem Override siehe portfolio-state §3 + Log regelkonflikt).

Antwortformat strikt:
1) ### Briefing — YYYY-MM-DD (max. 12 Zeilen; NS-Zeile = Werte aus §0/OPERATOR_VIEW, tag x/N; ACT mit modus= und trigger=)
2) # UPDATED_PORTFOLIO_STATE (vollständig, OPERATOR_VIEW = Briefing-Zahlen)
3) # UPDATED_WATCHLIST (nur wenn geändert)
4) # NEW_LOG_ENTRY (max. 15 Zeilen; Ausführung: keine|Kauf bestätigt|Verkauf bestätigt; QA: zielpfad_status=…; drawdown_stufe=…; regelkonflikt=ja|nein)
5) # REJECTED_IDEA (nur bei Verwerfen)

Keine Einleitung, keine Links im Briefing, keine Regelwiederholung, kein „ich habe gekauft/verkauft“.
```
