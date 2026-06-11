// 🎂 Birthday Countdown
const countdownEl = document.getElementById("countdown");

// Set target birthday (9 days from now)
const birthdayDate = new Date();
birthdayDate.setDate(birthdayDate.getDate() + 9);

function updateCountdown() {
  const now = new Date();
  const diff = birthdayDate - now;

  if (diff <= 0) {
    countdownEl.innerText = "🎉 Happy Birthday My Love! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.innerText = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds To Go ❤️`;
}
setInterval(updateCountdown, 1000);
