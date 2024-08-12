// Function to append a value (number or operator) to the display
function appendToDisplay(value) {
    // Retrieve the display element from the DOM using its ID 'display'
    const display = document.getElementById('display');
    
    // Append the provided value to the current content of the display
    // This allows users to build their mathematical expression incrementally
    display.value += value;
}

// Function to clear the content of the display
function clearDisplay() {
    // Get the display element by its ID 'display'
    // This will be used to reset the display to an empty state
    document.getElementById('display').value = '';
}

// Function to delete the last character from the display content
function deleteLast() {
    // Retrieve the display element from the DOM
    const display = document.getElementById('display');
    
    // Use the slice method to remove the last character from the display's current value
    // slice(0, -1) returns a new string that excludes the last character
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result of the expression currently in the display
function calculateResult() {
    // Get the display element to access its value (the mathematical expression)
    const display = document.getElementById('display');
    
    try {
        // Create a new function using the Function constructor
        // This allows us to safely evaluate the expression in the display
        // 'return ' + display.value constructs a function that returns the evaluated result
        display.value = new Function('return ' + display.value)();
    } catch (e) {
        // If an error occurs during the evaluation (e.g., syntax error, division by zero)
        // Catch the error and set the display value to 'Error' to inform the user
        display.value = 'Error';
    }
}
