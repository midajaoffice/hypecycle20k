# Operator-Lernregeln (Meta)

> Nur Git/lokal — **nicht** ins ChatGPT Project.  
> Quartalsweise aus Decision-Log destillieren.

---

1. Ohne MC-Broker-Fill/Kursupdate: kein pnl-Update, Modus `maintenance`, DQ nicht hochstufen.
2. Kein K1 bei 4 Positionen oder Cash-Reserve unter 20 % PV (Ausnahme nur mit dokumentiertem Override + `regelkonflikt=ja` im Log).
3. ETF-/Rohstoff-Core: `thesis_scan` für News/Makro — Kurse nicht aus Web erfinden; Drawdown/Rebalance aus §6 vor starren pnl-Heuristiken.
4. Gates und EUR-Größe vor jedem „Kaufen prüfen“; Kleinsttickets vermeiden (bei kleinem PV besonders).
5. Verkauf nur V1 mit `trigger=kurs|news|beides` und §4/§6-Exit zitiert — Ausführung erst nach MC.
6. Jeder Log-Eintrag: QA-Zeile (`zielpfad_status`, `drawdown_stufe`, `regelkonflikt`) — sonst kein sauberer Zielpfad-Review.
