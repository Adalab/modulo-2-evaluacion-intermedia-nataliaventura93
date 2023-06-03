'use strict'

let selectNumber = document.querySelector('.js_number');
let selectedBet = document.querySelector('.js_inputBet');
let btnPlay = document.querySelector('.js_btnPlay');
let message = document.querySelector('.js_message');
let balance = document.querySelector('.js_balance');
let saldo = 50;


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }



btnPlay.addEventListener('click', (event) => {
    event.preventDefault()
    let randomNumber = getRandomNumber(6)
    console.log(randomNumber)
    if (parseInt(selectNumber.value) === randomNumber){
        message.innerHTML = "Has ganado el doble de lo apostado"
        saldo = saldo + selectedBet.value*2
        balance.innerHTML = `Saldo: ${saldo}`
    }
    else {
        message.innerHTML = "Has perdido lo apostado"
        saldo = saldo - selectedBet.value
        balance.innerHTML = `Saldo: ${saldo}`
        
    }
    if(saldo<selectedBet.input){
        message.innerHTML = "No tienes suficiente saldo para apostar"
    }
});




