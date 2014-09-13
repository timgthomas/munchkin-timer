(function() {

  var start = document.querySelector('.start');
  var timer = document.querySelector('.timer');

  timer.addEventListener('transitionend', function() {
    timer.classList.remove('progress');
  });

  start.addEventListener('click', function() {
    timer.classList.add('progress');
  });

}());
