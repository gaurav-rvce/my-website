function subscribe() {
    alert("Thanks for subscribing! We'll notify you about updates. 🚀");
}

// Countdown Timer
const launchDate = new Date("December 31, 2024 23:59:59").getTime();
const timer = document.getElementById("timer");

const updateTimer = () => {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

    if (timeLeft < 0) {
        clearInterval(interval);
        timer.innerHTML = "🚀 We are live!";
    }
};

const interval = setInterval(updateTimer, 1000);
