// 🎂 Set your birthday here (Month Day)
const birthdayMonth = 5;   // March (1-12)
const birthdayDay = 21;    // Day

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const messageEl = document.getElementById("message");

function getNextBirthday() {
  const now = new Date();
  let year = now.getFullYear();

  let birthday = new Date(year, birthdayMonth - 1, birthdayDay);

  if (birthday < now) {
    birthday = new Date(year + 1, birthdayMonth - 1, birthdayDay);
  }

  return birthday;
}

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const birthday = getNextBirthday().getTime();
  const distance = birthday - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = days < 10 ? "0" + days : days;
  hoursEl.textContent = hours < 10 ? "0" + hours : hours;
  minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
  secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;

  if (distance < 0) {
    clearInterval(countdown);
    messageEl.innerHTML = "🎉 Happy Birthday! 🎂";
  }
}, 1000);
