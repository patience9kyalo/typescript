function getVowels(string: string): number {
    let vowels = "aAeEiIoOuU";
    let vowelsCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (vowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}


function countAndDisplayVowels() {
    const inputString = (document.getElementById('inputString') as HTMLInputElement).value;
    const resultDiv = document.getElementById('result');
    const vowelsCount = getVowels(inputString);
    resultDiv.innerText = `The number of vowels in '${inputString}' is: ${vowelsCount}`;
}
