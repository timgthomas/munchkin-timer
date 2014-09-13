(function() {

  var start = document.querySelector('.start');
  var timer = document.querySelector('.timer');

  timer.addEventListener('transitionend', function() {
    timer.classList.remove('progress');
    timer.classList.add('shake-constant');
    setTimeout(function() {
      timer.classList.remove('shake-constant');
    }, 1500);
  });

  start.addEventListener('click', function() {
    timer.classList.add('progress');
  });

}());
