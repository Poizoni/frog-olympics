const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');


let countDownDate = new Date('April 25, 2022 12:50').getTime();

let x = setInterval(() => {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let calcDays = Math.floor(distance / (1000*60*60*24));
    let calcHours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    let calcMins = Math.floor((distance % (1000*60*60)) / (1000*60));
    let calcSecs = Math.floor((distance % (1000*60)) / 1000);

    days.innerHTML = calcDays + 'd';
    hours.innerHTML = calcHours + 'h';
    mins.innerHTML = calcMins + 'm';
    secs.innerHTML = calcSecs + 's';

    if(distance<0) {
        clearInterval(x);
        timer.innerHTML = 'expired';
    }
}, 1000);


let btn1 = document.getElementById('info');
let btn2 = document.getElementById('score');
let btn3 = document.getElementById('map');
let btn4 = document.getElementById('rules');

btn1.onclick = () => {
    location.href = 'details.html'
};
btn2.onclick = () => {
    location.href = 'score.html'
};
btn3.onclick = () => {
    location.href = 'map.html'
};
btn4.onclick = () => {
    location.href = 'rules.html'
};