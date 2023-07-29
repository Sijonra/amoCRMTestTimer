const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let check = false;
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = (seconds) => {
  check = true;
  let hour = Math.floor(seconds / 60 / 60 % 60) >= 10 ? Math.floor(seconds / 60 / 60 % 60) : '0' + Math.floor(seconds / 60 / 60 % 60)
  let min = Math.floor(seconds / 60 % 60) >= 10 ? Math.floor(seconds / 60 % 60) : '0' + Math.floor(seconds / 60 % 60)
  let sec = seconds % 60 >= 10 ? seconds % 60 : '0' +  seconds % 60;
  let currentTime = hour + ":" +  min + ":" + sec
  timerEl.textContent = currentTime
  seconds--

  let interval = setInterval(()=>{
    hour = Math.floor(seconds / 60 / 60 % 60) >= 10 ? Math.floor(seconds / 60 / 60 % 60) : '0' + Math.floor(seconds / 60 / 60 % 60)
    min = Math.floor(seconds / 60 % 60) >= 10 ? Math.floor(seconds / 60 % 60) : '0' + Math.floor(seconds / 60 % 60)
    sec = seconds % 60 >= 10 ? seconds % 60 : '0' +  seconds % 60;
    if(seconds >= 0){
      currentTime = hour + ":" +  min + ":" + sec
      seconds--
      timerEl.textContent = currentTime
    }
    else if(seconds < 0){
      check = false;
      clearInterval(interval)
    }
  }, 10)

};

const animateTimer = createTimerAnimator;

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9\.]/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  if(!check){
    animateTimer(seconds);
  }
  inputEl.value = '';
});
