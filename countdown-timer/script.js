const secondsInput = document.getElementById('seconds');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('display');
const message = document.getElementById('message');

let count = 0;
let timer = null;

function updateDisplay() {
    display.textContent = count;
}

function start() {
    if (timer) return;
    count = parseInt(secondsInput.value) || 10;
    timer = setInterval(() => {
        count--;
        updateDisplay();
        if (count <= 0) {
            clearInterval(timer);
            timer = null;
            message.textContent = 'Time is up!';
        }
    }, 1000);
}

function reset() {
    clearInterval(timer);
    timer = null;
    count = parseInt(secondsInput.value) || 10;
    updateDisplay();
    message.textContent = '';
}

startBtn.addEventListener('click', start);
resetBtn.addEventListener('click', reset);
