const inputWeight = document.getElementById('weight');
const inputHeight = document.getElementById('height');
const divResult = document.getElementById('result');

function calculateBMI() {
    const weight = parseFloat(inputWeight.value);
    const height = parseFloat(inputHeight.value);

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height / 10000);
        divResult.innerText = `Ваш ИМТ: ${bmi.toFixed(2)}`;
    } else {
        divResult.innerText = 'Пожалуйста, введите корректные значения.';
    }

    divResult.style = "display: block;"
}

if ('serviceWorker' in navigator) { 
    navigator.serviceWorker.register('sw.js') 
        .then(registration => {
            console.log('SW registred', registration)
        })

        .catch(error => {
            console.log('SW failed', error)
        })
}