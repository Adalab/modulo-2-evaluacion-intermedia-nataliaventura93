'use strict';

let selectNumber = document.querySelector('.js_number');
let selectedBet = document.querySelector('.js_inputBet');
let btnPlay = document.querySelector('.js_btnPlay');
let btnReset = document.querySelector('.buttonReset');
let message = document.querySelector('.js_message');
let balance = document.querySelector('.js_balance');
let saldo = 50;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function setInnerText(component, text) {
  component.innerHTML = text;
}

btnPlay.addEventListener('click', (event) => {
  event.preventDefault();
  if (selectedBet.value > saldo) {
    setInnerText(message, 'No tienes suficiente saldo para apostar esa cantidad');
  } else {
    let randomNumber = getRandomNumber(6);
    console.log(randomNumber);
    if (parseInt(selectNumber.value) === randomNumber) {
      setInnerText(message, 'Has ganado el doble de lo apostado');
      saldo = saldo + selectedBet.value * 2;
      setInnerText(balance, `Saldo: ${saldo}€`);
    } else {
      setInnerText(message, 'Has perdido lo apostado');
      saldo = saldo - selectedBet.value;
      setInnerText(balance, `Saldo: ${saldo}€`);
    }
    if (saldo >= 200) {
        setInnerText(message, 'Enhorabuena! Has llegado al final del juego y has ganado!');
      btnPlay.classList.add('collapsed');
      btnReset.classList.remove('collapsed');
    } else if (saldo <= 0) {
        setInnerText(message, 'Oh! No tienes suficiente saldo para apostar... La máquina te ha ganado.');
      btnPlay.classList.add('collapsed');
      btnReset.classList.remove('collapsed');
    }
  }
});

btnReset.addEventListener('click', (event) => {
  event.preventDefault();
  saldo = 50;
  setInnerText(balance, `Saldo: ${saldo}€`);
  setInnerText(message, 'Vamos a jugar!');
  btnPlay.classList.remove('collapsed');
  btnReset.classList.add('collapsed');
  selectNumber.value = '0';
  selectedBet.value = '';
});
