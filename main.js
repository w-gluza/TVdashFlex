let box = document.querySelector('#box');
let demo = document.querySelector('#demo');
let icon = document.querySelector('#path-modified');
let paragraph = document.querySelectorAll('.transition');

function runAnimation() {
  box.classList.add('colorTransition');
  demo.classList.add('pargraph-active');
  icon.classList.add('path-modified');
  paragraph.forEach(function(p) {
    p.classList.add('paragraph-active');
  });
}

function initialState() {
  box.classList.remove('colorTransition');
  demo.classList.remove('pargraph-active');
  icon.classList.remove('path-modified');
  paragraph.forEach(function(p) {
    p.classList.remove('paragraph-active');
  });
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
