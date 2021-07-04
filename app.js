// UI Vars
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const timer = document.getElementById('timer');

// Functionality variables
let isTimerRunning = false;
let hr = 0;
let min = 0;
let sec = 0;


// Load event listeners
loadAllEventListeners();

// Declaring event listners
function loadAllEventListeners() {

    // Starting the timer
    startBtn.addEventListener('click', startTimer);

    // Stop the timer
    stopBtn.addEventListener('click', stopTimer);

    // Reset the timer
    resetBtn.addEventListener('click', resetTimer);

}

// Start timer function
function startTimer() {

    // Check if timer is running or not
    console.log('Starting...')
    if (isTimerRunning == false) {
        isTimerRunning = true;

        // Running timer function
        timerRun();
    }

}

function stopTimer() {

    // Check if timer is running or not
    if (isTimerRunning == true) {
        isTimerRunning = false

        // Running timer function
        timerRun();
    }
}

// Reset timer function
function resetTimer() {
    timer.innerHTML = '00:00:00';
    isTimerRunning = false;
    hr = 0;
    min = 0;
    sec = 0;
}

// Timer run function
function timerRun() {

    if (isTimerRunning == true) {
        // Converting string to integers
        hr = parseInt(hr)
        min = parseInt(min)
        sec = parseInt(sec)

        // Incrementing seconds
        sec += 1;

        // Check if 60 seconds are up
        if (sec == 60) {
            sec = 0;
            min += 1;
        }

        // Check if 60 miinutes are up
        if (min == 60) {
            min = 0;
            hr += 1;
        }

        // If seconds are less than 10
        if (sec < 10) {
            sec = '0' + sec;
        }

        // If minutes are less than 10
        if (min < 10) {
            min = '0' + min;
        }

        // If hours are less than 10
        if (hr < 10) {
            hr = '0' + hr
        }

        timer.innerHTML = hr + ':' + min + ':' + sec;
        
        // Call function after 1 second
        setTimeout("timerRun()", 1000);
    }
}