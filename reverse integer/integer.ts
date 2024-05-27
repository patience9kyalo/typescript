function reverseNumber() {
    const numString: string = (document.getElementById('numberInput') as HTMLInputElement).value;
    const num1: number = parseInt(numString);
    const result: string = num1.toString().split('').reverse().join('');
    console.log(result);
    (document.getElementById('result') as HTMLElement).innerText = result;
}
