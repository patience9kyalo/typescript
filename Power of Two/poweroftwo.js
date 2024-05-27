function powerTwo() {
    var numberInput = document.getElementById("numberInput");
    var resultElement = document.getElementById("result");
    var n = parseInt(numberInput.value);
    if (isNaN(n) || n <= 0) {
        resultElement.innerHTML = "Please enter a positive number.";
        return;
    }
    if (n === 1 || (n & (n - 1)) === 0) {
        resultElement.innerHTML = "Yes, ".concat(n, " is a power of 2.");
    }
    else {
        resultElement.innerHTML = "No, ".concat(n, " is not a power of 2.");
    }
}
