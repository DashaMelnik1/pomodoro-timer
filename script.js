const button = document.querySelector('#start');
const pomodoroTime = document.querySelector('#pomodoro-time');
const buttonReset = document.querySelector('#reset');

const buttonPomodoro = document.querySelector('#pomodoro');
const buttonBreak = document.querySelector('#break');

let timerMode = 'pomodoro';

let minutes = 25;
let seconds = 0;

let timerId = 0;

function format(val) {
    if (val < 10) {
        return `0${val}`;
    }
    return val;
}

button.addEventListener('click', function() {
    if (button.textContent == 'start') {
        button.textContent = 'stop';
        timerId = setInterval(() => {
            if (seconds === 0 && minutes !== 0) {
                seconds = 59;
                minutes--;
            }
            if (seconds === 0 && minutes === 0) {
                clearInterval(timerId);
                if (timerMode == 'pomodoro') {
                    seconds = 0;
                    minutes = 25;
                } else if (timerMode == 'break') {
                    seconds = 0;
                    minutes = 5;
                }
                button.textContent = 'start';
                return pomodoroTime.textContent = `${format(minutes)}:${format(seconds)}`;
            }
            pomodoroTime.textContent = `${format(minutes)}:${format(seconds)}`;
            seconds--;
        }, 10)
    } else if (button.textContent = 'stop') {
        clearInterval(timerId);
        button.textContent = 'start';
    }
});

buttonPomodoro.addEventListener('click', function() {
    clearInterval(timerId);
    seconds = 0;
    minutes = 25;
    timerMode = 'pomodoro';
    button.textContent = 'start';
    pomodoroTime.textContent = `${format(minutes)}:${format(seconds)}`;
})

buttonBreak.addEventListener('click', function() {
    clearInterval(timerId);
    seconds = 0;
    minutes = 5;
    timerMode = 'break';
    button.textContent = 'start';
    pomodoroTime.textContent = `${format(minutes)}:${format(seconds)}`;
})

buttonReset.addEventListener('click', function() {
    clearInterval(timerId);
    if (timerMode == 'pomodoro') {
        seconds = 0;
        minutes = 25;
    } else if (timerMode == 'break') {
        seconds = 0;
        minutes = 5;
    }
    button.textContent = 'start';
    pomodoroTime.textContent = `${format(minutes)}:${format(seconds)}`;
})