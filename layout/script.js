function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Using Function constructor instead of eval for better security
        display.value = new Function('return ' + display.value)();
    } catch (e) {
        display.value = 'Error';
    }
}
