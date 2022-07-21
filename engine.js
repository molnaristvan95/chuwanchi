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
      i.alt = i.src;
    };

b.addEventListener('click', () => {
  anim();
  random();
});


let integer = 0,
    shareF = () => {
  let s = document.createElement('DIV'),
      qrCode = document.createElement('IMG');
        document.body.insertBefore(s, null);
        document.body.insertBefore(qrCode, null);
        s.classList.add('share');
        qrCode.classList.add('qr');
        qrCode.src = 'CGI/shareChu4.png';
        qrCode.alt = 'QR code reading filed...';
        qrCode.style.opacity = 1;
  s.addEventListener('click', () => {
    if (integer === 0) {
      integer = 1;
      qrCode.style.display = 'block';
    } else {
      integer = 0;
      qrCode.style.display = 'none';
    }
  });
}
shareF();
( () => {
  document.getElementsByClassName('qr')[0].style.display = 'none';
})();



console.timeEnd();
console.log('%c The program successfully was loaded', 'font-size:25px; color:#ff0;');
