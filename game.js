// game.js

// Display selected parameters
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const gameClass = localStorage.getItem('gameClass');
const gameSubject = localStorage.getItem('gameSubject');
const gameChapter = localStorage.getItem('gameChapter');
const gameLevel = localStorage.getItem('gameLevel');

document.getElementById('displayClass').textContent = gameClass;
document.getElementById('displaySubject').textContent = gameSubject;
document.getElementById('displayChapter').textContent = gameChapter;
document.getElementById('displayLevel').textContent = gameLevel;

if (!currentUser) {
    window.location.href = 'auth.html';
}

document.getElementById('displayClass').textContent = gameClass;
document.getElementById('displaySubject').textContent = gameSubject;
document.getElementById('displayChapter').textContent = gameChapter;
document.getElementById('displayLevel').textContent = gameLevel;

// Simple placeholder score
let score = 0;
const scoreEl = document.getElementById('score');

// Placeholder game logic (Flappy Bird + Math question logic should be implemented here)
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Example game loop incrementing score every second (you will replace with actual game logic)
setInterval(() => {
    score += 1;
    scoreEl.textContent = score;
}, 1000);

function endGame() {
    // Save score to current user
    currentUser.leaderboardScore = score;
    currentUser.achievements.push(`Scored ${score} points in ${gameSubject}`);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    alert('Game Over! Your score: ' + score);
    window.location.href = 'dashboard.html';
}
