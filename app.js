const inputWeight = document.getElementById('weight');
const inputHeight = document.getElementById('height');
const divResult = document.getElementById('result');

function calculateBMI() {
    const weight = parseFloat(inputWeight.value);
    const height = parseFloat(inputHeight.value);

    if (weight == 0 && height == 0) {
        divResult.innerText = 'Пожалуйста, введите корректные значения.';
        return;
    }

    const bmi = (weight / (height * height / 10000).toFixed(2));

    let message;
    if (bmi < 16) {
        message = "Выраженный дефицит массы тела";
    } else if (bmi < 18.5) {
        message = "Недостаточная (дефицит) масса тела";
    } else if (bmi < 25) {
        message = "Норма";
    } else if (bmi < 30) {
        message = "Избыточная масса тела (предожирение)";
    } else if (bmi < 35) {
        message = "Ожирение первой степени";
    } else if (bmi < 40) {
        message = "Ожирение второй степени";
    } else {
        message = "Ожирение третьей степени (морбидное)";
    }

    divResult.innerText = `Ваш ИМТ: ${bmi.toFixed(2)}: ${message}`;

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