/**
 * Bilingual support for canTRIVIA (EN / FR-CA)
 */
const I18N = {
  en: {
    siteTitle: "canTRIVIA",
    tagline: "How well do you know Canada?",
    startGame: "Play Now",
    selectCategory: "Choose a Category",
    selectDifficulty: "Choose Difficulty",
    allCategories: "All Categories",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    question: "Question",
    of: "of",
    score: "Score",
    next: "Next",
    correct: "Correct!",
    incorrect: "Incorrect!",
    didYouKnow: "Did you know?",
    trueLabel: "True",
    falseLabel: "False",
    roundComplete: "Round Complete!",
    yourScore: "You scored",
    outOf: "out of",
    perfect: "Perfect Score!",
    great: "Great job!",
    good: "Not bad!",
    tryAgain: "Keep learning!",
    playAgain: "Play Again",
    shareResult: "Share Result",
    shareText: "I scored {score}/{total} on {category} in canTRIVIA! 🍁 How well do you know Canada?",
    home: "Home",
    footer: "Built by canLM — Powering Canada's AI future",
    ottavoCta: "Think you know Canada? Imagine an AI that does too.",
    meetOttavo: "Meet Ottavo →",
    categories: {
      history: "History",
      geography: "Geography",
      culture: "Culture",
      language: "Language",
      sports: "Sports",
      indigenous: "Indigenous Peoples",
      science: "Science & Innovation",
      food: "Food & Drink"
    },
    langToggle: "FR"
  },
  fr: {
    siteTitle: "canTRIVIA",
    tagline: "Connaissez-vous bien le Canada?",
    startGame: "Jouer",
    selectCategory: "Choisir une catégorie",
    selectDifficulty: "Choisir la difficulté",
    allCategories: "Toutes les catégories",
    easy: "Facile",
    medium: "Moyen",
    hard: "Difficile",
    question: "Question",
    of: "de",
    score: "Score",
    next: "Suivant",
    correct: "Bonne réponse!",
    incorrect: "Mauvaise réponse!",
    didYouKnow: "Le saviez-vous?",
    trueLabel: "Vrai",
    falseLabel: "Faux",
    roundComplete: "Ronde terminée!",
    yourScore: "Vous avez obtenu",
    outOf: "sur",
    perfect: "Score parfait!",
    great: "Excellent!",
    good: "Pas mal!",
    tryAgain: "Continuez à apprendre!",
    playAgain: "Rejouer",
    shareResult: "Partager le résultat",
    shareText: "J'ai obtenu {score}/{total} en {category} sur canTRIVIA! 🍁 Connaissez-vous bien le Canada?",
    home: "Accueil",
    footer: "Créé par canLM — L'avenir de l'IA au Canada",
    ottavoCta: "Vous pensez connaître le Canada? Imaginez une IA qui le connaît aussi.",
    meetOttavo: "Découvrir Ottavo →",
    categories: {
      history: "Histoire",
      geography: "Géographie",
      culture: "Culture",
      language: "Langue",
      sports: "Sports",
      indigenous: "Peuples autochtones",
      science: "Science et innovation",
      food: "Cuisine et boissons"
    },
    langToggle: "EN"
  }
};

let currentLang = "en";

function t(key) {
  const keys = key.split(".");
  let val = I18N[currentLang];
  for (const k of keys) {
    if (val && typeof val === "object") val = val[k];
    else return key;
  }
  return val || key;
}

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "fr" ? "fr-CA" : "en";
  localStorage.setItem("canTrivia_lang", lang);
}

function getLang() {
  return currentLang;
}

function initLang() {
  const saved = localStorage.getItem("canTrivia_lang");
  if (saved && I18N[saved]) {
    currentLang = saved;
  }
  document.documentElement.lang = currentLang === "fr" ? "fr-CA" : "en";
}
