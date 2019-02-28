var box = document.querySelector('#box');
var demo = document.querySelector('#demo');
var icon = document.querySelector('#path-modified');
var paragraph = document.querySelectorAll('.transition');

function runAnimation() {
  box.classList.add('colorTransition');
  demo.classList.add('pargraph-active');
  icon.classList.add('path-modified');
  for (var i = 0; i < paragraph.length; i++) {
    paragraph[i].classList.add('paragraph-active');
  }
}

function initialState() {
  box.classList.remove('colorTransition');
  demo.classList.remove('pargraph-active');
  icon.classList.remove('path-modified');
  for (var i = 0; i < paragraph.length; i++) {
    paragraph[i].classList.remove('paragraph-active');
  }
}

function theLoop(i) {
  initialState();
  demo.innerHTML = i.toLocaleString('de-DE');

  setTimeout(function() {
    runAnimation();
  });

  setTimeout(function() {
    theLoop(++i);
  }, 3000); //<-- 3s
}
theLoop(23376);
