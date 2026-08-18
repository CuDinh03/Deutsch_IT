# UPGRADE PLAN — Nâng cấp toàn diện nội dung `german-it-roadmap`

> ## 👉 Bắt đầu một phiên mới? Đọc [AUTHORING.md](AUTHORING.md) trước.
>
> Ở đó có: cú pháp 3 fence tuỳ biến (`uebung` / `spoiler` / `hoertext`), quy trình một đợt từ
> đầu đến cuối, các lệnh kiểm tra, và danh sách lỗi **đã sửa rồi — đừng tái tạo**.
>
> **Trạng thái 18/08/2026**: 156 module · ~319k từ ·
> **1.756 bài tập tương tác** · 873 flashcards · 19 quiz · checklist **đủ 52 tuần**.
> **Xong toàn bộ Đợt 0–9.** Mọi module trong kế hoạch đã viết xong. Việc còn lại: flashcards
> 873 → ~2.050, làm theo từng đợt. **Pass 1 xong** (12 module IT deep dive → 145 thẻ).
> Còn ~560 thuật ngữ đã đo được — xem AUTHORING §8.


> Bản kế hoạch nội dung + phần kỹ thuật tối thiểu để nội dung đó thật sự chạy được trong app.
> Dựa trên: audit toàn bộ repo (**79 module, ~121.500 từ** — số đo lại 17/08/2026) + các quyết định đã chốt ngày 17/08/2026.
>
> **Rev 2 · 17/08/2026** — sau khi đối chiếu plan với code thật, ba thay đổi lớn (đánh dấu 🆕 trong tài liệu):
> 1. Thêm **Đợt 0** — mở khoá kỹ thuật, **bắt buộc chạy trước Đợt 1** (renderer chưa giấu được đáp án ⇒ template Übungsteil không dùng được).
> 2. **Chia lại Đợt 4–5** của Rev 1 (28–29 deliverable/đợt, không khả thi trong 1 phiên) → 9 đợt cân bằng ~9–13 deliverable.
> 3. **Giải tán "đợt 6 gom hết code"** — mỗi đợt tự ship: content + index entry + flashcards/quiz + `node build.js` + commit.

---

## 0. Các quyết định đã chốt

| Câu hỏi | Quyết định |
|---|---|
| Điểm xuất phát | **Giữ B1 start** — không thêm Phase 0, không kéo dài timeline |
| Hướng ưu tiên | **Cả 4 mảng**: đào sâu 54 module · thư viện thực chiến · học liệu tương tác · luyện thi — **cộng thêm yêu cầu riêng: luyện nghe + hội thoại đời thường (công ty, quán cà phê, sinh hoạt…)** |
| Ngôn ngữ giải thích | **Giữ tiếng Anh** (ví dụ tiếng Đức, `VI:` cho từ khó) — như CONTENT-STYLE-GUIDE hiện tại |
| Độ dày bài tập | **Workbook đầy đủ**: 20–40 bài tập/module, đủ dạng, có đáp án + giải thích chi tiết |

---

## 1. Audit hiện trạng — vì sao thấy "sơ sài"

Nội dung hiện tại **có khung tốt** (style guide chặt, 6 phase mạch lạc, 52-week plan chi tiết, vocab luôn kèm Artikel + Plural + VI) nhưng "mỏng" ở đúng những chỗ quyết định việc học có vào hay không:

| # | Điểm yếu | Bằng chứng trong repo |
|---|---|---|
| 1 | **Bài tập quá ít** | Mỗi module chỉ có Mini-Quiz 3–5 câu; homework là gạch đầu dòng tự làm, không có đáp án mẫu, không có bài chữa |
| 2 | **Luyện nghe = danh sách link** | Các module `listening.md` chủ yếu giới thiệu podcast/kênh; **không có bài nghe tại chỗ** (script + câu hỏi + Diktat) dù app đã có TTS |
| 3 | **Hội thoại quá ít & chỉ có công sở** | 5 dialogues (standup, 1:1, code review, sprint planning, incident) — **không có hội thoại đời thường**: cà phê, ăn trưa, small talk, thuê nhà, Amt, bác sĩ… |
| 4 | **Interview bank hẹp** | 3 bộ (Backend, DevOps, Spring) — thiếu HR/behavioral, system design, đàm phán lương, và toàn bộ mảng **hồ sơ xin việc** (Lebenslauf, Anschreiben) |
| 5 | **Flashcards mới ~237/2000+ thẻ** | Đếm lại: 58 + 153 + 26 thẻ trong `flashcards.js` / `-2.js` / `-3.js`. README tự nhận mục tiêu 2000+; 12 vocab module có sẵn ~350–400 từ trong bảng nhưng chưa thành thẻ |
| 6 | **Quiz engine gần rỗng** | `quizzes.js` 6,7 KB = **4 quiz / 21 câu** — không phủ 54 module |
| 7 | **Không có luyện thi** | 52-week plan hẹn 4 mốc mock (W8/W20/W44/W51) nhưng **không tồn tại module luyện thi nào**: không chiến thuật theo Teil, không Modelltest, không bài viết mẫu/khung chấm |
| 8 | **Speaking thiếu kịch bản luyện** | Prompt nói chung chung ("record yourself"), thiếu drill có cấu trúc: shadowing theo đoạn, Q&A ping-pong có đáp án gợi ý, bảng Redemittel mở rộng |
| 9 🆕 | **Renderer không giấu được đáp án** | `js/markdown.js` escape **mọi** HTML thô (dòng 227: `renderInline` → `escapeHtml`); grep `details\|summary\|spoiler` trong `markdown.js` + `app.js` + `styles.css` = **0 kết quả**. Mini-Quiz 4 câu dùng blockquote `> **Lösungen:**` thì chấp nhận được, nhưng workbook 20–40 bài mà đáp án luôn hiện khi scroll thì mất sạch giá trị luyện tập |

Kết luận: **không cần viết lại** phần giảng (đã đạt chuẩn ~800–1500 từ/module) — cần **bồi thêm lớp luyện tập + mở rộng thư viện** xung quanh khung sẵn có. 🆕 Nhưng điểm 9 là **điều kiện tiên quyết**: phải sửa renderer trước khi sản xuất workbook hàng loạt, nếu không sẽ phải viết lại format của cả 54 module.

---

## 2. Mục tiêu & nguyên tắc

**Mục tiêu:** biến handbook từ "sách đọc có quiz nhỏ" thành **giáo trình tự học khép kín**: đọc → luyện (workbook) → nghe (script) → nói (drill) → kiểm tra (quiz/mock) — tất cả offline trong app.

Nguyên tắc giữ nguyên từ CONTENT-STYLE-GUIDE:

1. Giải thích tiếng Anh, ví dụ tiếng Đức + gloss, `VI:` chỉ cho từ thật khó.
2. Mọi danh từ mới: **Artikel + Plural**. Thuật ngữ theo bảng canonical.
3. Skeleton module giữ nguyên; phần mới chèn thành section chuẩn (xem template §3.1).
4. Không lặp lại lý thuyết — cross-link về module gốc.
5. Công ty/ngữ cảnh thực tế (N26, Zalando, SAP…), không bịa facts.

---

## 3. Workstream A — Workbook hóa 54 module phase (ưu tiên cao nhất)

### 3.1. Template chuẩn mới cho mỗi module

Chèn **trước** phần Zusammenfassung một section lớn:

```
## 🏋️ Übungsteil · Workbook  (20–40 bài, chia 4 khối)

### A. Erkennen — nhận diện (5–8 bài, dễ)
   trắc nghiệm, nối cột, đánh dấu đúng/sai, tìm lỗi trong câu cho sẵn
### B. Anwenden — vận dụng có khung (8–15 bài)
   Lückentext (điền khuyết), chia động từ/biến cách, Satzumbau (đảo/ghép câu),
   transformation (Aktiv→Passiv, direkt→höflich, Präsens→Perfekt…)
### C. Produzieren — sản xuất (5–10 bài)
   dịch EN→DE theo ngữ cảnh dev, viết câu theo prompt, mini-writing 3–5 câu
### D. Transfer — tình huống thật (2–5 bài)
   áp vào công việc thật của người học (mô tả project, viết status, trả lời standup)

## ✅ Lösungen & Erklärungen
   [MỞ fence spoiler]                       ← xem ghi chú 🆕 ngay dưới
   đáp án TỪNG bài; bài nào hay sai kèm 1–2 dòng giải thích "vì sao";
   bài viết tự do → có bài mẫu (Musterlösung) thay vì đáp án đóng
   [ĐÓNG fence spoiler]
```

Quy ước đánh số bài `A1, A2… B1…` để sau này quiz engine trỏ tới được.

🆕 **Đáp án BẮT BUỘC nằm trong một fence `spoiler`** — tức là mở bằng ba dấu backtick + chữ
`spoiler`, đóng bằng ba dấu backtick, y hệt cách `audio` và `mermaid` đang dùng. Mặc định gập lại,
click mới mở. Fence này **chưa tồn tại** — `js/markdown.js` phải học nó ở **Đợt 0** (§10.A1), theo
đúng pattern tại `markdown.js:197`. Không có nó thì workbook = đề bài kèm đáp án ngay bên dưới,
tức là không luyện được gì.

> ⚠️ Lưu ý khi soạn tài liệu: `markdown.js` chỉ đóng fence khi gặp dòng **đúng ba** backtick
> (`markdown.js:194`) — **không hỗ trợ fence lồng nhau / fence 4 backtick**. Nên trong file content
> tuyệt đối không lồng fence; nếu cần minh hoạ một fence thì mô tả bằng chữ như trên.

### 3.1b. ✅ CHỐT (17/08/2026): workbook nằm ở **file riêng**

Übungsteil + Lösungen **không nhồi vào file dạy** mà tách thành `phase-N/<module>-uebungen.md`.

- Áp dụng cho **36 module dạy** (6 phase × grammar/vocabulary/speaking/listening/reading/writing).
- `overview` / `plan` / `assessment` (18 file) **giữ bài tập inline** — chỉ 8–12 bài, không đáng tách.
- File dạy giữ nguyên Mini-Quiz 3–5 câu như cũ, thêm 1 dòng link xuống file Übungen; file Übungen
  link ngược lên file dạy (cross-link 2 chiều theo DoD §9).

**Lý do:** (1) phần dạy 800–1500 từ không bị chôn dưới 2.500 từ bài tập; (2) sidebar hiện rõ
"Grammar" + "Grammar · Übungen", học xong lý thuyết mới mở bài tập; (3) hợp với lazy-load ở §10.A2 —
file Übungen chỉ tải khi thật sự mở.

**Hệ quả:** +36 file → tổng module ~111 → **~147**. Mỗi đợt workbook sinh **9 file sửa + 6 file mới**.

### 3.2. Phân bổ theo loại module (× 6 phase)

| Loại module | Số bài tập | Trọng tâm workbook |
|---|---|---|
| grammar | 35–40 | đủ 4 khối A–D; nhiều transformation + tìm lỗi |
| vocabulary | 25–30 | gender drill, Komposita, collocation, odd-one-out, điền từ theo ngữ cảnh |
| speaking | 20–25 | kịch bản drill: shadowing từng đoạn, Q&A có đáp án gợi ý, bảng Redemittel mở rộng (≥30 câu/module) |
| listening | 20–25 | **bài nghe tại chỗ** (xem Workstream C3) + câu hỏi hiểu + Diktat |
| reading | 20–25 | đoạn đọc kèm ngay trong module (150–300 từ, đúng level) + câu hỏi + từ vựng đoán nghĩa |
| writing | 20–25 | đề viết + **Musterlösung** + checklist tự chấm + bảng lỗi hay gặp |
| overview / plan / assessment | 8–12 | giữ nhẹ; assessment nâng cấp thành **bài kiểm tra phase hoàn chỉnh có thang điểm** (xem A.3) |

Ước lượng: **54 module × trung bình ~25 bài ≈ 1.300–1.500 bài tập có đáp án.**

### 3.3. Nâng cấp riêng cho `assessment.md` (6 file)

Mỗi phase assessment thành **mock test thật**: 4 kỹ năng, đề cụ thể, thời gian làm bài, thang điểm /100, ngưỡng qua phase (≥70), bảng "sai ở đâu → quay lại module nào". Đây là 4 mốc W8/W20/W44/W51 mà 52-week plan đã hứa.

### 3.4. Foundations & 52-week plan

- 2 file foundations: thêm workbook nhẹ (10–12 bài áp dụng framework vào kế hoạch cá nhân).
- `52-week-plan.md`: cập nhật cột tham chiếu để trỏ tới các module/bài tập mới (Alltag, exams…) sau khi các workstream khác xong.

---

## 4. Workstream B — Thư viện thực chiến + hội thoại đời thường

### 4.1. Dialogues công sở: 5 → 14 bài

Giữ format chuẩn hiện tại (Dialog DE → bản dịch EN → VI-notes → grammar spotting → vocab → Redemittel → luyện nói + audio). Thêm 9 bài:

| # | Dialogue mới | Level | Tình huống |
|---|---|---|---|
| 1 | Onboarding — ngày đầu đi làm | B1+ | gặp team, nhận máy, hỏi quy trình, per du/per Sie |
| 2 | Pair programming | B2 | vừa code vừa nói: đề xuất, phản đối lịch sự, "lass uns mal…" |
| 3 | Retrospective | B2 | khen/chê quy trình, "was lief gut / was lief schlecht" |
| 4 | Architecture-Diskussion | B2+ | tranh luận trade-off, thuyết phục, whiteboard |
| 5 | Deployment hỏng ngoài giờ | B2 | gọi điện khẩn, mô tả lỗi qua điện thoại |
| 6 | Gehaltsgespräch — đàm phán lương | C1 | nêu thành tích, mặc cả, phản hồi offer |
| 7 | 1:1 career talk — xin thăng chức | C1 | mục tiêu nghề nghiệp, xin feedback |
| 8 | Krankmeldung & nghỉ phép | B1+ | báo ốm đúng luật/lịch sự, bàn giao việc, xin Urlaub |
| 9 | Meeting với khách hàng/PO | B2+ | trình bày tiến độ, quản lý kỳ vọng, hứa hẹn có điều kiện |

### 4.2. **MỚI — mục `content/alltag/`: hội thoại đời thường (10 bài)** *(yêu cầu riêng của bạn)*

Cùng format với dialogues, level B1→B2, tập trung văn hóa + phản xạ:

| # | Alltag dialogue | Tình huống then chốt |
|---|---|---|
| 1 | Im Café / an der Bäckerei | gọi món, hỏi Wi-Fi, trả tiền, "zum Mitnehmen oder hier?" |
| 2 | Mittagspause với đồng nghiệp | small talk: cuối tuần, thời tiết, bóng đá, đồ ăn |
| 3 | Kaffeeküche small talk | 5 phút tán gẫu, Partikeln (halt, doch, mal, eh) |
| 4 | Feierabend — đi uống với team | rủ rê, từ chối khéo, chia tiền, "ich geb einen aus" |
| 5 | Wohnungsbesichtigung / WG | xem nhà, hỏi Nebenkosten, Schufa, hồ sơ thuê |
| 6 | Anmeldung & Ausländerbehörde | đặt Termin, nộp giấy tờ, hỏi lại khi không hiểu |
| 7 | Beim Arzt | mô tả triệu chứng, hẹn khám, Krankschreibung |
| 8 | Supermarkt & Pfand | hỏi đồ, Pfandflaschen, trả lại hàng |
| 9 | Bahn & Verspätung | mua vé, tàu trễ/hủy, xin hoàn tiền, thông báo loa |
| 10 | Điện thoại hành chính: ngân hàng / hợp đồng điện thoại | mở tài khoản, ký & hủy hợp đồng, hotline |

### 4.3. Interview bank: 3 → 7 bộ + bộ hồ sơ xin việc

Thêm 4 bộ interview (format Q&A + câu trả lời mẫu + biến thể):

1. **HR & Behavioral auf Deutsch** — kể về bản thân, điểm yếu, conflict, "Warum Deutschland?"
2. **System Design bằng tiếng Đức** — dẫn dắt bài thiết kế, vẽ + nói
3. **Gehaltsverhandlung & Vertragsfragen** — lương, Urlaubstage, Probezeit, Kündigungsfrist
4. **Live-Coding / Technical screening** — think-aloud auf Deutsch, hỏi clarification

**Mới — `content/bewerbung/` (5 module):** Lebenslauf kiểu Đức cho dev (mẫu đầy đủ dựa trên profile backend Java) · Anschreiben (2 mẫu + công thức đoạn) · LinkedIn/Xing & liên hệ recruiter · Email xin việc: apply, follow-up, trả lời mời phỏng vấn, từ chối/nhận offer · Quy trình tuyển dụng ở Đức + đọc tin tuyển dụng (giải mã "m/w/d", yêu cầu ngôn ngữ).

### 4.4. Bộ mẫu văn bản công việc (`content/templates/`, 4 module)

10+ email mẫu theo tình huống (Sie/du) · Jira ticket + acceptance criteria mẫu · PR description + review comments mẫu · Protokoll + incident report + handover mẫu. Mỗi mẫu: bản DE chuẩn + chú thích cấu trúc + bài tập "viết theo mẫu" ngắn.

---

## 5. Workstream C — Học liệu tương tác (kế hoạch data, chưa code)

### 5.1. Flashcards: 210 → 2.000+ thẻ

Cấu trúc thẻ giữ như hiện tại (DE, Artikel, Plural, EN, VI, câu ví dụ, tag level + topic, TTS):

| Nguồn thẻ | Số thẻ ước tính |
|---|---|
| 12 vocab module (mỗi bảng → thẻ, thêm câu ví dụ mới nếu thiếu) | ~450 |
| Vokabel-Checkliste của 54 module phase | ~400 |
| Dialogues + Alltag (Redemittel thành thẻ "cả câu") | ~350 |
| Tần suất B1/B2 tổng quát (danh sách Goethe/telc theo chủ đề) | ~500 |
| Verben mit Präposition + Partizip II bất quy tắc (2 deck chuyên) | ~200 |
| Exam Redemittel (viết thư, thảo luận, thuyết trình) | ~150 |
| **Tổng** | **~2.050** |

Chia deck theo: phase (1–6) · topic IT (12) · Alltag · Redemittel · Exam. Quy tắc chất lượng: mọi thẻ danh từ bắt buộc có Artikel + Plural; mọi thẻ có ≥1 câu ví dụ ngữ cảnh dev/Alltag.

🆕 **Cân nhắc phân bổ lại:** dòng "tần suất B1/B2 tổng quát (~500)" là slice **giá trị thấp nhất**
cho người học này — IELTS 7.0, đã ở B1, cần B2/C1 + phản xạ đời thường chứ không cần phủ từ vựng
cơ bản. Đề xuất cắt xuống ~250 và dồn ~250 sang **Alltag + Redemittel** (hai mảng đang mỏng nhất
và đúng yêu cầu riêng ở §0). Tổng vẫn ~2.050.

🆕 **Không dồn 2.050 thẻ vào một đợt cuối** — mỗi đợt sinh thẻ của chính nội dung đợt đó, ghi vào
file `flashcards-N.js` mới (pattern `window.FLASHCARDS = (window.FLASHCARDS || []).concat([…])`
đã có sẵn ở `flashcards-2.js` / `-3.js`).

### 5.2. Quiz: phủ 100% module

- Mỗi module dạy (grammar/vocab/4 kỹ năng + 12 IT-vocab + dialogues chính): **10–15 câu** lấy trực tiếp từ Übungsteil khối A/B (tái dùng, không viết 2 lần).
- Tổng: ~70 quiz ≈ **800–1.000 câu** có giải thích đáp án.
- 6 "Phase Final Quiz" lớn (30 câu, trộn) khớp với assessment.

### 5.3. Luyện nghe tại chỗ (script-based, chạy bằng TTS sẵn có)

Mỗi `listening.md` (6 phase) thêm **4–6 bài nghe hoàn chỉnh** thay vì chỉ link:

- **Hörtext** 60–150 từ đúng level (đặt trong ```audio → TTS đọc), chủ đề dev + Alltag;
- 4–6 câu hỏi hiểu (richtig/falsch, trắc nghiệm, điền số liệu);
- 1 bài **Diktat** ngắn (nghe – chép – tự đối chiếu);
- 1 bài **shadowing** có đánh dấu chỗ ngắt hơi / trọng âm;
- đáp án + transcript chú giải.

Tổng ~30 bài nghe có cấu trúc. Dialogues/Alltag cũng gắn thêm khối audio từng lượt thoại để shadow từng vai. *(Ghi chú mục 11: về lâu dài có thể thay TTS bằng audio người thật — ngoài phạm vi đợt này.)*

### 5.4. Checklist tuần

Cập nhật `checklist` data để khớp các mục mới (workbook, bài nghe, Alltag) — chỉ liệt kê nội dung cần thêm, việc sửa file js để sang giai đoạn code.

---

## 6. Workstream D — Luyện thi bài bản (`content/exams/`, 9 module mới 🆕)

Bám 2 kỳ thi mà roadmap đã hẹn: **telc B2** (W20) và **Goethe C1** (W51).

| Module | Nội dung |
|---|---|
| exams/overview | chọn kỳ thi, đăng ký, lệ phí, cấu trúc điểm, lịch chiến lược 8 tuần trước thi |
| exams/telc-b2-lesen-sprachbausteine | format từng Teil, chiến thuật, 1 bộ luyện kiểu Modelltest + đáp án |
| exams/telc-b2-hoeren | chiến thuật nghe, luyện bằng script TTS mô phỏng, mẹo note-taking |
| exams/telc-b2-schreiben | các dạng thư (Beschwerde, formelle E-Mail), 4 bài mẫu điểm cao + khung chấm, lỗi trừ điểm |
| exams/telc-b2-sprechen | 3 phần oral đôi: Präsentation, Diskussion, Planung — kịch bản mẫu + Redemittel + luyện với TTS |
| exams/goethe-c1-lesen-hoeren | format mới, chiến thuật, bài luyện |
| exams/goethe-c1-schreiben-sprechen | Textproduktion mẫu + khung chấm; Vortrag mẫu |
| exams/pruefungs-redemittel | 1 kho Redemittel thi (≥100 câu) — nguồn cho deck flashcard Exam |

Lưu ý minh bạch: bài luyện là **"kiểu Modelltest"** tự soạn theo đúng format công bố của telc/Goethe (không sao chép đề thật); link đề thật miễn phí của telc.net/goethe.de đặt ở Resources.

🆕 **Phân bổ đang ngược:** telc B2 được 4 module, Goethe C1 chỉ 2 — trong khi **C1 (W51) mới là đích
cuối** của roadmap, còn telc B2 (W20) là mốc trung gian. Đề xuất: giữ 4 module telc B2 (vì thi trước,
cần chi tiết chiến thuật) nhưng **nâng Goethe C1 lên 3 module** — tách `goethe-c1-schreiben` và
`goethe-c1-sprechen` thành hai, vì Textproduktion C1 và Vortrag C1 là hai kỹ năng rất khác nhau và
đều nặng. Tổng exams: 8 → **9 module**.

---

## 7. Bức tranh trước / sau

| Hạng mục | Hiện tại (đo 17/08/2026) | Sau nâng cấp |
|---|---|---|
| Bài tập có đáp án | **21 câu** trong quiz engine + Mini-Quiz 3–5 câu/module | **~1.400 bài workbook + 900 câu quiz** |
| Bài nghe có cấu trúc | 0 (chỉ link) | **~30 bài + shadowing từng vai trong 24 hội thoại** |
| Hội thoại | 5 (chỉ công sở) | **24** (14 công sở + 10 Alltag ✅) |
| Interview bank | 3 | **7** + 5 module Bewerbung + 4 module templates |
| Flashcards | **~237** | **~2.050** |
| Luyện thi | 0 | **9 module** telc B2 + Goethe C1 🆕 |
| Tổng module content | **79** | **~147** (+32 file thư viện, +36 file `-uebungen.md` — xem §3.1b) |
| Ước tính khối lượng chữ | **~121,5k** | **~280–320k** |
| 🆕 JS tải mỗi lần mở app | ~920 KB raw / **~300 KB gz** | ~2,95 MB raw / **~880 KB gz** nếu giữ kiến trúc hiện tại → **bắt buộc lazy-load** (§10.A2) |

---

## 8. Lộ trình triển khai (Đợt 0 + 9 đợt nội dung) 🆕

Nguyên tắc: **nâng cấp trước phần bạn học trước**, và **mỗi đợt tự ship được** — content + entry
trong `content-index.js` + flashcards/quiz của chính đợt đó + `node build.js` + commit.

> 🆕 **Vì sao đổi so với Rev 1.** Rev 1 hoãn toàn bộ code sang Đợt 6 và nói đợt 1–5 "thuần Markdown,
> không phá vỡ app". Ba vấn đề:
> 1. Template Übungsteil **không chạy được** nếu renderer chưa giấu được đáp án (§1 điểm 9) → phải có **Đợt 0**.
> 2. Hoãn `content-index.js` sang đợt cuối nghĩa là **32 file mới (~150k từ) vô hình trong app suốt 4 đợt** —
>    viết mà không học được, không test được, không phát hiện lỗi format cho tới tận cuối. Thêm 1 entry
>    là **1 dòng**; không có lý do hoãn.
> 3. Đợt 4 (28 deliverable) và Đợt 5 (29 deliverable) **không làm nổi trong 1 phiên** — mỗi đợt ~55–65k
>    từ mới, gấp 4× Đợt 1.
>
> Ngoài ra: mọi thay đổi Markdown chỉ hiện sau khi chạy `node build.js` (`content-bundle.js` là file
> generated) — nên **mọi đợt đều kết thúc bằng build + smoke test + commit**, kể cả đợt "thuần content".

| Đợt | Nội dung | ≈ từ mới | Sản phẩm |
|---|---|---:|---|
| **0 · code** 🆕 | Mở khoá kỹ thuật — 4 việc ở §10.A: fence `spoiler` · lazy-load bundle · `topics` array · link-checker | 0 | app sẵn sàng nhận workbook; **không viết content** |
| **1** ✅ | Chốt template Übungsteil + workbook hóa **toàn bộ Phase 1** + nâng cấp assessment 1 | ~19k | ✅ **XONG 18/08/2026** — 6 file `-uebungen.md` mới, **194 bài tập có đáp án**, assessment thành đề 100 điểm, +50 flashcards, +2 quiz (20 câu) |
| **2** ✅ | 10 bài **Alltag** | ~20k | ✅ **XONG 18/08/2026** — 10 module `content/alltag/`, group mới trên sidebar, +55 flashcards, +1 quiz (15 câu) |
| **3** ✅ | Workbook Phase 2 + 3 dialogues công sở (Onboarding, Krankmeldung, Pair programming) | ~24k | ✅ **XONG 18/08/2026** — 6 file `-uebungen.md`, assessment → Modelltest 100 điểm, 3 dialogues mới, +45 flashcards, +2 quiz (20 câu) |
| **4** ✅ | **telc B2** (4 module) + `exams/overview` + `exams/pruefungs-redemittel` | ~15k | ✅ **XONG 18/08/2026** — 6 module, **103 bài tập tương tác có chấm điểm**, +engine ```uebung |
| **5** ✅ | Workbook Phase 3 + 3 dialogues (Retro, Architektur, Deployment ngoài giờ) | ~24k | ✅ **XONG 18/08/2026** — 6 workbook (**236 bài tương tác**), 3 dialogues, +45 flashcards, +2 quiz (20 câu), checklist tuần 21–28 |
| **6** ✅ | Workbook Phase 4 (9 file) + `templates/` (4 module) | ~25k | ✅ **XONG 18/08/2026** — 6 workbook (**191 bài tương tác**), 4 module `content/templates/` (**50 bài**), group mới trên sidebar, +62 flashcards, +2 quiz (20 câu), checklist tuần 29–36 |
| **7** ✅ | Workbook Phase 5 (9 file) + 3 dialogues (Gehalt, Career talk, Kunde/PO) | ~24k | ✅ **XONG 18/08/2026** — 6 workbook (**203 bài tương tác**), 3 dialogues (**26 bài**, lần đầu dialogue có drill chấm điểm), +62 flashcards, +2 quiz (20 câu), checklist tuần 37–44 |
| **8** ✅ | Workbook Phase 6 (9 file) + `bewerbung/` (5 module) | ~28k | ✅ **XONG 18/08/2026** — 6 workbook (**197 bài tương tác**), 5 module `content/bewerbung/` (**68 bài**), group mới trên sidebar, +60 flashcards, +2 quiz (20 câu), checklist tuần 45–52 → **đủ 52 tuần** |
| **9** ✅ | Goethe C1 (3 module) + 4 interview bank mới + bù flashcards + cập nhật `52-week-plan` + rà soát link toàn bộ | ~22k | ✅ **XONG 18/08/2026** — 3 module Goethe C1 (**43 bài**), 4 interview bank (**43 bài**), +113 flashcards (615 → **728**), +2 quiz (20 câu), 52-week-plan cập nhật, không có link chết. **Flashcards chưa đạt 2.050** — còn ~700 thuật ngữ đã đo được, xem §5.1 |

**Đợt nào ≈ >25k từ thì tách 2 phiên** ("Continue đợt N, phần 2") — thà chia nhỏ còn hơn viết vội
rồi phải sửa lại cả loạt file.

**Mỗi đợt kèm theo (không dồn về cuối):**

- [ ] entries mới trong `js/content-index.js` (+ topic mới nếu cần — xem §10.A3);
- [ ] flashcards của đúng đợt đó → file `flashcards-N.js` mới;
- [ ] quiz của đúng đợt đó vào `js/quizzes.js` — lấy lại từ khối A/B của Übungsteil, không viết 2 lần;
- [ ] `node build.js` → smoke test (sidebar, search, TTS, quiz, flashcards) → commit.

---

## 9. Tiêu chuẩn chất lượng (Definition of Done cho từng file)

- [ ] Đúng skeleton style guide + section Übungsteil/Lösungen đúng template §3.1
- [ ] Mọi bài tập có đáp án; bài mở có Musterlösung; bài hay sai có giải thích
- [ ] Danh từ mới: Artikel + Plural đầy đủ; thuật ngữ khớp bảng canonical
- [ ] ≥1 khối ```audio mỗi module dạy; hội thoại có audio từng lượt chính
- [ ] Cross-link 2 chiều (module mới ↔ module liên quan) và không link chết
- [ ] Level đúng nhãn (B1 không dùng cấu trúc C1 chưa dạy)
- [ ] Không bịa facts về công ty/kỳ thi; facts thi lấy từ mục Exam facts của style guide
- [ ] 🆕 Đáp án nằm trong fence `spoiler` — **không lộ khi scroll** qua phần đề bài
- [ ] 🆕 File đã có entry trong `js/content-index.js` và **mở được thật trong app**
- [ ] 🆕 `node build.js` chạy sạch; link-checker (§10.A4) không báo link chết

---

## 10. Việc code — chia theo thời điểm bắt buộc 🆕

> Rev 1 gom hết vào "đợt 6, làm sau". Không khả thi: hai hạng mục A1 và A2 dưới đây **chặn** template
> Übungsteil và **không thể vá sau khi đã có 300k từ**.

### A. Đợt 0 — ✅ HOÀN THÀNH 17/08/2026

| # | Việc | Trạng thái |
|---|---|---|
| A1 | Fence `spoiler` + CSS + toggle | ✅ `markdown.js`, `css/styles.css`, `app.js` — có aria-expanded, tự mở khi in PDF |
| A2 | Lazy-load bundle theo group | ✅ `build.js` sinh `js/content/<group>.js` + `js/content-manifest.js`; `app.js` nạp theo route |
| A3 | Mở rộng `topics` | ✅ thêm Übungen, Alltag, Bewerbung, Exam, Templates |
| A4 | Link-checker trong `build.js` | ✅ + báo orphan file, sidebar entry thiếu file, topic thiếu chip; `--strict` để làm CI gate |

**Kết quả đo được:** payload lần đầu mở app **775 KB → 10,3 KB** (manifest + chunk `start`).
Mỗi phase chỉ tải khi mở (~64–78 KB). Search nạp toàn bộ chunk **một lần, khi thật sự search**.
Nạp bằng thẻ `<script>` (không dùng fetch) nên vẫn mở được index.html trực tiếp từ ổ đĩa.

> `js/content-bundle.js` đã bị xoá — thay bằng `js/content/*.js` + `js/content-manifest.js`.
> Chạy `node build.js` là sinh lại toàn bộ.

<details>
<summary>Chi tiết gốc của Đợt 0 (giữ để tham chiếu)</summary>

#### Lý do bắt buộc trước Đợt 1

| # | Việc | Vì sao chặn | Ước lượng |
|---|---|---|---|
| **A1** | **Fence `spoiler` trong `js/markdown.js` + CSS** (mặc định gập, click để mở) | `markdown.js` escape mọi HTML thô (dòng 227: `renderInline` → `escapeHtml`); grep `details\|summary\|spoiler` trong `markdown.js` + `app.js` + `styles.css` = **0 kết quả**. Không có nó, 20–40 đáp án luôn hiện khi scroll → workbook vô dụng | ~25 dòng, theo đúng pattern `audio`/`mermaid` ở `markdown.js:197` |
| **A2** | **Lazy-load bundle theo group** trong `build.js` + `app.js` (`bundle-phase-1.js`, `bundle-exams.js`… nạp theo route) | Xem bảng payload dưới — nạp tất cả qua `<script defer>` (`index.html:43-51`) ổn ở 121k từ, **không sống nổi ở 3×**. Sửa trước rẻ hơn sửa sau rất nhiều | ~40 dòng |
| **A3** | **Mở rộng `topics`** ở `content-index.js:17` — thêm `Alltag`, `Exam`, `Bewerbung`, `Templates` | Filter chips đọc trực tiếp mảng này; thêm 32 file mà quên → chips vỡ | 1 dòng |
| **A4** | **Link-checker trong `build.js`** — verify mọi link `#/path` khớp một key trong bundle | DoD §9 yêu cầu "không link chết" trên ~111 module cross-link dày, nhưng **không có công cụ kiểm nào** → chắc chắn lọt | ~20 dòng |

**Số đo payload** (đo thật 17/08/2026, chiếu theo mục tiêu của plan):

| | Hiện tại | Sau nâng cấp | Ghi chú |
|---|---|---|---|
| `content-bundle.js` | 775 KB raw / **257 KB gz** (121,5k từ) | ~1,9 MB raw / **~635 KB gz** (300k từ) | ~6,4 KB/1.000 từ |
| flashcards (3 file) | 82,6 KB (~237 thẻ) | ~730 KB (2.050 thẻ) | ~357 B/thẻ |
| `quizzes.js` | 6,7 KB (21 câu) | ~290 KB (900 câu) | ~319 B/câu |
| **Tổng JS mỗi lần mở app** | ~920 KB raw / **~300 KB gz** | **~2,95 MB raw / ~880 KB gz** | ngân sách app page **<300 KB gz** → **vượt ~3×** |

Kèm theo: `buildSearchIndex()` chạy `MD.toText()` **đồng bộ trên toàn bộ bundle** ở lần search đầu
tiên. Ở 300k từ việc này sẽ block main thread hàng trăm ms trên điện thoại (target INP < 200 ms).
→ Đã xử lý ở A2: search hiện hiển thị trạng thái "Suchindex wird aufgebaut…", nạp chunk rồi mới dựng
index — chi phí này chỉ trả khi người học thật sự dùng search, không phải mỗi lần mở app.

</details>

### A2. Phát sinh trong Đợt 1 (đã làm) 🆕

| # | Việc | Vì sao |
|---|---|---|
| A5 | **Fence `hoertext`** trong `markdown.js` + CSS | ` ```audio ` **hiển thị** text của nó (`.audio-text`) — dùng cho bài nghe thì lộ transcript ngay. `hoertext` = nút play + transcript giấu sau nút bấm. Không có nó thì toàn bộ Workstream C3 (~30 bài nghe) vô nghĩa |
| A6 | **Cache-busting cho MỌI script** trong `build.js` | Chỉ `content-manifest.js` được đóng dấu `?v=`. `quizzes.js` / `flashcards-*.js` / `app.js` thì không → **quiz mới không xuất hiện** vì trình duyệt trả bản cache. Phát hiện khi test Đợt 1: file trên đĩa có 6 quiz, app chỉ thấy 4 |

### B. Mỗi đợt nội dung (1 → 9)

1. Thêm entries file mới vào `js/content-index.js` (`alltag/`, `bewerbung/`, `templates/`, `exams/` — kèm group mới trên sidebar).
2. Flashcards của đúng đợt đó → file `flashcards-N.js` mới (pattern `concat` sẵn có ở `flashcards-2.js`).
3. Quiz của đúng đợt đó vào `js/quizzes.js`.
4. `node build.js` → smoke test (sidebar, search, TTS, quiz, flashcards) → commit → đẩy GitHub Pages.

### C. Sau cùng / tùy chọn

5. Cập nhật `js/checklist.js` theo plan mới (đợt 9).
6. 🆕 **Progress tracking cho Übungsteil — kéo lên TRƯỚC "chấm tự động".** 1.400 bài tập mà không
   đánh dấu được đã làm tới đâu thì không dùng nổi. Một checkbox per-exercise lưu localStorage
   (pattern đã có sẵn ở `@journal` / `@bookmarks`) rẻ hơn nhiều so với auto-chấm và giá trị cao hơn.
7. ✅ **XONG 18/08/2026** — fence ```uebung: trắc nghiệm 1 đáp án / nhiều đáp án / điền từ, chấm ngay, hiện giải thích từng câu, tính điểm, lưu bài làm theo module. Yêu cầu bổ sung của người dùng, kéo lên từ "tùy chọn".
8. ✅ **Chuyển đổi toàn bộ 18/08/2026** — 12 workbook Phase 1+2 đã chuyển khối A/B sang `​```uebung`: **596 bài tương tác**, mỗi bài có giải thích. Khối C/D (viết/nói tự do) giữ Musterlösung vì không có một đáp án đúng duy nhất. Còn lại: 2 file `assessment.md` (đề mock — tự chấm theo thang điểm là đúng mô hình thi).

---

## 11. Câu hỏi mở (không chặn Đợt 0 hay Đợt 1)

1. **Audio người thật** thay TTS về lâu dài? (assets/audio/ đã có sẵn chỗ)
2. Có muốn mình soạn **Lebenslauf + Anschreiben mẫu cá nhân hóa** theo đúng CV thật của bạn ở **đợt 8** không (thay vì mẫu nhân vật giả định)?
3. Mức thi mục tiêu trung gian: có thêm module **Goethe B1** làm mốc W8 không, hay chỉ tự-đánh-giá như hiện tại?
4. ~~Tách `-uebungen.md` riêng hay để chung file?~~ → **✅ ĐÃ CHỐT 17/08/2026: tách riêng.** Xem §3.1b.
