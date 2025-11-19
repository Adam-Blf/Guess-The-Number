/**
 * Guess The Number Game
 * Author: Adam Beloucif
 * Description: Jeu interactif où le joueur doit deviner un nombre entre 1 et 100
 */

// ===================================================
// GAME STATE
// ===================================================
let secretNumber = 0;
let attempts = 0;
let minRange = 1;
let maxRange = 100;
let gameHistory = [];
let bestScore = localStorage.getItem('bestScore') || null;
let gameStartTime = null;

// ===================================================
// DOM ELEMENTS
// ===================================================
const elements = {
    guessInput: document.getElementById('guessInput'),
    guessBtn: document.getElementById('guessBtn'),
    newGameBtn: document.getElementById('newGameBtn'),
    hintBtn: document.getElementById('hintBtn'),
    messageBox: document.getElementById('messageBox'),
    attemptsDisplay: document.getElementById('attempts'),
    bestScoreDisplay: document.getElementById('bestScore'),
    rangeDisplay: document.getElementById('range'),
    historyList: document.getElementById('historyList'),
    victoryModal: document.getElementById('victoryModal'),
    playAgainBtn: document.getElementById('playAgainBtn'),
    victoryMessage: document.getElementById('victoryMessage'),
    victoryNumber: document.getElementById('victoryNumber'),
    victoryAttempts: document.getElementById('victoryAttempts'),
    victoryTime: document.getElementById('victoryTime')
};

// ===================================================
// GAME INITIALIZATION
// ===================================================
function initGame() {
    secretNumber = generateRandomNumber(1, 100);
    attempts = 0;
    minRange = 1;
    maxRange = 100;
    gameHistory = [];
    gameStartTime = Date.now();
    
    // Reset UI
    elements.guessInput.value = '';
    elements.guessInput.disabled = false;
    elements.guessBtn.disabled = false;
    updateMessage('🎯 Fais ta première tentative !', 'neutral');
    updateStats();
    updateHistory();
    elements.guessInput.focus();
    
    console.log(`🎮 Nouvelle partie ! Nombre secret: ${secretNumber}`);
}

// ===================================================
// CORE GAME LOGIC
// ===================================================
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeGuess() {
    const guess = parseInt(elements.guessInput.value);
    
    // Validation
    if (!guess || guess < 1 || guess > 100) {
        updateMessage('❌ Entre un nombre valide entre 1 et 100 !', 'error');
        return;
    }
    
    attempts++;
    
    // Check if guess is correct
    if (guess === secretNumber) {
        handleVictory();
        return;
    }
    
    // Give feedback
    const feedback = guess < secretNumber ? 'too-low' : 'too-high';
    const message = guess < secretNumber ? 'plus grand' : 'plus petit';
    const emoji = guess < secretNumber ? '📈' : '📉';
    
    updateMessage(`${emoji} C'est ${message} !`, feedback === 'too-low' ? 'error' : 'error');
    
    // Update range
    if (guess < secretNumber && guess > minRange) {
        minRange = guess;
    } else if (guess > secretNumber && guess < maxRange) {
        maxRange = guess;
    }
    
    // Add to history
    gameHistory.push({
        guess: guess,
        feedback: feedback,
        attempt: attempts
    });
    
    updateStats();
    updateHistory();
    elements.guessInput.value = '';
    elements.guessInput.focus();
}

function handleVictory() {
    elements.guessInput.disabled = true;
    elements.guessBtn.disabled = true;
    
    updateMessage('🎉 Bravo ! Tu as trouvé !', 'success');
    
    // Calculate time
    const timeElapsed = Math.floor((Date.now() - gameStartTime) / 1000);
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    const timeString = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
    
    // Update best score
    if (!bestScore || attempts < bestScore) {
        bestScore = attempts;
        localStorage.setItem('bestScore', bestScore);
        updateStats();
    }
    
    // Show victory modal
    const rating = getRating(attempts);
    elements.victoryMessage.textContent = rating.message;
    elements.victoryNumber.textContent = secretNumber;
    elements.victoryAttempts.textContent = attempts;
    elements.victoryTime.textContent = timeString;
    elements.victoryModal.classList.remove('hidden');
}

function getRating(attempts) {
    if (attempts <= 5) {
        return { message: '🏆 Incroyable ! Tu es un génie !', emoji: '🏆' };
    } else if (attempts <= 8) {
        return { message: '⭐ Excellent ! Très bonne performance !', emoji: '⭐' };
    } else if (attempts <= 12) {
        return { message: '👍 Bien joué ! C\'est une bonne partie !', emoji: '👍' };
    } else {
        return { message: '💪 Continue à t\'entraîner !', emoji: '💪' };
    }
}

function giveHint() {
    if (attempts === 0) {
        updateMessage('❌ Fais au moins une tentative avant de demander un indice !', 'error');
        return;
    }
    
    attempts += 2; // Penalty for hint
    
    // Calculate hint range
    const hintMin = Math.max(1, secretNumber - 10);
    const hintMax = Math.min(100, secretNumber + 10);
    
    updateMessage(`💡 Le nombre est entre ${hintMin} et ${hintMax} (coût: 2 essais)`, 'neutral');
    updateStats();
}

// ===================================================
// UI UPDATES
// ===================================================
function updateMessage(message, type) {
    elements.messageBox.textContent = message;
    elements.messageBox.className = 'message-box';
    
    if (type === 'success') {
        elements.messageBox.classList.add('success');
    } else if (type === 'error') {
        elements.messageBox.classList.add('error');
    }
}

function updateStats() {
    elements.attemptsDisplay.textContent = attempts;
    elements.bestScoreDisplay.textContent = bestScore || '-';
    elements.rangeDisplay.textContent = `${minRange}-${maxRange}`;
}

function updateHistory() {
    if (gameHistory.length === 0) {
        elements.historyList.innerHTML = '<p class="empty-history">Aucune tentative pour le moment</p>';
        return;
    }
    
    elements.historyList.innerHTML = '';
    
    // Show last 10 attempts (reverse order)
    const recentHistory = gameHistory.slice(-10).reverse();
    
    recentHistory.forEach(entry => {
        const historyItem = document.createElement('div');
        historyItem.className = `history-item ${entry.feedback}`;
        
        const guessText = document.createElement('span');
        guessText.textContent = `#${entry.attempt}: ${entry.guess}`;
        
        const feedbackEmoji = document.createElement('span');
        feedbackEmoji.textContent = entry.feedback === 'too-low' ? '📈' : '📉';
        
        historyItem.appendChild(guessText);
        historyItem.appendChild(feedbackEmoji);
        elements.historyList.appendChild(historyItem);
    });
}

// ===================================================
// EVENT LISTENERS
// ===================================================
elements.guessBtn.addEventListener('click', makeGuess);

elements.guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        makeGuess();
    }
});

elements.newGameBtn.addEventListener('click', initGame);

elements.hintBtn.addEventListener('click', giveHint);

elements.playAgainBtn.addEventListener('click', () => {
    elements.victoryModal.classList.add('hidden');
    initGame();
});

// Close modal when clicking outside
elements.victoryModal.addEventListener('click', (e) => {
    if (e.target === elements.victoryModal) {
        elements.victoryModal.classList.add('hidden');
        initGame();
    }
});

// ===================================================
// KEYBOARD SHORTCUTS
// ===================================================
document.addEventListener('keydown', (e) => {
    // Press 'N' for new game
    if (e.key === 'n' || e.key === 'N') {
        if (e.target !== elements.guessInput) {
            initGame();
        }
    }
    
    // Press 'H' for hint
    if (e.key === 'h' || e.key === 'H') {
        if (e.target !== elements.guessInput) {
            giveHint();
        }
    }
});

// ===================================================
// GAME START
// ===================================================
initGame();

// Display best score on load
if (bestScore) {
    console.log(`🏆 Meilleur score: ${bestScore} essais`);
}
