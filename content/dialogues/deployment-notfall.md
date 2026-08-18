# Dialogue · Deployment-Notfall außerhalb der Arbeitszeit

> **Level:** B2+ · **Focus:** am Telefon einen Vorfall melden, Fehler mündlich beschreiben, Rollback koordinieren · **Time:** ~1.5 h
> _After this module you can run an incident call in German at 23:00 — the hardest German there is, and the most useful._

Everything works against you here: it's late, the line is bad, you're stressed, and you cannot see
the other person. That's exactly why the language has to be **prepared, not improvised**. This
module gives you the fixed phrases for the three moves that matter: **report clearly**, **describe
the error precisely**, and **agree who does what**.

## Objectives / Lernziele

- Open an incident call with the essential facts in one breath.
- Describe symptoms and error behaviour on the phone.
- Propose and coordinate a **Rollback**.
- Hand over and close the incident.

## 1. Der Dialog (Deutsch)

*(22:47 Uhr — Huy ruft Jonas im Bereitschaftsdienst an.)*

**Jonas:** Jonas hier.

**Huy:** Hi Jonas, hier ist Huy. Sorry für die Uhrzeit. **Wir haben ein Problem in Produktion.**

**Jonas:** Kein Problem, dafür bin ich da. **Schieß los — was ist los?**

**Huy:** **Seit etwa zwanzig Minuten** liefert der Bestellservice bei ungefähr jeder dritten Anfrage einen Fünfhunderter. **Angefangen hat es** kurz nach dem Deployment um zweiundzwanzig Uhr fünfzehn.

**Jonas:** Okay. **Ist das reproduzierbar** oder sporadisch?

**Huy:** Sporadisch, aber häufig. **Im Log sehe ich** massenhaft Timeouts zur Datenbank.

**Jonas:** **Kannst du mir sagen**, ob die Datenbank selbst erreichbar ist?

**Huy:** Moment, ich schaue … Ja, ich komme drauf. Die CPU ist normal, aber die Anzahl der offenen Verbindungen ist am Limit.

**Jonas:** **Das klingt nach** dem Connection-Pool. Was stand denn in dem Release drin?

**Huy:** Unter anderem eine Konfigurationsänderung. **Ich bin mir ziemlich sicher, dass** wir da das Verbindungslimit angefasst haben.

**Jonas:** **Dann würde ich vorschlagen**, wir rollen erst mal zurück und schauen uns das morgen in Ruhe an. **Bist du damit einverstanden?**

**Huy:** Ja, absolut. **Machst du den Rollback oder soll ich?**

**Jonas:** Mach du ihn, du bist schon drin. Ich schaue parallel ins Monitoring. **Sag Bescheid, wenn er durch ist.**

**Huy:** Alles klar. … So, Rollback läuft. … **Er ist durch.**

**Jonas:** Ich sehe es auch — die Fehlerrate geht runter. **Warten wir noch fünf Minuten**, ob es stabil bleibt.

**Huy:** *(nach fünf Minuten)* **Sieht gut aus**, keine Fünfhunderter mehr.

**Jonas:** Super. **Dann machen wir für heute Schluss.** Schreibst du eine kurze Notiz in den Incident-Channel? Details dann morgen im Post-Mortem.

**Huy:** Mache ich. **Danke fürs schnelle Rangehen** — und sorry nochmal für die Uhrzeit.

**Jonas:** Alles gut. **Bis morgen.**

🔊 **Schlüsselsätze zum Nachsprechen:**

```audio
Hi Jonas, hier ist Huy. Wir haben ein Problem in Produktion. Seit etwa zwanzig Minuten liefert der Bestellservice bei jeder dritten Anfrage einen Fünfhunderter.
```

```audio
Das klingt nach dem Connection-Pool. Dann würde ich vorschlagen, wir rollen erst mal zurück. Bist du damit einverstanden?
```

## 2. English translation

- **Jonas:** Jonas here. — **Huy:** Hi Jonas, it's Huy. Sorry about the time. We have a problem in production.
- **Jonas:** No problem, that's what I'm here for. Fire away — what's going on?
- **Huy:** For about twenty minutes the order service has been returning a 500 on roughly every third request. It started shortly after the deployment at 22:15.
- **Jonas:** Okay. Is it reproducible or sporadic? — **Huy:** Sporadic, but frequent. In the log I'm seeing masses of database timeouts.
- **Jonas:** Can you tell me whether the database itself is reachable? — **Huy:** One moment, let me look … Yes, I can get to it. CPU is normal, but the number of open connections is at the limit.
- **Jonas:** That sounds like the connection pool. What was in that release? — **Huy:** Among other things a configuration change. I'm fairly sure we touched the connection limit there.
- **Jonas:** Then I'd suggest we roll back for now and look at it properly tomorrow. Are you okay with that? — **Huy:** Yes, absolutely. Are you doing the rollback or shall I?
- **Jonas:** You do it, you're already in there. I'll check monitoring in parallel. Let me know when it's through.
- **Huy:** Will do. … Right, rollback is running. … It's through.
- **Jonas:** I see it too — the error rate is dropping. Let's wait another five minutes to see if it stays stable.
- **Huy:** *(five minutes later)* Looks good, no more 500s.
- **Jonas:** Great. Then let's call it a night. Will you write a short note in the incident channel? Details tomorrow in the post-mortem.
- **Huy:** Will do. Thanks for picking up so fast — and sorry again about the time. — **Jonas:** All good. See you tomorrow.

## 3. Vietnamese notes (nur für die harten Stellen)

- **Schieß los.** — `VI:` "Nói đi." Khẩu ngữ, rất thân mật — dấu hiệu là bạn có thể nói thẳng vào việc.
- **einen Fünfhunderter liefern** — `VI:` "trả về lỗi 500". Mã HTTP nói thành **danh từ có đuôi -er**:
  *ein Vierhunderter, ein Fünfhunderter*.
- **Ich komme drauf.** — `VI:` "Tôi vào được." (*auf etwas kommen* ở đây = truy cập được)
- **anfassen** (eine Konfiguration) — `VI:` "đụng vào, sửa". Khẩu ngữ dev.
- **Das klingt nach …** — `VI:` "Nghe có vẻ là do…" — nêu giả thuyết mà không khẳng định.
- **Er ist durch.** — `VI:` "Xong rồi." (*durch sein* = hoàn tất)
- **Danke fürs schnelle Rangehen.** — `VI:` "Cảm ơn đã bắt máy nhanh." (*rangehen* = nghe máy)
- **Dann machen wir für heute Schluss.** — `VI:` "Vậy hôm nay dừng ở đây."

## 4. Der Notfall-Aufbau — vier Sätze, immer gleich

Am Telefon hast du keine Zeit zu improvisieren. Diese Reihenfolge trägt jeden Incident-Call:

| Schritt | Was du sagst | Beispiel |
|---|---|---|
| **1 · Wer + Lage** | Name, dann sofort der Kern | *Hier ist Huy. Wir haben ein Problem in Produktion.* |
| **2 · Seit wann + was** | Zeitraum, Symptom, Umfang | *Seit etwa 20 Minuten liefert der Bestellservice bei jeder dritten Anfrage einen Fünfhunderter.* |
| **3 · Auslöser-Verdacht** | was sich geändert hat | *Angefangen hat es kurz nach dem Deployment um 22:15.* |
| **4 · Was du schon weißt** | Beobachtung, nicht Interpretation | *Im Log sehe ich massenhaft Timeouts zur Datenbank.* |

> **Der häufigste Fehler unter Stress:** mit der Vermutung anfangen statt mit der Beobachtung.
> *„Ich glaube, der Connection-Pool ist kaputt"* zwingt den anderen, deine Hypothese zu prüfen.
> *„Ich sehe massenhaft Timeouts"* gibt ihm die Rohdaten — und er kommt oft schneller selbst darauf.

**Zahlen laut sprechen.** Uhrzeiten und Statuscodes sind am Telefon die häufigste Verständnislücke:
*zweiundzwanzig Uhr fünfzehn*, *ein Fünfhunderter*, *jede dritte Anfrage*. Genau das vorher üben —
siehe [Phase 3 · Listening · Übungsteil](#/phase-3/listening-uebungen).

## 5. Important grammar (im Dialog markiert)

1. **seit + Dativ + Präsens** — *„**Seit** etwa zwanzig Minuten **liefert** der Service …"*. Deutsch
   nimmt die Gegenwart, wo Englisch „has been returning" sagt. Der häufigste Lernerfehler in
   genau dieser Situation.
2. **Indirekte Frage** — *„**Kannst du mir sagen, ob** die Datenbank erreichbar **ist**?"* Verb ans
   Ende.
3. **Konjunktiv II für Vorschlag** — *„**Dann würde ich vorschlagen**, wir rollen zurück."* Nach
   *vorschlagen* folgt hier ein Hauptsatz — im mündlichen Deutsch völlig üblich.
4. **Trennbare Verben unter Druck** — *zurück**rollen***, *Bescheid **sagen***, *ran**gehen***,
   *durch **sein***. Das Präfix landet am Satzende; wer es verschluckt, wird missverstanden.
5. **Höfliche Aufforderung im Imperativ** — *„**Sag** Bescheid, wenn er durch ist."* Im *du*-Team
   ist der schlichte Imperativ freundlich, nicht schroff.

## 6. Important vocabulary

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Bereitschaftsdienst | der | -dienste | on-call duty | trực hệ thống |
| Vorfall | der | Vorfälle | incident | sự cố |
| Rollback | das | Rollbacks | rollback | quay lui phiên bản |
| Fehlerrate | die | Fehlerraten | error rate | tỉ lệ lỗi |
| Verbindung | die | Verbindungen | connection | kết nối |
| Auslöser | der | Auslöser | trigger, cause | nguyên nhân kích hoạt |
| Notiz | die | Notizen | note | ghi chú |
| Post-Mortem | das | Post-Mortems | post-mortem | họp rút kinh nghiệm |
| zurückrollen | — | — | to roll back | quay lui |
| anfassen | — | — | to touch, modify | đụng vào |
| rangehen | — | — | to pick up (the phone) | bắt máy |
| durch sein | — | — | to be finished | xong |

→ Add these to your deck in [Flashcards](#/@flashcards).

## 7. Native expressions · Redemittel

**Anruf eröffnen** ⭐

| Redemittel | English |
|---|---|
| **Sorry für die Uhrzeit.** | Sorry about the time. |
| **Wir haben ein Problem in Produktion.** | We have a problem in production. |
| **Es ist dringend.** | It's urgent. |
| **Hast du kurz zwei Minuten?** | Do you have two minutes? |

**Lage beschreiben** ⭐

| Redemittel | English |
|---|---|
| **Seit etwa … Minuten …** | For about … minutes … |
| **Angefangen hat es kurz nach …** | It started shortly after … |
| **Betroffen ist / sind …** | Affected is / are … |
| **Es trifft ungefähr jede dritte Anfrage.** | It hits roughly every third request. |
| **Im Log sehe ich …** | In the log I'm seeing … |
| **Reproduzierbar ist es nicht — eher sporadisch.** | It's not reproducible — more sporadic. |

**Nachfragen**

| Redemittel | English |
|---|---|
| **Kannst du mir sagen, ob …?** | Can you tell me whether …? |
| **Ist das reproduzierbar?** | Is it reproducible? |
| **Was stand in dem Release drin?** | What was in that release? |
| **Seit wann genau?** | Since exactly when? |

**Hypothese und Vorschlag**

| Redemittel | English |
|---|---|
| **Das klingt nach …** | That sounds like … |
| **Ich bin mir ziemlich sicher, dass …** | I'm fairly sure that … |
| **Dann würde ich vorschlagen, wir …** | Then I'd suggest we … |
| **Bist du damit einverstanden?** | Are you okay with that? |

**Koordinieren**

| Redemittel | English |
|---|---|
| **Machst du das oder soll ich?** | Are you doing it or shall I? |
| **Ich schaue parallel ins Monitoring.** | I'll check monitoring in parallel. |
| **Sag Bescheid, wenn er durch ist.** | Let me know when it's through. |
| **Warten wir noch fünf Minuten.** | Let's wait another five minutes. |

**Abschließen**

| Redemittel | English |
|---|---|
| **Sieht gut aus.** | Looks good. |
| **Dann machen wir für heute Schluss.** | Then let's call it a night. |
| **Details morgen im Post-Mortem.** | Details tomorrow in the post-mortem. |
| **Danke fürs schnelle Rangehen.** | Thanks for picking up so fast. |

## 8. Kultur & Praxis

- **Anrufen ist erlaubt — auch nachts.** Wer Bereitschaft hat, **erwartet** den Anruf. *„Sorry für
  die Uhrzeit"* reicht als Einleitung; sich länger zu entschuldigen kostet nur Zeit.
- **Beobachtung vor Interpretation.** Sag, was du **siehst**, nicht was du **glaubst**. Die
  Hypothese kommt danach, klar als solche markiert (*Das klingt nach …*).
- **Rollback ist keine Niederlage.** In deutschen Teams gilt „erst stabilisieren, dann verstehen"
  als professionell, nicht als Aufgeben.
- **Klare Rollen, laut ausgesprochen.** *„Machst du das oder soll ich?"* verhindert, dass zwei Leute
  gleichzeitig eingreifen — im Incident der teuerste Fehler.
- **Post-Mortem ist schuldfrei.** Wie in der [Retrospektive](#/dialogues/retrospektive) wird
  unpersönlich formuliert: *Ausgelöst wurde der Vorfall durch …*, nicht *X hat …*.
- **Kurze Notiz noch am selben Abend.** Zwei Sätze im Incident-Channel; die Analyse kommt morgen.

---

## 🧾 Zusammenfassung · Summary

An incident call is four fixed sentences: **who + situation**, **since when + what**, **suspected
trigger**, **what you already observe** — in that order, and always **observation before
hypothesis**. Grammar to have ready: **seit + Präsens** (not the perfect), indirect questions with
the verb last, Konjunktiv II for proposals, and separable prefixes landing at the end
(*zurückrollen, Bescheid sagen, durch sein*). Say numbers deliberately — times and status codes are
what break down on a bad line. Roles get spoken aloud (*Machst du das oder soll ich?*), a rollback
counts as professional, and the post-mortem stays impersonal.

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Incident-Channel | der | -Channels | incident channel | kênh sự cố |
| Beobachtung | die | Beobachtungen | observation | quan sát |
| Hypothese | die | Hypothesen | hypothesis | giả thuyết |
| Eingriff | der | Eingriffe | intervention | can thiệp |
| Stabilisierung | die | — | stabilisation | ổn định lại |
| sporadisch | — | — | sporadic | thỉnh thoảng |
| reproduzierbar | — | — | reproducible | tái hiện được |
| eingreifen | — | — | to intervene | can thiệp |

→ Drill these in [Flashcards](#/@flashcards).

## 🗣️ Sprechübung · Speaking practice

1. **Die vier Sätze** aus §4 mit einem echten Vorfall aus deiner Vergangenheit — in **unter 30
   Sekunden**, laut.
2. **Zahlen-Drill:** *22:15 · 23:47 · ein Fünfhunderter · ein Vierhunderterdrei · jede dritte
   Anfrage · 12 Prozent.*
3. **Rollen klären:** dreimal *„Machst du … oder soll ich?"* mit verschiedenen Aufgaben.
4. **Abschluss:** Notiz für den Incident-Channel in zwei Sätzen formulieren.

```audio
Hier ist Huy. Seit etwa zwanzig Minuten liefert der Bestellservice bei jeder dritten Anfrage einen Fünfhunderter. Angefangen hat es nach dem Deployment um zweiundzwanzig Uhr fünfzehn. Im Log sehe ich massenhaft Timeouts.
```

## ❓ Mini-Quiz

1. Korrigiere: *„Seit zwanzig Minuten hat der Service Fehler geliefert."*
2. Womit beginnst du — Beobachtung oder Vermutung? Warum?
3. Wie sagst du „a 500" auf Deutsch?
4. Wie klärst du, wer eingreift?
5. Was schreibst du noch am selben Abend?

> **Lösungen:** 1) *Seit zwanzig Minuten **liefert** der Service Fehler.* — *seit* + **Präsens** ·
> 2) **Beobachtung** — die Vermutung zwingt den anderen, deine Hypothese zu prüfen, statt selbst zu
> denken · 3) *ein Fünfhunderter* · 4) *Machst du das oder soll ich?* · 5) eine **kurze Notiz** im
> Incident-Channel; die Analyse kommt ins Post-Mortem. More at [Quizzes](#/@quiz).

## 📝 Hausaufgabe · Homework

- [ ] Übe die **vier Notfall-Sätze** mit einem echten vergangenen Vorfall, unter 30 Sekunden.
- [ ] **Zahlen laut** trainieren: zehn Uhrzeiten und zehn Statuscodes.
- [ ] Memoriere den ⭐-Block **Anruf eröffnen** und **Lage beschreiben**.
- [ ] Schreibe eine **Incident-Notiz** in zwei Sätzen auf Deutsch.
- [ ] Shadow beide 🔊 Clips **5× each**.

## 📚 Empfohlene Ressourcen · Recommended resources

- **Verwandt:** [Dialogue · Production Incident](#/dialogues/incident) (im Büro),
  [Retrospektive](#/dialogues/retrospektive) (das Post-Mortem danach).
- **Telefon-Deutsch:** [Alltag · Telefon: Bank & Handyvertrag](#/alltag/telefon-bank-vertrag).
- **Zahlen & Hören:** [Phase 3 · Listening · Übungsteil](#/phase-3/listening-uebungen).
- **Danach:** [Phase 3 · Writing · Übungsteil](#/phase-3/writing-uebungen) — das Post-Mortem schreiben.
