function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

function getPin() {
    const getFinalPin = generatePin();

    const getPinString = getFinalPin + '';

    if (getPinString.length === 4) {
        return getFinalPin;
    }
    else {
        console.log(getFinalPin);
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    //console.log(pin);
    const outputField = document.getElementById('output-field');
    outputField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;

    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;


    if (isNaN(number)) {
        if (number == 'C') {
            typedNumberField.value = '';
        }
        else if (number == '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        const newtypedNumber = previousTypedNumber + number;
        typedNumberField.value = newtypedNumber;
    }
})

document.getElementById('typed-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('output-field');
    const currentPin = displayPinField.value;

    const inputPinField = document.getElementById('typed-number');
    const inputPin = inputPinField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailMessage = document.getElementById('pin-fail');
    if(currentPin == inputPin){
        pinSuccessMessage.style.display = 'block';
        pinFailMessage.style.display = 'none';
    }
    else{ 
        pinFailMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})
