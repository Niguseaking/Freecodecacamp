// Explanation
// HTML Structure: The HTML includes an input field, two buttons, and a results div to display the output. Each element has a specific ID for easy access in JavaScript.

// CSS Styling: Basic styling is applied to give the page a clean look, including styling for buttons and the results display area.

// JavaScript Functionality:

// The isValidUSPhoneNumber function uses regular expressions to match valid US phone number patterns. The valid patterns include formats with or without the country code 1, hyphens, spaces, or parentheses.
// The click event listeners are added to the check-btn and clear-btn to handle their respective actions.
// When the check-btn is clicked, the input is validated, and the result is displayed in the results-div. If the input is empty, an alert is shown to prompt the user to enter a number.
// When the clear-btn is clicked, the input and result are cleared.
// This code covers all the user stories specified and provides a basic yet functional phone number validation tool with a simple user interface.
//     const checkBtn = document.getElementById('check-btn');

    const clearBtn = document.getElementById('clear-btn');
    const userInput = document.getElementById('user-input');
    const resultsDiv = document.getElementById('results-div');

    function isValidUSPhoneNumber(phoneNumber) {
        const validPatterns = [
            /^1? ?\d{3}[- ]?\d{3}[- ]?\d{4}$/,    // 1 555-555-5555, 555-555-5555, 555 555 5555
            /^1? ?\(\d{3}\) ?\d{3}[- ]?\d{4}$/,   // 1 (555) 555-5555, (555) 555-5555
            /^\d{10}$/                           // 5555555555
        ];

        return validPatterns.some(pattern => pattern.test(phoneNumber));
    }

    checkBtn.addEventListener('click', () => {
        const phoneNumber = userInput.value.trim();

        if (!phoneNumber) {
            alert('Please provide a phone number');
            return;
        }

        const isValid = isValidUSPhoneNumber(phoneNumber);
        const resultText = isValid ? `Valid US number: ${phoneNumber}` : `Invalid US number: ${phoneNumber}`;
        resultsDiv.textContent = resultText;
        resultsDiv.style.backgroundColor = isValid ? '#d4edda' : '#f8d7da';
        resultsDiv.style.color = isValid ? '#155724' : '#721c24';
    });

    clearBtn.addEventListener('click', () => {
        resultsDiv.textContent = '';
        userInput.value = '';
    });
