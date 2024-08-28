document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.style.backgroundColor = "#e0f7fa";
    });
    input.addEventListener('blur', function () {
        this.style.backgroundColor = "";
    });
});


const feedback = document.getElementById('feedback');
const charCount = document.getElementById('charCount');

feedback.addEventListener('input', function() {
    const remaining = 500 - this.value.length;
    charCount.textContent = `${remaining} characters remaining`;
});


let idleTime = 0;
const idleInterval = setInterval(timerIncrement, 60000); 

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keypress', resetTimer);

function timerIncrement() {
    idleTime++;
    if (idleTime > 4) { 
        alert("You've been idle for 5 minutes. Please continue your task.");
    }
}

function resetTimer() {
    idleTime = 0;
}
