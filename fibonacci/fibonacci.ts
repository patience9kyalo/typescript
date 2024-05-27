function fibonacciSeries(num: number) {

    let num1: number = 0;
    let num2: number = 1;
    let sum: number;

    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i: number= 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}

console.log("Fibonacci(100): " + fibonacciSeries(100));
