function fibonacciSeries(num) {
    var num1 = 0;
    var num2 = 1;
    var sum;
    if (num === 1) {
        return num1;
    }
    else if (num === 2) {
        return num2;
    }
    else {
        for (var i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}
console.log("Fibonacci(100): " + fibonacciSeries(100));
