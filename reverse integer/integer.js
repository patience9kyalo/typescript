function reverseNumber() {
    var numString = document.getElementById('numberInput').value;
    var num1 = parseInt(numString);
    var result = num1.toString().split('').reverse().join('');
    console.log(result);
    document.getElementById('result').innerText = result;
}
