# Dialogue · Pair Programming

> **Level:** B2 · **Focus:** thinking aloud in German, proposing, disagreeing mid-code, admitting you're lost · **Time:** ~1.5 h
> _After this module you can code and talk at the same time in German — including saying "I don't follow" without breaking the flow._

Pair programming is the hardest everyday speaking situation for a non-native developer: you have to
produce language **while** solving a problem, in real time, with no preparation. The trick is that
the language is highly repetitive — maybe forty phrases cover ninety percent of a session. Learn
them as chunks and your brain stays free for the code.

## Objectives / Lernziele

- **Think aloud** in German while coding (*Ich würde jetzt erst mal …*).
- Propose, counter-propose and disagree without slowing the session.
- Say **"I'm lost"** early and precisely — the highest-value skill here.
- Navigate the editor out loud: lines, methods, files.

## 1. Der Dialog (Deutsch)

**Jonas:** So, sollen wir? **Willst du tippen oder soll ich?**

**Huy:** Fang du an, ich schau erst mal mit. — Also, das Problem ist, dass der Endpoint bei ungültigen Daten trotzdem eine Zweihundert zurückgibt.

**Jonas:** Genau. **Wo würdest du anfangen?**

**Huy:** **Ich würde erst mal** schauen, wo die Validierung passiert. Kannst du mal in den Controller springen?

**Jonas:** Klar. — Hier, Zeile vierundzwanzig.

**Huy:** Okay. Hm, hier wird das DTO reingegeben, aber ich sehe keine Annotation. **Kann es sein, dass** die Validierung gar nicht aktiv ist?

**Jonas:** Guter Punkt. Da fehlt das `@Valid`. — **Soll ich das einfach hinzufügen?**

**Huy:** **Warte kurz** — wenn wir das ergänzen, wirft er dann eine Exception oder gibt er eine Vierhundert zurück?

**Jonas:** Standardmäßig eine Vierhundert, glaube ich.

**Huy:** **Dann lass uns das mal ausprobieren.** Schreib mal einen Test mit einem leeren Namen.

*(Jonas tippt)*

**Jonas:** So. Test läuft … und er ist rot. Aber anders als erwartet — Fünfhundert statt Vierhundert.

**Huy:** **Moment, da komme ich nicht ganz mit.** Warum fünfhundert?

**Jonas:** Weil der ExceptionHandler die ValidationException nicht kennt. Schau mal in `GlobalExceptionHandler`.

**Huy:** Ah, jetzt sehe ich es. **Verstanden.** — **Wie wäre es, wenn wir** dort einen Handler für die ValidationException ergänzen?

**Jonas:** Ja, machen wir. **Übernimmst du das Tippen?**

**Huy:** Gern. — Also, neue Methode … `handleValidation` … und die gibt ein ResponseEntity mit Status vierhundert zurück.

**Jonas:** **Genau so.** Vielleicht noch die Feldnamen in die Antwort?

**Huy:** **Guter Einwand**, aber ich würde das erst mal weglassen. Sonst wird der Scope zu groß.

**Jonas:** Passt, machen wir ein Folgeticket draus.

**Huy:** Test nochmal … grün. **Das war's eigentlich**, oder?

**Jonas:** Fast. **Lass uns kurz** noch den Test für den zu langen Namen ergänzen, dann committen wir.

**Huy:** Mache ich. — So, fertig. **Willst du drüberschauen, bevor wir pushen?**

**Jonas:** Sieht gut aus. Push ruhig.

🔊 **Schlüsselsätze zum Nachsprechen:**

```audio
Ich würde erst mal schauen, wo die Validierung passiert. Kannst du mal in den Controller springen?
```

```audio
Moment, da komme ich nicht ganz mit. Warum fünfhundert? Ah, jetzt sehe ich es. Verstanden.
```

## 2. English translation

- **Jonas:** Right, shall we? Do you want to type or shall I?
- **Huy:** You start, I'll follow along first. — So, the problem is that the endpoint still returns a 200 for invalid data.
- **Jonas:** Exactly. Where would you start?
- **Huy:** I'd first look at where the validation happens. Can you jump into the controller?
- **Jonas:** Sure. — Here, line twenty-four.
- **Huy:** Okay. Hm, the DTO is passed in here, but I don't see an annotation. Could it be that validation isn't active at all?
- **Jonas:** Good point. The `@Valid` is missing. — Shall I just add it?
- **Huy:** Hang on — if we add that, does it throw an exception or return a 400?
- **Jonas:** By default a 400, I think.
- **Huy:** Then let's just try it. Write a test with an empty name.
- **Jonas:** There. Test runs … and it's red. But differently than expected — 500 instead of 400.
- **Huy:** Hold on, I'm not quite following. Why five hundred?
- **Jonas:** Because the exception handler doesn't know the ValidationException. Have a look at `GlobalExceptionHandler`.
- **Huy:** Ah, now I see it. Understood. — How about we add a handler for the ValidationException there?
- **Jonas:** Yes, let's. Do you want to take over typing?
- **Huy:** Sure. — So, new method … `handleValidation` … and it returns a ResponseEntity with status 400.
- **Jonas:** Exactly. Maybe the field names in the response too?
- **Huy:** Good point, but I'd leave that out for now. Otherwise the scope gets too big.
- **Jonas:** Fine, let's make a follow-up ticket out of it.
- **Huy:** Test again … green. That's basically it, right?
- **Jonas:** Almost. Let's quickly add the test for the too-long name, then we'll commit.
- **Huy:** Will do. — There, done. Do you want to look it over before we push?
- **Jonas:** Looks good. Go ahead and push.

## 3. Vietnamese notes (nur für die harten Stellen)

- **Ich würde erst mal …** — `VI:` "Trước tiên tôi sẽ…" — *erst mal* = trước đã. Cụm mở đầu suy
  nghĩ thông dụng nhất khi pair.
- **Kann es sein, dass …?** — `VI:` "Có khi nào là… không?" — cách nêu giả thuyết mà không khẳng định.
- **Da komme ich nicht ganz mit.** — `VI:` "Chỗ này tôi theo không kịp." **Câu quan trọng nhất bài
  này** — nói sớm, đừng gật đại.
- **Warte kurz.** — `VI:` "Khoan đã." Dừng lại để suy nghĩ, hoàn toàn bình thường.
- **Guter Einwand** — `VI:` "Ý hay đấy" (khi phản biện). Khác *guter Punkt* một chút: *Einwand* là
  phản đối.
- **Lass uns …** — `VI:` "Mình cùng…" — *lassen* + Infinitiv, cách đề xuất thân mật.
- **Das war's eigentlich.** — `VI:` "Vậy là xong rồi nhỉ."
- **Push ruhig.** — `VI:` "Cứ push đi." *ruhig* ở đây = "cứ tự nhiên", không phải "yên tĩnh".

## 4. Important grammar (im Dialog markiert)

1. **Konjunktiv II als Denkwerkzeug** — *„Ich **würde** erst mal schauen"*, *„ich **würde** das
   weglassen"*, *„**Wie wäre es**, wenn wir …?"*. Beim Pairing schlägst du vor, du befiehlst nicht.
   Siehe [Phase 2 · Grammar](#/phase-2/grammar).
2. **Indirekte Fragen** — *„schauen, **wo** die Validierung **passiert**"*, *„Kann es sein, **dass**
   die Validierung nicht aktiv **ist**?"* — Verb ans Ende.
3. **Trennbare Verben, ständig** — *mit**kommen***, *rein**geben***, *hinzu**fügen***,
   *aus**probieren***, *weg**lassen***, *drüber**schauen***, *er**gänzen*** (untrennbar!).
4. **Modalpartikeln im Flow** — *„Schreib **mal** einen Test"*, *„Push **ruhig**"*, *„Kannst du
   **mal** springen?"*. Ohne sie klingen die Sätze wie Befehle — siehe
   [Alltag · Kaffeeküche](#/alltag/kaffeekueche).
5. **Zahlen als Statuscodes** — *eine Zweihundert*, *eine Vierhundert*, *Fünfhundert*. Im
   gesprochenen Deutsch werden HTTP-Codes als **Zahlwörter mit Artikel** behandelt.

## 5. Important vocabulary

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Validierung | die | Validierungen | validation | kiểm tra hợp lệ |
| Anmerkung / Annotation | die | Annotationen | annotation | chú thích (code) |
| Ausnahme | die | Ausnahmen | exception | ngoại lệ |
| Zeile | die | Zeilen | line (of code) | dòng |
| Methode | die | Methoden | method | phương thức |
| Einwand | der | Einwände | objection | ý phản biện |
| Folgeticket | das | Folgetickets | follow-up ticket | ticket tiếp theo |
| Umfang / Scope | der | Umfänge | scope | phạm vi |
| ergänzen | — | — | to add, supplement | bổ sung |
| weglassen | — | — | to leave out | bỏ qua |
| ausprobieren | — | — | to try out | thử |
| drüberschauen | — | — | to look over | xem qua |

→ Add these to your deck in [Flashcards](#/@flashcards).

## 6. Native expressions · Redemittel

**Session starten**

| Redemittel | English |
|---|---|
| **Willst du tippen oder soll ich?** | Do you want to type or shall I? |
| **Fang du an, ich schau erst mal mit.** | You start, I'll follow along. |
| **Wo würdest du anfangen?** | Where would you start? |
| **Was ist eigentlich genau das Problem?** | What exactly is the problem? |

**Laut denken** ⭐ — the core block

| Redemittel | English |
|---|---|
| **Ich würde erst mal …** | I'd first … |
| **Mein Gedanke wäre, dass …** | My thought would be that … |
| **Kann es sein, dass …?** | Could it be that …? |
| **Lass uns das mal ausprobieren.** | Let's just try it. |
| **Was passiert, wenn wir …?** | What happens if we …? |
| **Ich bin mir nicht sicher, ob …** | I'm not sure whether … |
| **Warte kurz, ich überlege.** | Hang on, let me think. |

**Nicht mitkommen** ⭐⭐ — say this early, not after ten minutes

| Redemittel | English |
|---|---|
| **Moment, da komme ich nicht ganz mit.** | Hold on, I'm not quite following. |
| **Kannst du das nochmal langsamer erklären?** | Could you explain that more slowly? |
| **Warum genau …?** | Why exactly …? |
| **Ich hab den Sprung nicht verstanden.** | I didn't get that jump. |
| **Ah, jetzt sehe ich es. Verstanden.** | Ah, now I see it. Understood. |

**Widersprechen im Code**

| Redemittel | English |
|---|---|
| **Guter Einwand, aber …** | Good point, but … |
| **Ich würde das anders lösen.** | I'd solve that differently. |
| **Das würde den Scope zu groß machen.** | That would make the scope too big. |
| **Machen wir ein Folgeticket draus?** | Shall we make a follow-up ticket of it? |
| **Können wir das erst mal weglassen?** | Can we leave that out for now? |

**Navigieren**

| Redemittel | English |
|---|---|
| **Kannst du mal in … springen?** | Can you jump into …? |
| **Scroll mal kurz hoch/runter.** | Scroll up/down a bit. |
| **Zeile vierundzwanzig.** | Line twenty-four. |
| **Schau mal in die Datei …** | Have a look at the file … |
| **Markier das mal.** | Select that. |

**Abschließen**

| Redemittel | English |
|---|---|
| **Test läuft … und er ist grün/rot.** | Test running … and it's green/red. |
| **Das war's eigentlich, oder?** | That's basically it, right? |
| **Willst du drüberschauen, bevor wir pushen?** | Want to look it over before we push? |
| **Push ruhig.** | Go ahead and push. |

## 7. Kultur & Technik — was eine Session gut macht

- **Sag früh, dass du nicht mitkommst.** Zehn Minuten nickend danebenzusitzen ist der teuerste
  Fehler beim Pairing — für dich und fürs Team. *„Da komme ich nicht ganz mit"* ist ein völlig
  normaler Satz, den auch Muttersprachler ständig sagen.
- **Sprache vorher klären.** *„Können wir das auf Deutsch machen? Ich bin langsamer, aber ich
  lerne."* Fast alle sagen ja — und dann bleibt es dabei.
- **Rollen tauschen.** Alle 20–30 Minuten wechseln. Als Beifahrer sprichst du mehr, als Fahrer
  weniger — nutze die Beifahrerzeit zum Üben.
- **Statuscodes und Zahlen laut üben.** *vierundzwanzig*, *vierhundert*, *fünfhundert* — Zahlen sind
  beim schnellen Sprechen die häufigste Verständnislücke, nicht die Fachwörter.
- **Fachwörter bleiben englisch.** *Controller, Endpoint, Exception, Commit, Scope* sagt man auf
  Deutsch genauso. Du musst nur das **Bindegewebe** dazwischen können — genau das üben die
  Redemittel oben.

---

## 🧾 Zusammenfassung · Summary

Pair programming German is about forty repeated chunks, not vocabulary breadth. Three blocks carry
a session: **thinking aloud** (*Ich würde erst mal … · Kann es sein, dass …? · Lass uns das mal
ausprobieren*), **navigating** (*Kannst du mal in … springen? · Zeile vierundzwanzig*), and — most
important — **admitting you're lost early** (*Moment, da komme ich nicht ganz mit*). Proposals go in
Konjunktiv II, disagreement starts with *Guter Einwand, aber …*, and the technical nouns stay
English. Practise the **numbers** out loud; they break comprehension more often than the jargon does.

## 📇 Vokabel-Checkliste · Vocabulary checklist

| Deutsch | Artikel | Plural | English | VI (if hard) |
|---|---|---|---|---|
| Beifahrer | der | Beifahrer | navigator (in pairing) | người ngồi cạnh |
| Bindegewebe | das | — | connective tissue (fig.) | phần nối, chất kết dính |
| Gedanke | der | Gedanken | thought | suy nghĩ |
| Sprung | der | Sprünge | jump, leap (in reasoning) | bước nhảy (lập luận) |
| Rolle | die | Rollen | role | vai trò |
| tauschen | — | — | to swap | đổi |
| markieren | — | — | to select, highlight | bôi đen |
| nicken | — | — | to nod | gật đầu |

→ Drill these in [Flashcards](#/@flashcards).

## 🗣️ Sprechübung · Speaking practice

1. **Think aloud alone.** Open a real file and narrate what you're doing for 3 minutes, in German.
   It feels absurd; do it anyway — it's the exact skill.
2. **The lost drill.** Say all five "not following" phrases until they come without hesitation.
3. **Numbers.** Say aloud: *Zeile 24, 147, 302 · Status 200, 400, 404, 500 · Port 8080.*
4. **Propose and counter.** Take a real design choice and argue both sides with *Guter Einwand,
   aber …*

```audio
Willst du tippen oder soll ich? Ich würde erst mal schauen, wo die Validierung passiert. Moment, da komme ich nicht ganz mit — warum gibt er eine Fünfhundert zurück?
```

## ❓ Mini-Quiz

1. Give the single most useful sentence when you've lost the thread.
2. Complete politely: *"___ ___ ___, ___ wir dort einen Handler ergänzen?"* (How about we …)
3. Why is *Ich würde erst mal …* better than *Wir machen jetzt …* in a pairing session?
4. How do you say line 24 and status 500 aloud?
5. Translate: *Good point, but I'd leave that out for now.*

> **Lösungen:** 1) *Moment, da komme ich nicht ganz mit.* · 2) *__Wie wäre es__, __wenn__ wir dort
> einen Handler ergänzen?* · 3) Konjunktiv II macht daraus einen **Vorschlag** statt einer
> Entscheidung — beim Pairing entscheidet ihr gemeinsam · 4) *Zeile vierundzwanzig* ·
> *(eine) Fünfhundert* · 5) *Guter Einwand, aber ich würde das erst mal weglassen.*
> More at [Quizzes](#/@quiz).

## 📝 Hausaufgabe · Homework

- [ ] Narrate **3 minutes of real coding** in German, out loud, on three days.
- [ ] Memorize the **five "not following"** phrases — this block first.
- [ ] Practise **20 numbers** aloud: line numbers, status codes, ports.
- [ ] Ask one colleague to pair **in German** for 30 minutes.
- [ ] Shadow both 🔊 clips **5× each**.

## 📚 Empfohlene Ressourcen · Recommended resources

- **Related:** [Dialogue — Code Review](#/dialogues/code-review) for the asynchronous version.
- **Grammar:** [Phase 2 · Grammar](#/phase-2/grammar) — Konjunktiv II is the whole politeness engine here.
- **Partikeln:** [Alltag · Kaffeeküche](#/alltag/kaffeekueche) — *mal*, *ruhig*, *doch* in the flow.
- **Listening:** *Engineering Kiosk* — two German devs thinking aloud, which is exactly this register.
