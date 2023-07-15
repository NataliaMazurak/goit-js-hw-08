

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';


// timeUpdate зберігає поточний час в localStorage 

function timeUpdate(event) {
    const currentTime = event.seconds;
    // console.log(currentTime);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime));
}


player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate(event) {
    const currentTime = event.seconds;
    console.log(currentTime);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime));
}

// saveCurrentTime - останній  збережений час або за замовчуванням 0

const savedCurrentTime = localStorage.getItem(LOCALSTORAGE_KEY) || 0;


// setCurrentTime () - встановлює відео на позицію,яку мизберегли в localStorage, також перевиряємо тип помилки
player
  .setCurrentTime(savedCurrentTime)
  .then(function (seconds) {
    console.log(`saveCurrentTime is ${seconds} seconds`);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log('Current Time error');
        break;

      default:
        console.log('This is default');
        break;
    }
  });