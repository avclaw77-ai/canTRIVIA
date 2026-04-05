/**
 * canTRIVIA — Canada Trivia Game
 * Main application logic
 */

(function () {
  "use strict";

  // ─── State ───────────────────────────────
  let state = {
    screen: "home", // home | game | results
    category: "all",
    difficulty: "medium",
    questions: [],
    currentIndex: 0,
    score: 0,
    answered: false,
    selectedIndex: null,
    roundSize: 10
  };

  // ─── DOM refs ────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ─── Screen reader announcements ─────────
  function announce(message) {
    const el = document.getElementById("sr-announcements");
    if (el) {
      el.textContent = "";
      requestAnimationFrame(() => { el.textContent = message; });
    }
  }

  // ─── Confetti ────────────────────────────
  function createConfetti() {
    const container = document.createElement("div");
    container.className = "confetti-container";
    container.setAttribute("aria-hidden", "true");
    const colors = ["#ff0000", "#ffffff", "#ff3333", "#cc0000", "#ff6666", "#FFD700"];
    for (let i = 0; i < 80; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "%";
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = Math.random() * 2 + "s";
      piece.style.animationDuration = (2 + Math.random() * 2) + "s";
      container.appendChild(piece);
    }
    document.body.appendChild(container);
    setTimeout(() => container.remove(), 5000);
  }

  // ─── Question selection ──────────────────
  function selectQuestions(category, difficulty) {
    let pool = QUESTIONS.filter((q) => {
      if (category !== "all" && q.category !== category) return false;
      if (q.difficulty !== difficulty) return false;
      return true;
    });

    // If not enough questions at exact difficulty, add from adjacent difficulties
    if (pool.length < state.roundSize) {
      const fallbackOrder = difficulty === "easy" ? ["medium", "hard"]
        : difficulty === "hard" ? ["medium", "easy"]
        : ["easy", "hard"];
      for (const d of fallbackOrder) {
        if (pool.length >= state.roundSize) break;
        const extra = QUESTIONS.filter((q) => {
          if (category !== "all" && q.category !== category) return false;
          if (q.difficulty !== d) return false;
          return !pool.includes(q);
        });
        pool = pool.concat(extra);
      }
    }

    // Shuffle (Fisher-Yates)
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    return pool.slice(0, state.roundSize);
  }

  // ─── Render: Home Screen ─────────────────
  function renderHome() {
    const lang = getLang();
    const categoriesHtml = [
      { key: "all", icon: "🍁" },
      { key: "history", icon: "📜" },
      { key: "geography", icon: "🗺️" },
      { key: "culture", icon: "🎭" },
      { key: "language", icon: "💬" },
      { key: "sports", icon: "🏒" },
      { key: "indigenous", icon: "🪶" },
      { key: "science", icon: "🔬" },
      { key: "food", icon: "🍽️" }
    ].map(({ key, icon }) => {
      const label = key === "all" ? t("allCategories") : t("categories." + key);
      const active = state.category === key ? "active" : "";
      return `<button class="category-btn ${active}" data-category="${key}" aria-pressed="${state.category === key}">${icon} ${label}</button>`;
    }).join("");

    const difficultyHtml = ["easy", "medium", "hard"].map((d) => {
      const active = state.difficulty === d ? "active" : "";
      return `<button class="difficulty-btn ${active}" data-difficulty="${d}" aria-pressed="${state.difficulty === d}">${t(d)}</button>`;
    }).join("");

    $("#app").innerHTML = `
      <div class="home-screen fade-in">
        <div class="hero">
          <div class="logo-container">
            <div class="maple-leaf-bg" aria-hidden="true">🍁</div>
            <h1 class="site-title">${t("siteTitle")}</h1>
          </div>
          <p class="tagline">${t("tagline")}</p>
        </div>

        <div class="setup-section">
          <h2>${t("selectCategory")}</h2>
          <div class="category-grid" role="group" aria-label="${t("selectCategory")}">
            ${categoriesHtml}
          </div>

          <h2>${t("selectDifficulty")}</h2>
          <div class="difficulty-group" role="group" aria-label="${t("selectDifficulty")}">
            ${difficultyHtml}
          </div>

          <button class="start-btn pulse" id="start-btn">${t("startGame")}</button>
        </div>
      </div>
    `;

    // Bind events
    $$(".category-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.category = btn.dataset.category;
        renderHome();
      });
    });
    $$(".difficulty-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.difficulty = btn.dataset.difficulty;
        renderHome();
      });
    });
    $("#start-btn").addEventListener("click", startGame);
  }

  // ─── Start Game ──────────────────────────
  function startGame() {
    state.questions = selectQuestions(state.category, state.difficulty);
    if (state.questions.length === 0) {
      // Fallback: grab any questions in that category
      state.questions = selectQuestions(state.category, "easy");
    }
    if (state.questions.length === 0) {
      state.questions = selectQuestions("all", state.difficulty);
    }
    state.currentIndex = 0;
    state.score = 0;
    state.answered = false;
    state.selectedIndex = null;
    state.screen = "game";
    renderGame();
  }

  // ─── Render: Game Screen ─────────────────
  function renderGame() {
    const q = state.questions[state.currentIndex];
    const lang = getLang();
    const questionText = q.question[lang] || q.question.en;
    const isTF = q.type === "tf";
    const total = state.questions.length;

    let optionsHtml;
    if (isTF) {
      optionsHtml = [t("trueLabel"), t("falseLabel")].map((label, i) => {
        let cls = "option-btn";
        if (state.answered) {
          if (i === q.correctIndex) cls += " correct";
          else if (i === state.selectedIndex) cls += " incorrect";
        }
        if (state.answered && i === state.selectedIndex) cls += " selected";
        return `<button class="${cls}" data-index="${i}" ${state.answered ? "disabled" : ""}>${label}</button>`;
      }).join("");
    } else {
      const opts = q.options[lang] || q.options.en;
      optionsHtml = opts.map((opt, i) => {
        let cls = "option-btn";
        if (state.answered) {
          if (i === q.correctIndex) cls += " correct";
          else if (i === state.selectedIndex) cls += " incorrect";
        }
        if (state.answered && i === state.selectedIndex) cls += " selected";
        return `<button class="${cls}" data-index="${i}" ${state.answered ? "disabled" : ""}>${opt}</button>`;
      }).join("");
    }

    const categoryLabel = t("categories." + q.category) || q.category;
    const progress = ((state.currentIndex) / total) * 100;

    let feedbackHtml = "";
    if (state.answered) {
      const isCorrect = state.selectedIndex === q.correctIndex;
      const funFact = q.funFact[lang] || q.funFact.en;
      feedbackHtml = `
        <div class="feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"} fade-in">
          <p class="feedback-label">${isCorrect ? t("correct") : t("incorrect")}</p>
          <div class="fun-fact">
            <span class="fun-fact-label">💡 ${t("didYouKnow")}</span>
            <p>${funFact}</p>
          </div>
          <button class="next-btn" id="next-btn">${state.currentIndex < total - 1 ? t("next") : "🏁 " + t("roundComplete")}</button>
        </div>
      `;
    }

    $("#app").innerHTML = `
      <div class="game-screen fade-in">
        <div class="game-header">
          <button class="home-btn" id="home-btn" aria-label="${t("home")}">← ${t("home")}</button>
          <div class="game-meta">
            <span class="category-tag">${categoryLabel}</span>
            <span class="score-display">${t("score")}: ${state.score}/${total}</span>
          </div>
        </div>

        <div class="progress-bar-container" role="progressbar" aria-valuenow="${state.currentIndex + 1}" aria-valuemin="1" aria-valuemax="${total}">
          <div class="progress-bar" style="width: ${progress}%"></div>
        </div>

        <div class="question-counter">${t("question")} ${state.currentIndex + 1} ${t("of")} ${total}</div>

        <div class="question-card">
          <p class="question-text">${questionText}</p>
          <div class="options-grid ${isTF ? "tf-grid" : ""}">
            ${optionsHtml}
          </div>
        </div>

        ${feedbackHtml}
      </div>
    `;

    // Bind events
    $("#home-btn").addEventListener("click", goHome);
    if (!state.answered) {
      $$(".option-btn").forEach((btn) => {
        btn.addEventListener("click", () => handleAnswer(parseInt(btn.dataset.index)));
      });
    }
    if (state.answered) {
      const nextBtn = $("#next-btn");
      if (nextBtn) {
        nextBtn.addEventListener("click", nextQuestion);
        nextBtn.focus();
      }
    }
  }

  // ─── Handle Answer ───────────────────────
  function handleAnswer(index) {
    if (state.answered) return;
    state.answered = true;
    state.selectedIndex = index;
    const q = state.questions[state.currentIndex];
    if (index === q.correctIndex) {
      state.score++;
      announce(t("correct"));
    } else {
      announce(t("incorrect"));
    }
    renderGame();
  }

  // ─── Next Question ───────────────────────
  function nextQuestion() {
    if (state.currentIndex < state.questions.length - 1) {
      state.currentIndex++;
      state.answered = false;
      state.selectedIndex = null;
      renderGame();
      announce(t("question") + " " + (state.currentIndex + 1) + " " + t("of") + " " + state.questions.length);
    } else {
      showResults();
    }
  }

  // ─── Results Screen ──────────────────────
  function showResults() {
    state.screen = "results";
    const total = state.questions.length;
    announce(t("yourScore") + " " + state.score + " " + t("outOf") + " " + total);
    const pct = state.score / total;
    const isPerfect = pct === 1;

    let message, messageClass;
    if (isPerfect) {
      message = t("perfect");
      messageClass = "result-perfect";
      setTimeout(createConfetti, 300);
    } else if (pct >= 0.8) {
      message = t("great");
      messageClass = "result-great";
    } else if (pct >= 0.5) {
      message = t("good");
      messageClass = "result-good";
    } else {
      message = t("tryAgain");
      messageClass = "result-tryagain";
    }

    const categoryLabel = state.category === "all"
      ? t("allCategories")
      : t("categories." + state.category);

    const shareText = t("shareText")
      .replace("{score}", state.score)
      .replace("{total}", total)
      .replace("{category}", categoryLabel);

    const starHtml = Array.from({ length: total }, (_, i) =>
      `<span class="result-star ${i < state.score ? "filled" : ""}" aria-hidden="true">★</span>`
    ).join("");

    $("#app").innerHTML = `
      <div class="results-screen fade-in">
        <div class="results-card">
          <h2 class="results-heading ${messageClass}">${message}</h2>
          <div class="results-score">
            <span class="score-big">${state.score}</span>
            <span class="score-divider">/</span>
            <span class="score-total">${total}</span>
          </div>
          <div class="result-stars">${starHtml}</div>
          <p class="results-detail">${t("yourScore")} ${state.score} ${t("outOf")} ${total} — ${categoryLabel} (${t(state.difficulty)})</p>

          <div class="results-actions">
            <button class="start-btn" id="play-again-btn">���� ${t("playAgain")}</button>
            <button class="share-btn" id="share-btn">📤 ${t("shareResult")}</button>
            <button class="home-btn-alt" id="results-home-btn">🏠 ${t("home")}</button>
          </div>
        </div>

        <div class="ottavo-cta fade-in">
          <p>${t("ottavoCta")}</p>
          <a href="https://ottavo.coraxi.ai/en" target="_blank" rel="noopener noreferrer" class="ottavo-link">${t("meetOttavo")}</a>
        </div>
      </div>
    `;

    $("#play-again-btn").addEventListener("click", startGame);
    $("#results-home-btn").addEventListener("click", goHome);
    $("#share-btn").addEventListener("click", () => {
      if (navigator.share) {
        navigator.share({ text: shareText }).catch(() => {});
      } else {
        navigator.clipboard.writeText(shareText).then(() => {
          const btn = $("#share-btn");
          btn.textContent = "✓ Copied!";
          setTimeout(() => btn.textContent = "📤 " + t("shareResult"), 2000);
        }).catch(() => {});
      }
    });
  }

  // ─── Go Home ─────────────────────────────
  function goHome() {
    state.screen = "home";
    state.questions = [];
    state.currentIndex = 0;
    state.score = 0;
    state.answered = false;
    state.selectedIndex = null;
    renderHome();
  }

  // ─── Language Toggle ─────────────────────
  function setupLangToggle() {
    document.addEventListener("click", (e) => {
      if (e.target.id === "lang-toggle") {
        const newLang = getLang() === "en" ? "fr" : "en";
        setLang(newLang);
        document.getElementById("lang-toggle").textContent = t("langToggle");
        if (state.screen === "home") renderHome();
        else if (state.screen === "game") renderGame();
        else showResults();
      }
    });
  }

  // ─── Keyboard Navigation ─────────────────
  function setupKeyboard() {
    document.addEventListener("keydown", (e) => {
      if (state.screen !== "game") return;
      if (state.answered && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        nextQuestion();
        return;
      }
      if (!state.answered) {
        const num = parseInt(e.key);
        const q = state.questions[state.currentIndex];
        const maxOpts = q.type === "tf" ? 2 : (q.options.en || []).length;
        if (num >= 1 && num <= maxOpts) {
          e.preventDefault();
          handleAnswer(num - 1);
        }
      }
    });
  }

  // ─── Init ────────────────────────────────
  function init() {
    initLang();
    setupLangToggle();
    setupKeyboard();
    renderHome();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
