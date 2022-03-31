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

