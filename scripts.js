var button = document.querySelector('.button');
var block = document.querySelector('.block');

var word = document.querySelector('[data-word]').dataset.word;
var wordArray = word.split('');
var electric = document.querySelector('.electric');
var music = document.querySelector('.music');

var rr = function(min, max) { return Math.random() * (max-min) + min; };

var lampOn = function(lamp) {
  lamp.classList.remove('disabled');
  electric.play();
};

var lampOff = function(lamp) {
  lamp.classList.add('disabled');
  electric.pause();
};

function lampsLight () {
  var timeDelay = 0;

  wordArray.forEach(function(letter) {

    var Letter = letter.toUpperCase();

    var lamp = document.querySelector('[data-lamp=' + Letter + ' ]');

    setTimeout(function () {

      lampOn(lamp);

      if(rr(0,100) > 25) {
        setTimeout(function () {
          lampOff(lamp);
        }, rr(50, 150));

        setTimeout(function () {
          lampOn(lamp);
        }, rr(150, 250));
      }

      if(rr(0,100) > 50) {
        setTimeout(function () {
          lampOff(lamp);
        }, rr(250, 300));

        setTimeout(function () {
          lampOn(lamp);
        }, rr(300, 400));
      }

      setTimeout(function () {
        lampOff(lamp);
      }, rr(800, 1500));

    }, timeDelay);


    timeDelay += rr(1000, 2500);
  });

  return timeDelay;
}

button.addEventListener('click', function () {
  block.classList.remove('hidden');
  button.classList.add('hidden');
  music.play();
  setInterval(lampsLight, lampsLight());
});
