var word = document.querySelector('[data-word]').dataset.word;
var wordArray = word.split('');

// var glass = document.querySelector('.glass');
var electric = document.querySelector('.electric');

function lampsLight () {
  var timeDelay = 0;

  wordArray.forEach(function(letter) {

    var Letter = letter.toUpperCase();

    var lamp = document.querySelector('[data-lamp=' + Letter + ' ]');

    setTimeout(function () {
      lamp.classList.remove('disabled');
      // glass.play();
      electric.play();

      setTimeout(function () {
        lamp.classList.add('disabled');
        // glass.stop();
        electric.stop();
      }, 1000);

    }, timeDelay);


    timeDelay+=1500;
  });

  return timeDelay;
}

setInterval(lampsLight, lampsLight());
