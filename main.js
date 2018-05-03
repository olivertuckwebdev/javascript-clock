const HOUR_HAND = document.querySelector('#hour');
const MINUTE_HAND = document.querySelector('#minute');
const SECOND_HAND = document.querySelector('#second');

let interval = setInterval(updateClock, 1000);

function updateClock() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let hourPosition = (hour * 360 / 12) + (minute * 360 / 60) / 12;
  let minutePosition = (minute * 360 / 60) + (second * 360 / 60) / 60;
  let secondPosition = second * 360 / 60;

  HOUR_HAND.style.transform = `rotate(${hourPosition}deg)`;
  MINUTE_HAND.style.transform = `rotate(${minutePosition}deg)`;
  SECOND_HAND.style.transform = `rotate(${secondPosition}deg)`;
}
