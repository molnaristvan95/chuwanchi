console.clear();
console.time();
console.group();

const b = document.getElementById('btn'),
      str = 'paper,rock,scissor,well',
      arr = str.split(','),
      f = document.getElementById('four'),
      i = document.getElementById('im');

let anim = () => {
  b.classList.add('push');
  window.setTimeout( () => {
    b.classList.remove('push');
  }, 2000);
},
    int,
    random = () => {
      b.disabled = true;
      i.style.opacity = 1;
      if (four.checked === true) {
        int = window.setInterval( () => {
          let r = Math.floor(Math.random() * 4);
          im.src = 'https://molnaristvan95.github.io/chuwanchi/' + arr[r] + '.png';
        }, 1);
        window.setTimeout( () => {
          window.clearInterval(int);
          window.setTimeout( () => {
            i.style.opacity = 0;
            b.disabled = false;
          }, 4000);
        }, (1000 * 4));
      } else {
        int = window.setInterval( () => {
          let r = Math.floor(Math.random() * 3);
          im.src = 'https://molnaristvan95.github.io/chuwanchi/' + arr[r] + '.png';
        }, 1);
        window.setTimeout( () => {
          window.clearInterval(int);
          window.setTimeout( () => {
            i.style.opacity = 0;
            b.disabled = false;
          }, 4000);
        }, (1000 * 4));
      }
    };

b.addEventListener('click', () => {
  anim();
  random();
});






console.timeEnd();
console.log('%c The program successfully was loaded', 'font-size:25px; color:#ff0;');
