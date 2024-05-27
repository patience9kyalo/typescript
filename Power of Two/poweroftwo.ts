function powerTwo() {
    const numberInput = document.getElementById("numberInput") as HTMLInputElement;
    const resultElement = document.getElementById("result") as HTMLElement;

    const n = parseInt(numberInput.value);
    if (isNaN(n) || n <= 0) {
        resultElement.innerHTML = "Please enter a positive number.";
        return;
    }

    if (n === 1 || (n & (n - 1)) === 0) {
        resultElement.innerHTML = `Yes, ${n} is a power of 2.`;
    } else {
        resultElement.innerHTML = `No, ${n} is not a power of 2.`;
    }
}
