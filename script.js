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

// 🎁 Surprise Gift Box
const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

giftBox.addEventListener("click", () => {
  giftBox.style.transform = "scale(0)";
  setTimeout(() => {
    giftMessage.innerHTML = "A special message just for you ❤️";
    giftMessage.style.opacity = 1;
  }, 500);
});

// ❤️ Interactive Heart
const bigHeart = document.getElementById("bigHeart");
const specialMessage = document.getElementById("specialMessage");

bigHeart.addEventListener("click", () => {
  specialMessage.innerHTML = "You Are The Best Thing That Ever Happened To Me ❤️";
  // Confetti effect
  for (let i = 0; i < 30; i++) {
    createConfetti();
  }
});

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.top = "-10px";
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
  document.body.appendChild(confetti);

  let fall = setInterval(() => {
    confetti.style.top = parseInt(confetti.style.top) + 5 + "px";
    if (parseInt(confetti.style.top) > window.innerHeight) {
      confetti.remove();
      clearInterval(fall);
    }
  }, 50);
}

// ✍️ Love Letter Typing Effect
const letterEl = document.getElementById("letter");
const loveText = "My dearest love, every moment with you feels like magic. You are my dream, my heart, my everything. Happy Birthday ❤️";

let index = 0;
function typeLetter() {
  if (index < loveText.length) {
    letterEl.innerHTML += loveText.charAt(index);
    index++;
    setTimeout(typeLetter, 80);
  }
}
typeLetter();

// 🎆 Final Ending Fireworks
function showFinal() {
  const finalMessage = document.getElementById("finalMessage");
  finalMessage.innerHTML = "<h2>Forever & Always ❤️</h2>";
  for (let i = 0; i < 50; i++) {
    createFirework();
  }
}

function createFirework() {
  const firework = document.createElement("div");
  firework.classList.add("firework");
  firework.style.left = Math.random() * window.innerWidth + "px";
  firework.style.top = Math.random() * window.innerHeight + "px";
  firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  document.body.appendChild(firework);

  setTimeout(() => {
    firework.remove();
  }, 1500);
}
