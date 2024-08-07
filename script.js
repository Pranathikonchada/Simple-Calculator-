// script.js
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let displayValue = '0';

    function updateDisplay() {
        display.textContent = displayValue;
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            // All Clear (AC) button functionality
            if (this.id === 'all-clear') {
                displayValue = '0';
                updateDisplay();
                return;
            }

            // Clear (C) button functionality for single digit clear
            if (this.id === 'clear') {
                if (displayValue.length > 1) {
                    displayValue = displayValue.slice(0, -1);
                } else {
                    displayValue = '0';
                }
                updateDisplay();
                return;
            }

            // Equals button functionality
            if (this.id === 'equals') {
                try {
                    displayValue = String(eval(displayValue));
                } catch (error) {
                    displayValue = 'Error';
                }
                updateDisplay();
                return;
            }

            // Append new value
            if (displayValue === '0') {
                displayValue = value;
            } else {
                displayValue += value;
            }

            updateDisplay();
        });
    });

    updateDisplay();
});