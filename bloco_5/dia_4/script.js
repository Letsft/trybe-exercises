let bgcButton = document.querySelector('#bgc-button');
bgcButton.addEventListener('click', function () {
  let bgc = document.getElementById('bgc-input').value;
  textToPlay.style.backgroundColor = bgc;
  localStorage.setItem('background-color', bgc);
});
let TexCButton = document.querySelector('#texC-button');
TexCButton.addEventListener('click', function () {
  let texC = document.getElementById('texC-input').value;
  textToPlay.style.color = texC;
  localStorage.setItem('text-color', texC);
});
let fontSButton = document.querySelector('#fontS-button');
fontSButton.addEventListener('click', function () {
  let fontS = document.getElementById('fontS-input').value;
  textToPlay.style.fontSize = fontS + 'px';
  localStorage.setItem('font-size', fontS);
});
let sblButton = document.querySelector('#sbl-button');
sblButton.addEventListener('click', function () {
  let sbl = document.getElementById('sbl-input').value;
  textToPlay.style.lineHeight = sbl + 'px';
  localStorage.setItem('line-height', sbl);
});
let fontFButton = document.querySelector('#fontF-button');
fontFButton.addEventListener('click', function () {
  let fontF = document.getElementById('fontF-input').value;
  textToPlay.style.fontFamily = fontF;
  localStorage.setItem('font-family', fontF);
});
if (localStorage.length != 0) {
  let oldBackgroundColor = localStorage.getItem('background-color');
  textToPlay.style.backgroundColor = oldBackgroundColor;

  let textColor = localStorage.getItem('text-color');
  textToPlay.style.color = textColor;

  let oldFontSize = localStorage.getItem('font-size');
  textToPlay.style.fontSize = oldFontSize + 'px';

  let oldLineHeight = localStorage.getItem('line-height');
  textToPlay.style.lineHeight = oldLineHeight + 'px';

  let oldFontFamily = localStorage.getItem('font-family');
  textToPlay.style.fontFamily = oldFontFamily;
}
