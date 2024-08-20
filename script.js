document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value.trim();
    const resultElement = document.getElementById('result');

    if (!inputText) {
        alert("Please input a value");
        return;
    }

    const originalText = inputText;

    // Process the input to remove non-alphanumeric characters and convert to lowercase
    const processedText = inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedText = processedText.split('').reverse().join('');

    // Check if the processed text is the same forwards and backwards
    if (processedText === reversedText) {
        resultElement.textContent = `${originalText} is a palindrome`;
    } else {
        resultElement.textContent = `${originalText} is not a palindrome`;
    }
});