(function() {

  var start = document.querySelector('.start');
  var timer = document.querySelector('.timer');

  timer.addEventListener('transitionend', function() {
    timer.classList.remove('progress');
    timer.classList.add('shake');
    setTimeout(function() {
      timer.classList.remove('shake');
    }, 1500);
  });

  start.addEventListener('click', function() {
    timer.classList.remove('shake');
    timer.classList.add('progress');
  });

}());
