let currentQuizKey = "";
let activeQuestions = [];
let currentQuestionIndex = 0;
let totalScore = 0;

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function showHome() {
    document.getElementById("quiz-section").classList.add("hidden");
    document.getElementById("generator-section").classList.add("hidden");
    document.getElementById("quiz-menu").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openGenerator() {
    document.getElementById("quiz-menu").classList.add("hidden");
    document.getElementById("quiz-section").classList.add("hidden");
    document.getElementById("generator-section").classList.remove("hidden");
    document.getElementById("gen-setup").classList.remove("hidden");
    document.getElementById("gen-play").classList.add("hidden");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectQuiz(quizKey) {
    if (typeof quizzesData === "undefined" || !quizzesData[quizKey]) {
        alert("Erreur : vérifiez que le fichier questions.js est bien enregistré et complet !");
        return;
    }
    currentQuizKey = quizKey;
    currentQuestionIndex = 0;
    totalScore = 0;

    const fullPool = quizzesData[quizKey].questions;
    activeQuestions = shuffleArray(fullPool).slice(0, 5);

    document.getElementById("quiz-menu").classList.add("hidden");
    document.getElementById("generator-section").classList.add("hidden");
    document.getElementById("quiz-section").classList.remove("hidden");
    document.getElementById("result-box").classList.add("hidden");
    document.getElementById("quiz-box").classList.remove("hidden");

    document.getElementById("active-quiz-title").textContent = quizzesData[quizKey].title;
    showQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showQuestion() {
    const q = activeQuestions[currentQuestionIndex];
    document.getElementById("question-text").textContent = `${currentQuestionIndex + 1}/5. ${q.question}`;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    document.getElementById("progress").style.width = `${(currentQuestionIndex / 5) * 100}%`;

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.classList.add("option-btn");
        button.onclick = () => {
            totalScore += option.points;
            currentQuestionIndex++;
            if (currentQuestionIndex < 5) {
                showQuestion();
            } else {
                showResult();
            }
        };
        optionsContainer.appendChild(button);
    });
}

function showResult() {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("progress").style.width = "100%";

    const quiz = quizzesData[currentQuizKey];
    const matchedResult = quiz.results.find(r => totalScore >= r.min);

    document.getElementById("result-title").textContent = matchedResult.title;
    document.getElementById("result-description").textContent = matchedResult.desc;
    document.getElementById("result-advice").textContent = matchedResult.advice;

    document.getElementById("share-btn").onclick = () => {
        const text = `J'ai fait le test "${quiz.title}" et mon résultat est : "${matchedResult.title}" !`;
        window.open(`https://whatsapp.com{encodeURIComponent(text)}`, '_blank');
    };
}

let selectedRelation = "amitie";
let generatedDeck = [];
let genIndex = 0;

function setRelation(rel, btnElement) {
    selectedRelation = rel;
    document.querySelectorAll(".rel-btn").forEach(b => b.classList.remove("active"));
    btnElement.classList.add("active");
}

function updateHeat(val) {
    val = parseInt(val, 10);
    document.getElementById("heat-val").textContent = val;
    const badge = document.getElementById("heat-badge");
    badge.className = "heat-tag";
    if (val <= 15) { badge.textContent = "🧊 Low (Léger)"; badge.classList.add("level-low"); }
    else if (val <= 30) { badge.textContent = "✨ Moyen (Confidences)"; badge.classList.add("level-medium"); }
    else if (val <= 45) { badge.textContent = "🌶️ Hot (Audacieux)"; badge.classList.add("level-hot"); }
    else { badge.textContent = "🔥 Super Hot (Intime)"; badge.classList.add("level-superhot"); }
}

function startGenerator() {
    if (typeof generatorQuestions === "undefined") {
        alert("Erreur : vérifiez que generatorQuestions est bien présent à la fin de questions.js !");
        return;
    }
    const level = parseInt(document.getElementById("heat-slider").value, 10);
    const targetCount = parseInt(document.getElementById("count-slider").value, 10);
    const pool = generatorQuestions[selectedRelation];

    let primary = [], secondary = [];
    if (level <= 15) { primary = shuffleArray(pool.low); secondary = shuffleArray(pool.medium); }
    else if (level <= 30) { primary = shuffleArray(pool.medium); secondary = shuffleArray([...pool.low, ...pool.hot]); }
    else if (level <= 45) { primary = shuffleArray(pool.hot); secondary = shuffleArray([...pool.medium, ...pool.superhot]); }
    else { primary = shuffleArray(pool.superhot); secondary = shuffleArray(pool.hot); }

    let combined = [...primary, ...secondary];
    while (combined.length < targetCount) { combined = combined.concat(shuffleArray(primary)); }

    generatedDeck = combined.slice(0, targetCount);
    genIndex = 0;

    document.getElementById("gen-setup").classList.add("hidden");
    document.getElementById("gen-play").classList.remove("hidden");
    document.getElementById("next-gen-btn").classList.remove("hidden");

    const relNames = { amitie: "Amitié", meilleurs_amis: "Meilleurs Amis", couple: "Couple" };
    const activeTag = document.getElementById("gen-active-tag");
    const currentBadge = document.getElementById("heat-badge");
    activeTag.textContent = `${relNames[selectedRelation]} • ${currentBadge.textContent} (${level}/60)`;
    activeTag.className = currentBadge.className;

    displayGenCard();
}

function displayGenCard() {
    document.getElementById("gen-counter").textContent = `Question ${genIndex + 1} / ${generatedDeck.length}`;
    document.getElementById("gen-question-text").textContent = generatedDeck[genIndex];
    document.getElementById("next-gen-btn").textContent = (genIndex === generatedDeck.length - 1) ? "Terminer ✓" : "Question suivante →";
}

function nextGenQuestion() {
    if (genIndex < generatedDeck.length - 1) { genIndex++; displayGenCard(); }
    else {
        document.getElementById("gen-question-text").textContent = "🎉 Questionnaire terminé !";
        document.getElementById("next-gen-btn").classList.add("hidden");
    }
}

function resetGenerator() {
    document.getElementById("gen-play").classList.add("hidden");
    document.getElementById("gen-setup").classList.remove("hidden");
}

function shareGenQuestion() {
    const q = generatedDeck[genIndex];
    window.open(`https://whatsapp.com{encodeURIComponent("🔥 Question intime : " + q)}`, '_blank');
}
