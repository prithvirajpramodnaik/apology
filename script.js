let currentLevel = 0;
const levels = [
    {
        description: "Level 1: Remember our first time u sent me a message",
        message: "your energy on that day and till to this day amazes me."
    },
    {
        description: "Level 2: Remember our second time u sent me a message",
        message: "I learned the meaning of platonic that day it was memorable"
    },
    {
        description: "Level 3: Remember when you helped me to resolve issues with sakshata",
        message: "I am and will alwyas be garteful for that favor."
    },
    {
        description: "Final Level: Thank you for playing! I hope you can forgive me. 💖",
        message: "I am truly sorry and will do my best to make things right."
    }
];

document.getElementById('level-description').innerText = levels[currentLevel].description;

function collectToken() {
    document.getElementById('token').style.display = 'none';
    document.getElementById('next-level').style.display = 'block';
        alert(levels[currentLevel].message);

}

function nextLevel() {
    currentLevel++;
    if (currentLevel < levels.length) {
        document.getElementById('level-description').innerText = levels[currentLevel].description;
        document.getElementById('token').style.display = 'block';
        document.getElementById('next-level').style.display = 'none';
        // Randomize token position
        const token = document.getElementById('token');
        token.style.top = `${Math.random() * 150}px`;
        token.style.left = `${Math.random() * (document.getElementById('game-area').offsetWidth - 50)}px`;
    } else {
        document.getElementById('level-description').innerText = levels[currentLevel - 1].message;
        document.getElementById('next-level').style.display = 'none';
    }
}
