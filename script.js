const questions = [
  { english: "I have to get going", correct: "Tôi phải đi ngay đây", options: ["Tôi phải đi ngay đây", "Tôi sẽ quay lại sau", "Hẹn gặp lại vào ngày mai", "Tôi muốn ở lại thêm"] },
  { english: "See you later", correct: "Hẹn gặp lại anh", options: ["Tạm biệt mọi người", "Hẹn gặp lại anh", "Hãy gọi cho tôi nhé", "Chúc anh một ngày tốt lành"] },
  { english: "See you.", correct: "Hẹn gặp lại", options: ["Hẹn gặp lại", "Tôi phải đi ngay đây", "Rất vui được gặp anh", "Hãy giữ liên lạc"] },
  { english: "I should go now", correct: "Bây giờ tôi phải đi đây", options: ["Tôi sẽ nói chuyện với anh sau", "Hẹn gặp lại anh", "Bây giờ tôi phải đi đây", "Tôi sẽ quay lại ngay"] },
  { english: "Goodbye", correct: "Tạm biệt", options: ["Hẹn gặp lại", "Tạm biệt", "Chúc may mắn", "Hãy bảo trọng"] },
  { english: "I’ll talk to you later", correct: "Tôi sẽ nói chuyện với anh sau nhé", options: ["Tôi sẽ nói chuyện với anh sau nhé", "Tôi phải đi ngay đây", "Chúng ta sẽ gặp lại nhau nhé", "Tôi sẽ gọi cho anh hôm nay"] },
  { english: "I’ve got to get going", correct: "Tôi phải đi ngay đây", options: ["Tôi phải đi ngay đây", "Tôi vừa mới đến", "Hẹn gặp lại vào tuần sau", "Tôi sẽ đợi ở đây"] },
  { english: "I’d better run", correct: "Tôi phải nhanh đi đây", options: ["Tôi sẽ chạy bộ mỗi sáng", "Tôi phải nhanh đi đây", "Tôi muốn nói chuyện thêm", "Tôi đã đến nơi rồi"] },
  { english: "I’ll see you around", correct: "Hẹn gặp lại anh", options: ["Tôi sẽ gặp anh ở quanh đây", "Hẹn gặp lại anh", "Tôi sẽ gọi cho anh sau", "Hẹn gặp anh ngày mai"] },
  { english: "I’ll catch you later", correct: "Hẹn gặp lại anh", options: ["Tôi sẽ bắt kịp anh", "Hẹn gặp lại anh", "Tôi sẽ nói chuyện với anh ngay", "Tôi phải đi trước"] },
  { english: "Until we meet again", correct: "Hẹn gặp lại", options: ["Hẹn gặp lại", "Cho đến cuối tuần", "Chúng ta gặp nhau hôm nay", "Tôi sẽ quay lại ngay"] },
  { english: "Keep in touch", correct: "Hãy liên lạc nhé", options: ["Hãy đi cùng tôi nhé", "Hãy liên lạc nhé", "Hãy giữ món quà này", "Hãy nhớ cuộc gặp này"] },
  { english: "We should meet again", correct: "Chúng ta sẽ gặp lại nhau nhé", options: ["Chúng ta nên đi ngay bây giờ", "Chúng ta sẽ gặp lại nhau nhé", "Chúng ta vừa gặp nhau hôm qua", "Chúng ta sẽ nói chuyện sau"] },
  { english: "It was nice meeting you", correct: "Rất vui được gặp anh", options: ["Rất vui được gặp anh", "Tôi rất nhớ anh", "Hẹn gặp lại anh", "Tôi rất vui được đi cùng anh"] },
  { english: "Take care", correct: "Tạm biệt", options: ["Hãy chăm sóc bản thân nhé", "Tạm biệt", "Hẹn gặp lại anh", "Hãy cẩn thận với món đồ này"] }
];

const drills = [
  { sentence: "I have to get going.", translation: "Tôi phải đi ngay đây.", replacements: [["go", "đi"], ["leave", "về"], ["run", "chạy"]] },
  { sentence: "My wife is waiting.", translation: "Bà xã tôi đang đợi.", replacements: [["husband", "ông xã"], ["brother", "anh/em trai"], ["girlfriend", "bạn gái"]] },
  { sentence: "Oh, come on, have one more beer.", translation: "Thôi nào, hãy uống thêm một ly bia nữa đi.", replacements: [["drink", "ly"], ["glass", "ly"], ["round", "lượt"]] },
  { sentence: "Are you going out tonight?", translation: "Tối nay anh chị định đi đâu phải không?", replacements: [["tomorrow", "ngày mai"], ["today", "hôm nay"], ["later", "lát nữa"]] },
  { sentence: "Mom, it looks like my flight is boarding.", translation: "Mẹ ơi, hình như chuyến bay của con đang cho hành khách lên máy bay rồi kìa.", replacements: [["arriving", "đang đến"], ["ready", "sẵn sàng"], ["here", "đến đây"]] },
  { sentence: "I can’t believe you’re really going to college.", translation: "Mẹ không thể tin là thực sự con sắp vào đại học.", replacements: [["medical school", "trường y"], ["law school", "trường luật"], ["graduate school", "học cao học"]] },
  { sentence: "I’ll call you when I land.", translation: "Con sẽ gọi điện cho mẹ khi máy bay đáp xuống.", replacements: [["arrive", "đến nơi"], ["get there", "đến đó"], ["reach my destination", "đến nơi"]] },
  { sentence: "I want to know you’re safe.", translation: "Mẹ cần biết là con đến nơi an toàn.", replacements: [["okay", "vẫn ổn"], ["alright", "vẫn ổn"], ["safe and sound", "bình an vô sự"]] },
  { sentence: "I swept the floor, too.", translation: "Tôi cũng đã quét nhà nữa.", replacements: [["mopped", "lau"], ["cleaned", "lau"], ["scrubbed", "cọ rửa"]] },
  { sentence: "I have a job with a lawyer in Boston.", translation: "Mình làm việc với một luật sư ở Boston.", replacements: [["a dentist", "nha sĩ"], ["a doctor", "bác sĩ"], ["an accountant", "nhân viên kế toán"]] },
  { sentence: "I’ll just spend the summer in my dad’s office.", translation: "Mình sẽ chỉ dành mùa hè này làm việc ở văn phòng của ba mình.", replacements: [["spring", "mùa xuân"], ["winter", "mùa đông"], ["fall", "mùa thu"]] },
  { sentence: "You should come visit me then when you have time.", translation: "Vậy bạn hãy đến thăm mình khi bạn có thời gian nhé.", replacements: [["find", "tìm"], ["see", "thăm"], ["get", "gặp"]] },
  { sentence: "I’ll call you when I land.", translation: "Con sẽ gọi điện cho mẹ khi máy bay đáp xuống.", replacements: [["phone", "gọi điện"], ["ring", "gọi điện"], ["telephone", "gọi điện"]] },
  { sentence: "That was a good movie.", translation: "Đó là một bộ phim hay.", replacements: [["play", "vở kịch"], ["performance", "buổi diễn"], ["game", "trận đấu"]] },
  { sentence: "Maybe next Saturday.", translation: "Có lẽ thứ bảy tuần sau.", replacements: [["Tuesday", "thứ ba"], ["Friday", "thứ sáu"], ["Wednesday", "thứ tư"]] }
];

const state = { answers: Array(questions.length).fill(null), score: 0, submitted: false };
const quizList = document.querySelector("#quizList");
const resetButton = document.querySelector("#resetButton");
const finishButton = document.querySelector("#finishButton");
const progressFill = document.querySelector("#progressFill");
const progressLabel = document.querySelector("#progressLabel");
const submissionStatus = document.querySelector("#submissionStatus");
const resultSection = document.querySelector("#resultSection");
const finalScore = document.querySelector("#finalScore");
const drillProgressLabel = document.querySelector("#drillProgressLabel");
const drillProgressFill = document.querySelector("#drillProgressFill");
const drillsList = document.querySelector("#drillsList");

function renderQuestions() {
  quizList.innerHTML = questions.map((question, questionIndex) => `
    <article class="quiz-card" data-question="${questionIndex}">
      <div class="question-topline"><span class="question-number">${String(questionIndex + 1).padStart(2, "0")}</span><span class="question-label">Chọn nghĩa tiếng Việt phù hợp nhất</span></div>
      <h3>${question.english}</h3>
      <div class="options" role="radiogroup" aria-label="Các đáp án cho câu ${questionIndex + 1}">
        ${question.options.map((option, optionIndex) => `<button type="button" class="option" data-option="${optionIndex}" role="radio" aria-checked="false"><span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span><span class="option-text">${option}</span></button>`).join("")}
      </div>
      <div class="feedback" aria-live="polite"></div>
    </article>
  `).join("");

  quizList.querySelectorAll(".option").forEach((button) => {
    button.addEventListener("click", () => selectOption(button));
  });
}

function selectOption(button) {
  const card = button.closest(".quiz-card");
  const questionIndex = Number(card.dataset.question);
  if (state.submitted) return;
  const optionIndex = Number(button.dataset.option);
  state.answers[questionIndex] = optionIndex;
  card.querySelectorAll(".option").forEach((item) => {
    item.classList.toggle("selected", item === button);
    item.setAttribute("aria-checked", item === button ? "true" : "false");
  });
  updateProgress();
}

function updateProgress() {
  const completed = state.answers.filter((answer) => answer !== null).length;
  progressLabel.textContent = `Đã làm ${completed} / ${questions.length} câu`;
  progressFill.style.width = `${(completed / questions.length) * 100}%`;
}

function submitQuiz() {
  if (state.submitted) {
    showResult();
    return;
  }
  const unanswered = state.answers.filter((answer) => answer === null).length;
  if (unanswered > 0) {
    submissionStatus.textContent = `Còn ${unanswered} câu chưa chọn`;
    submissionStatus.parentElement.classList.add("pending");
    const firstUnanswered = quizList.querySelector(`[data-question="${state.answers.indexOf(null)}"]`);
    firstUnanswered?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  state.submitted = true;
  state.score = 0;
  questions.forEach((question, questionIndex) => {
    const card = quizList.querySelector(`[data-question="${questionIndex}"]`);
    const selectedIndex = state.answers[questionIndex];
    const isCorrect = question.options[selectedIndex] === question.correct;
    if (isCorrect) state.score += 1;
    card.querySelectorAll(".option").forEach((item) => {
      const optionIndex = Number(item.dataset.option);
      item.disabled = true;
      if (question.options[optionIndex] === question.correct) item.classList.add("correct");
      if (optionIndex === selectedIndex && !isCorrect) item.classList.add("incorrect");
    });
    const cardFeedback = card.querySelector(".feedback");
    cardFeedback.textContent = isCorrect ? "Chính xác!" : `Đáp án đúng: ${question.correct}`;
    cardFeedback.className = isCorrect ? "feedback" : "feedback error";
  });
  submissionStatus.textContent = "Đã nộp bài";
  submissionStatus.parentElement.classList.remove("pending");
  finishButton.innerHTML = "Xem kết quả <span aria-hidden=\"true\">↓</span>";
  showResult();
}

function showResult() {
  const completedDrills = drillsList.querySelectorAll(".drill-card.completed").length;
  finalScore.textContent = state.score + completedDrills;
  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetQuiz() {
  state.answers = Array(questions.length).fill(null);
  state.score = 0;
  state.submitted = false;
  submissionStatus.textContent = "Chưa nộp bài";
  submissionStatus.parentElement.classList.remove("pending");
  finishButton.innerHTML = "Nộp bài <span aria-hidden=\"true\">↓</span>";
  resultSection.hidden = true;
  renderQuestions();
  updateProgress();
  renderDrills();
  updateDrillProgress();
}

function renderDrills() {
  drillsList.innerHTML = drills.map((drill, drillIndex) => {
    const words = drill.sentence.replace(/[.?]/g, "").split(" ").sort(() => Math.random() - 0.5);
    return `<article class="drill-card" data-drill="${drillIndex}">
      <div class="drill-number">${String(drillIndex + 1).padStart(2, "0")}</div>
      <div class="word-bank">${words.map((word, wordIndex) => `<button class="word-token" type="button" draggable="true" data-word="${word}" data-token="${drillIndex}-${wordIndex}">${word}</button>`).join("")}</div>
      <div class="answer-zone" data-answer-zone="${drillIndex}" aria-label="Ô ghép câu"><span>Nhấp vào từ phía trên hoặc kéo từ vào đây</span></div>
      <p class="drill-translation">${drill.translation}</p>
      <p class="replacement-line"><strong>Từ thay thế:</strong> ${drill.replacements.map(([english, vietnamese]) => `<span>${english} <small>(${vietnamese})</small></span>`).join(" · ")}</p>
      <p class="drill-feedback" aria-live="polite"></p>
    </article>`;
  }).join("");

  drillsList.querySelectorAll(".word-token").forEach((token) => {
    token.addEventListener("click", () => addDrillWord(token));
    token.addEventListener("dragstart", (event) => event.dataTransfer.setData("text/plain", token.dataset.token));
  });
  drillsList.querySelectorAll(".answer-zone").forEach((zone) => {
    zone.addEventListener("dragover", (event) => event.preventDefault());
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      const token = drillsList.querySelector(`[data-token="${event.dataTransfer.getData("text/plain")}"]`);
      if (token) addDrillWord(token);
    });
  });
}

function addDrillWord(token) {
  const card = token.closest(".drill-card");
  if (card.classList.contains("completed")) return;
  const zone = card.querySelector(".answer-zone");
  const sourceToken = card.querySelector(`.word-bank [data-token="${token.dataset.token}"]`);
  if (token.classList.contains("placed")) {
    token.remove();
    sourceToken.classList.remove("used");
  } else {
    if (token.classList.contains("used")) return;
    token.classList.add("used");
    zone.querySelector("span")?.remove();
    const placedToken = token.cloneNode(true);
    placedToken.classList.add("placed");
    placedToken.classList.remove("used");
    placedToken.addEventListener("click", () => addDrillWord(placedToken));
    zone.appendChild(placedToken);
  }
  checkDrill(card);
}

function checkDrill(card) {
  const drillIndex = Number(card.dataset.drill);
  const words = [...card.querySelectorAll(".answer-zone .word-token")].map((token) => token.dataset.word);
  const target = drills[drillIndex].sentence.replace(/[.?]/g, "").split(" ");
  const feedback = card.querySelector(".drill-feedback");
  if (words.length !== target.length) {
    feedback.textContent = "";
    return;
  }
  if (words.join(" ") === target.join(" ")) {
    card.classList.add("completed");
    card.querySelectorAll(".word-token").forEach((token) => { token.disabled = true; });
    feedback.textContent = "Chính xác! +1 điểm";
    updateDrillProgress();
  } else {
    feedback.textContent = "Thứ tự chưa đúng, bạn có thể bấm từ trong ô để đưa ra xếp lại.";
    feedback.className = "drill-feedback error";
  }
}

function updateDrillProgress() {
  const completed = drillsList.querySelectorAll(".drill-card.completed").length;
  drillProgressLabel.textContent = `${completed} / ${drills.length} câu`;
  drillProgressFill.style.width = `${(completed / drills.length) * 100}%`;
}

finishButton.addEventListener("click", submitQuiz);
resetButton.addEventListener("click", resetQuiz);
  
renderQuestions();
updateProgress();
renderDrills();
updateDrillProgress();
