'use strict'

const selectNumber = document.querySelector('.js_number');
const selectedBet = document.querySelector('.js_inputBet');
const btnPlay = document.querySelector('.js_btnPlay');
const message = document.querySelector('.js_message');
const balance = document.querySelector('.js_balance');
let saldo = 50;                      
       

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }



 const handleClickButton = (event) => {
    event.preventDefault()
    const randomNumber = getRandomNumber(6)
    console.log(randomNumber)
    if (parseInt(selectNumber.value) === randomNumber){
        message.innerHTML = "Has ganado el doble de lo apostado"
        saldo = saldo + parseFloat(selectedBet.value)*2
        balance.innerHTML = `Saldo: ${saldo}`
    }
    else {
        message.innerHTML = "Has perdido lo apostado"
        saldo = saldo - parseFloat(selectedBet.value)
        balance.innerHTML = `Saldo: ${saldo}`
        
    }
    if(saldo<selectedBet.input){
        message.innerHTML = "No tienes suficiente saldo para apostar"
    }
}

btnPlay.addEventListener('click', handleClickButton);




