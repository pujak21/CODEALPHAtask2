function clearDisplay() {
    document.calc.display.value = '';
}

function deleteLastChar() {
    document.calc.display.value = document.calc.display.value.slice(0, -1);
}

function appendValue(value) {
    document.calc.display.value += value;
}

function calculate() {
    try {
        document.calc.display.value = eval(document.calc.display.value);
    } catch (e) {
        alert('Invalid Expression');
    }
}
