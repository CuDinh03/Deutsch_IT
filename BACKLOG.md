# BACKLOG — việc chưa thi công

> **Đo lần cuối: 19.08.2026**, sau khi sửa §2 (vị trí đáp án).
> Mọi con số dưới đây đo bằng lệnh ghi kèm — **chạy lại lệnh trước khi tin bảng**, đừng chép số.
>
> Ba tài liệu kia không đổi vai trò: [UPGRADE-PLAN.md](UPGRADE-PLAN.md) là *cái gì và vì sao*,
> [AUTHORING.md](AUTHORING.md) là *làm thế nào*, [CONTENT-STYLE-GUIDE.md](CONTENT-STYLE-GUIDE.md) là
> *giọng văn và từ vựng*. File này chỉ trả lời một câu: **còn gì chưa làm, và có đáng làm không.**

## Trạng thái hiện tại

| | Giá trị | Mục tiêu kế hoạch | |
|---|---:|---:|---|
| Module content | 157 | ~147 | ✅ vượt |
| Số từ | ~322.850 | 280–320k | ✅ |
| Bài tập tương tác | 1.768 | ~1.400 | ✅ vượt |
| Hội thoại | 24 (14 + 10) | 24 | ✅ |
| Interview bank | 7 | 7 | ✅ |
| Module luyện thi | 10 | 9 | ✅ vượt |
| Checklist | 52 tuần | 52 | ✅ |
| Bài nghe có cấu trúc | 28 Hörtext + 245 khối audio | ~30 | ✅ |
| Flashcards | 1.378 | ~2.050 | ⚠️ thu hoạch xong — xem §3 |
| **Quiz** | **20 bộ / 186 câu** | **~70 bộ / 800–1.000 câu** | ❌ **xem §1** |

---

## 1. Quiz — khoảng cách lớn nhất còn lại

**Trạng thái:** 20 bộ / 186 câu. UPGRADE-PLAN §5.2 đặt ~70 bộ / 800–1.000 câu, phủ 100% module dạy,
10–15 câu mỗi module, cộng **6 "Phase Final Quiz"** 30 câu trộn. Hiện **chưa có bộ nào ≥ 30 câu**.

```bash
node -e 'const w={};global.window=w;require("./js/quizzes.js");const q=w.QUIZZES;
console.log(q.length,"bộ /",q.reduce((a,x)=>a+x.questions.length,0),"câu | Final Quiz (>=30):",q.filter(x=>x.questions.length>=30).length)'
```

**Đọc kỹ trước khi lao vào.** §5.2 viết khi `uebung` chưa tồn tại. Giờ đã có **1.768 bài tập ngay
trong module**, chấm ngay, giải thích từng câu, lưu bài làm. Nhân bản quiz cho đủ 70 bộ phần lớn là
làm lại thứ đã có ở chỗ tốt hơn — bài tập nằm cạnh phần lý thuyết dạy nó.

**Phần quiz engine làm được mà workbook không:** đề **trộn nhiều module** cuối mỗi phase. Workbook
bám từng module theo thiết kế, nên không ôn tổng hợp được.

| Phương án | Khối lượng | Ý kiến |
|---|---|---|
| **A. Chỉ 6 Phase Final Quiz** (30 câu/phase, rút từ khối A/B các workbook trong phase) | ~180 câu, 1–2 phiên | **Khuyến nghị.** Đúng phần còn thiếu thật. |
| B. A + quiz cho các module chưa có | ~400–500 câu, 4–5 phiên | Được, nếu muốn bám kế hoạch sát hơn |
| C. Đủ ~900 câu như §5.2 | ~9–10 phiên | Không khuyến nghị — phần lớn là trùng lặp với `uebung` |

**Nếu làm phương án A:** id đặt `q-p1-final` … `q-p6-final`, `level` theo phase, `topic: "Übungen"`.
Nguồn câu hỏi là khối A/B của các `*-uebungen.md` trong phase đó — **lấy lại, không viết mới**, đúng
nguyên tắc "không viết 2 lần" của §5.2. Schema quiz ở [AUTHORING §4.2](AUTHORING.md).

---

## 2. ~~Vị trí đáp án trắc nghiệm bị lệch nặng~~ ✅ XONG 19.08.2026

Giữ lại mục này vì **lệnh đo và cách làm vẫn dùng được cho nội dung viết sau này**.

| | Trước | Sau | Sàn lý thuyết |
|---|---:|---:|---:|
| `uebung` (994 câu) — vị trí 1 | 74,0% | **31,5%** | 29,3% |
| `quizzes.js` (186 câu) — vị trí cao nhất | 54,3% (vị trí 2) | **26,3%** | 25,0% |

Sàn của `uebung` là 29,3% chứ không phải 25% vì **130 câu chỉ có 2 lựa chọn** — không thể rải đều
hơn. 31,5% coi như đã chạm đáy. `quizzes.js` không nằm trong phạm vi §2 lúc viết doc; đo ra cùng lỗi
nên sửa luôn.

**Cách làm — dùng lại nguyên vẹn nếu viết thêm nội dung:**

1. Xoay **tại chỗ** danh sách option: chỉ hoán vị các dòng `*`/`x`, giữ nguyên dòng `?`, `=`, `!` và
   dòng trống. Đích mỗi câu chạy vòng 0,1,2,3 nên phân bố tự đều.
2. **Chừa nhóm dùng chung bộ lựa chọn.** Drill mạo từ (`der/die/das` lặp 8 câu), `richtig/falsch`,
   `Teil 1/2/3` — người học cần cùng bộ nút ở cùng vị trí, và đáp án các câu đó vốn đã khác nhau nên
   tự phân bố rồi. Lần này chừa **110 câu `uebung` + 14 câu quiz**. Bỏ bước này là hỏng UX: lần chạy
   đầu tôi xoay cả chúng rồi phải hoàn nguyên.
3. **Kiểm ngữ nghĩa so với HEAD trước khi commit.** Mỗi câu: nội dung câu hỏi, *tập* lựa chọn, *tập*
   đáp án đúng, đáp án điền từ, dòng giải thích phải y hệt — chỉ thứ tự được đổi. Lần này 1.768 câu
   `uebung` + 186 câu quiz, **0 khác biệt**.

**Còn 4 nhóm thứ tự chưa nhất quán**, đã lệch sẵn từ trước khi sửa nên cố ý để nguyên:
`exams/telc-b2-hoeren.md`, `phase-1/speaking-uebungen.md` (2 nhóm), `phase-6/grammar-uebungen.md`.

<details><summary>Bối cảnh gốc — giữ để tham khảo</summary>

**Trạng thái cũ:** **736 / 994 câu (74,0%)** có đáp án đúng ở **vị trí 1**. Học viên bấm option đầu mà
không đọc vẫn được ~74%.

```bash
node -e 'const fs=require("fs");let all={},t=0;
(function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=d+"/"+e.name;
 if(e.isDirectory())walk(p);else if(e.name.endsWith(".md")){
  const bl=fs.readFileSync(p,"utf8").split(/```/).filter((_,i)=>i%2===1).filter(b=>b.startsWith("uebung"));
  bl.forEach(b=>{let c=null;const push=()=>{if(c&&c.first!==null){all[c.first]=(all[c.first]||0)+1;t++;}};
   b.split("\n").forEach(L=>{const m=L.match(/^([?*x=!])\s+(.*)$/);if(!m)return;
    if(m[1]==="?"){push();c={n:0,first:null};return;}if(!c)return;
    if(m[1]==="*"){if(c.first===null)c.first=c.n;c.n++;}else if(m[1]==="x")c.n++;});push();});}}})("content");
Object.keys(all).sort().forEach(k=>console.log("vị trí",+k+1,":",all[k],(100*all[k]/t).toFixed(1)+"%"));console.log("tổng",t)'
```

**Nguyên nhân:** `renderUebung()` trong `js/markdown.js` xuất option **đúng thứ tự nguồn** — không
xáo. Nên `*` đứng đầu = đáp án luôn là nút radio đầu tiên.

**Phân bố theo thư mục** — module viết càng về sau càng lệch:

| Thư mục | vị trí 1 / tổng | | Thư mục | vị trí 1 / tổng |
|---|---:|---|---|---:|
| `bewerbung` | 63/63 (100%) | | `phase-6` | 85/101 (84%) |
| `interviews` | 35/35 (100%) | | `phase-5` | 81/102 (79%) |
| `dialogues` | 23/23 (100%) | | `phase-4` | 73/94 (78%) |
| `templates` | 46/47 (98%) | | `phase-3` | 80/107 (75%) |
| `phase-2` | 94/138 (68%) | | `phase-1` | 76/163 (47%) |
| `exams` | 80/121 (66%) | | | |

**Hai cách sửa, chọn một:**

1. **Sửa nguồn** (đã làm cho `exams/goethe-b1.md`, xem commit `03a9c22`). Script xoay danh sách
   option theo chỉ số câu, giữ nguyên dòng `!`. Chạy được hàng loạt; đã kiểm: chỉ **1 file** có
   option kiểu "alle drei / beides", và không option nào tham chiếu *vị trí*, nên xoay an toàn.
   Vẫn nên rà mắt sau khi chạy. **69 câu nhiều đáp án đúng** cần để ý riêng.
2. **Xáo lúc render** trong `renderUebung()`. Sửa một chỗ, áp dụng cho mọi module cũ lẫn mới. Nhưng:
   thứ tự đổi mỗi lần tải → khó đối chiếu khi học lại, và `state.ueb` lưu đáp án theo **chỉ số
   option** (`js/app.js` ~dòng 385–455) nên **sẽ hỏng bài làm đã lưu**. Nếu chọn hướng này phải lưu
   theo nội dung option, không theo chỉ số.

**Ý kiến:** làm cách 1. Rẻ hơn, không đụng dữ liệu đã lưu, và kết quả kiểm tra được bằng chính lệnh
đo ở trên. → **Đã chọn cách 1.**

</details>

---

## 3. Flashcards — 1.378 / ~2.050 (đây là *quyết định*, không phải việc tồn)

Thu hoạch xong. Pass 1–5 đã quét mọi bảng từ vựng trong `content/`: **1.248/1.280 dòng** đã thành
thẻ, 32 dòng còn lại là bỏ qua có chủ đích (danh sách đầy đủ kèm lý do ở
[AUTHORING §6.1](AUTHORING.md)).

Muốn vượt 1.378 phải **viết từ vựng mới**, không còn gì để thu hoạch. Con số ~2.050 được ước lượng
**trước khi** ai đó đếm bảng thật — nó không phải lời hứa. 1.378 thẻ mỗi thẻ có câu ví dụ thật hơn
2.050 thẻ mà bảy trăm thẻ cuối là độn.

**Nếu vẫn muốn thêm:** xuất phát từ một lỗ hổng gọi tên được (module viết sau này, phần thi mỏng,
lỗi lặp lại trong hàng ôn), không phải từ một danh sách từ. Chuẩn chất lượng ở
[AUTHORING §4.1](AUTHORING.md), ba bước kiểm trùng ở §6.1 vẫn dùng được nguyên vẹn.

---

## 4. Việc nhỏ, rõ ràng

| # | Việc | Ghi chú |
|---|---|---|
| 4.1 | **26 từ Đức trùng nhau** giữa các deck viết trước Đợt 5 (28 thẻ thừa; `Übergabe` và `Vorfall` có 3 bản) | Vô hại nhưng bẩn. Gộp thì phải chọn thẻ nào giữ, thẻ nào xoá — id đã xoá **không được tái sử dụng**. Lệnh liệt kê ở [AUTHORING §5](AUTHORING.md). |
| 4.2 | **`build.js --strict` không fail khi có file Markdown mồ côi** — chỉ cảnh báo rồi exit 0 | Đúng lỗi đã dính ngày 18.08: `tail -3` cắt mất dòng cảnh báo, module không mở được từ sidebar trông vẫn ổn. Sửa: thêm `\|\| orphans.length` vào điều kiện `STRICT` ở `build.js` (~dòng 237). Một dòng. |
| 4.3 | **UPGRADE-PLAN §10.C mục 6 ghi sai trạng thái** — progress tracking cho Übungsteil thực tế đã có | `state.ueb[moduleId]` lưu trạng thái đã chấm + đáp án; `addCheckboxes()` lưu ☐ theo module. Chỉ cần đánh ✅, không phải làm gì thêm. |
| 4.4 | **Không có test regression cho renderer** trong repo | Từng nằm trong scratchpad phiên cũ. Hiện `build.js --strict` + kiểm giải thích ở §5 phủ cùng nhóm lỗi. Thêm test thật thì nên phủ: fence lồng nhau, `uebung` mọi kiểu, `spoiler` không rò đáp án. |
| 4.5 | **6 file `assessment.md` tự chấm theo thang điểm** | **Cố ý**, không phải thiếu sót — mô phỏng điều kiện thi thật, Teil 4/5 là sản xuất mở. Chuyển Teil 1–3 sang `uebung` là làm được nếu muốn. |

---

## 5. Câu hỏi mở — cần bạn trả lời, không phải cần code

| # | Câu hỏi | Trạng thái |
|---|---|---|
| 5.1 | Thay TTS trình duyệt bằng **audio người thật**? (`assets/audio/` đã chừa chỗ) | **Chưa trả lời**, mang qua nhiều đợt. Đây là quyết định lớn nhất còn lại: 24 hội thoại + 28 Hörtext + 245 khối audio là rất nhiều bản ghi. |
| 5.2 | **Lebenslauf / Anschreiben cá nhân hóa** theo CV thật? | Đã ship bản nhân vật giả định (backend Java), có callout ghi rõ trong [`bewerbung/lebenslauf.md`](content/bewerbung/lebenslauf.md). Nếu CV thật đến thì phạm vi thay rất gọn: muster §4 file đó + hai thư mẫu trong `anschreiben.md`. Cấu trúc và công thức đoạn không phụ thuộc hồ sơ. |
| 5.3 | ~~Module Goethe B1 làm mốc W8?~~ | ✅ **Chốt 18.08.2026: có.** Đã ship `content/exams/goethe-b1.md`. |

---

## Đề xuất thứ tự cho phiên sau

1. ~~**§2 — sửa vị trí đáp án.**~~ ✅ xong 19.08.2026.
2. **§4.2 — cho `--strict` fail khi có file mồ côi.** Một dòng, chặn đúng lỗi đã xảy ra thật.
3. **§1 phương án A — 6 Phase Final Quiz.** Phần duy nhất của workstream quiz mà workbook không
   thay thế được.
4. **§4.3 và §4.1** — dọn dẹp, làm khi tiện.
5. **§5.1** — hỏi trước khi làm bất cứ điều gì về audio.

**Trước khi commit bất cứ mục nào ở trên: chạy đủ [AUTHORING §5](AUTHORING.md).** Đọc *toàn bộ* output
của `node build.js --strict` — đừng pipe qua `tail`, và đừng chỉ xem exit code (xem §4.2).
