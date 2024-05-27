function getVowels(string) {
    var vowels = "aAeEiIoOuU";
    var vowelsCount = 0;
    for (var i = 0; i < string.length; i++) {
        if (vowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
function countAndDisplayVowels() {
    var inputString = document.getElementById('inputString').value;
    var resultDiv = document.getElementById('result');
    var vowelsCount = getVowels(inputString);
    resultDiv.innerText = "The number of vowels in '".concat(inputString, "' is: ").concat(vowelsCount);
}
