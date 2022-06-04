const canvas = document.querySelector('.canvas');
const modes = document.querySelectorAll('.buttons button');
const resizer = document.getElementById('resizer');

let currentmode = '';

function setSize(sizeVal = 16) {
  canvas.setAttribute(
    'style',
    `grid-template-columns: repeat(${sizeVal}, 2fr); grid-template-rows: repeat(${sizeVal}, 2fr);`
  );
  eraseColors();

  for (let index = 0; index < sizeVal * sizeVal; index++) {
    let square = document.createElement('div');

    canvas.appendChild(square).classList.add('square');
  }
}

function resizeSlider() {
  resizer.addEventListener('input', (e) => {
    clearChild();
    let val = document.getElementById('resizer').value;
    document.querySelector('.resizer h1').textContent = `${val}px x ${val}px`;
    setSize(val);
    paintSquares();
  });
}

function chooseColor() {
  modes.forEach((element) => {
    element.addEventListener('click', function () {
      currentmode = element.value;
      if (element.value === 'blackmode') {
        paintSquares(currentmode);
        showActiveMode(currentmode);
      } else if (element.value === 'aestheticmode') {
        paintSquares(currentmode);
        showActiveMode(currentmode);
      } else if (element.value === 'rgbmode') {
        paintSquares(currentmode);
        showActiveMode(currentmode);
      }

      console.log(currentmode);
    });
  });
}

function paintSquares(mode = 'blackmode') {
  const squares = document.querySelectorAll('.square');
  squares.forEach((element) => {
    element.addEventListener('mouseover', (e) => {
      if (mode === 'blackmode' || currentmode === 'blackmode') {
        e.target.style.backgroundColor = 'black';
      } else if (mode === 'aestheticmode' || currentmode === 'aestheticmode') {
        const aestheticColors = [
          '#F8B195',
          '#F67280',
          '#C06C84',
          '#6C5B7B',
          '#355C7D',
        ];
        const randomColor = Math.floor(Math.random() * aestheticColors.length);
        e.target.style.backgroundColor = aestheticColors[randomColor];
      } else if (mode === 'rgbmode' || currentmode === 'rgbmode') {
        const rgbColors = [
          'red',
          '#FF7F00',
          '#FFFF00',
          '#00FF00',
          '#0000FF',
          '#4B0082',
          '#9400D3',
        ];
        const randomColor = Math.floor(Math.random() * rgbColors.length);
        e.target.style.backgroundColor = rgbColors[randomColor];
      }
    });
  });
}

function eraseColors() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((element) => {
    element.style.backgroundColor = 'white';
  });
}

function clearChild() {
  canvas.innerHTML = '';
}

function showActiveMode(chosenmode) {
  modes.forEach((mode) => {
    mode.classList = '';
    let activemode = document.getElementById(chosenmode);
    activemode.classList.add('active');
  });
}

function startApp() {
  chooseColor();
  resizeSlider();
  setSize();
  paintSquares();
}

startApp();
