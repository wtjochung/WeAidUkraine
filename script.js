var walkieTalkieButton = document.querySelector('.walkie-talkie');

walkieTalkieButton.addEventListener('mousedown', buttonDown, false);
walkieTalkieButton.addEventListener('mouseup', buttonUp, false);

function buttonDown() {
  walkieTalkieButton.classList.add('down-state');
}

function buttonUp() {
  walkieTalkieButton.classList.remove('down-state');
}
