function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        //console.log('Got 3 digit & calling again', pin);
        return getPin();
    }
}

//Pin Generation
function generatePin(){
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
}

// keypad functionality
document.getElementById('key-pad').addEventListener('click', function(event){
    const calcInput = document.getElementById('calc-input');
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number == "C"){
            calcInput.value = "";
        }
    }
    else{
        const prevNumber = calcInput.value;
        const newNumber = prevNumber + number;
        calcInput.value = newNumber;
    }

});

//Verify or match the pin
function verifyPin(){
    const pinInput = document.getElementById('display-pin').value;
    const calcInput = document.getElementById('calc-input'). value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if(pinInput == calcInput){
        successMessage.style.display = "block";
        failError.style.display = "none";
    }
    else{
        failError.style.display = "block";
        successMessage.style.display = "none";
    }
}