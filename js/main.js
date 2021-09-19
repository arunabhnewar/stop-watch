const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const hours = document.getElementById('hour');
const minutes = document.getElementById('mins');
const seconds = document.getElementById('seconds');
const milliSeconds = document.getElementById('milli-seconds');

// two digit update 
const isTwoDigit = unit => unit.innerText.length === 1 && (unit.innerText = '0' + unit.innerText);

// reset unit after get max limit
const resetUnit = (unit, limit) => unit.innerText > limit && (unit.innerText = '00') && unit.previousElementSibling.innerText++;

// start button event handler 
startBtn.addEventListener('click', () => {
    const setTime = () => {
        milliSeconds.innerText++;
        resetUnit(milliSeconds, 99)
        resetUnit(seconds, 59)
        resetUnit(minutes, 59)
        isTwoDigit(milliSeconds);
        isTwoDigit(seconds);
        isTwoDigit(minutes);
        isTwoDigit(hours);
    }
    const interval = setInterval(setTime, 10);
    stopBtn.addEventListener('click', () => clearInterval(interval));
})

// reset btn event handler
const resetTime = () => {
    milliSeconds.innerText = seconds.innerText = minutes.innerText = hours.innerText = "00";
    stopBtn.className === '' && stopBtn.click();
}

const toggleBtn = () => startBtn.classList.toggle('d-none') !== stopBtn.classList.toggle('d-none');