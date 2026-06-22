let A = 2;
let B = 5;
console.log("Q1:", A + B);

A = 5;
B = 3;
console.log("Q2:", A < 10 && A > B);

A = 12;
B = 20;
console.log("Q3:", A % 10 === 0 || B % 10 === 0);

let N = 4567;
console.log("Q4:", Math.floor(N / 1000));

N = 4567;
console.log("Q5:", N % 10);

A = 2;
B = 9;
console.log("Q6:", B % A);

A = 2;
B = 5;
console.log("Q7:", A * B);

A = 50;
B = 80;
let C = 100;

let total = A + B + C;
let average = total / 3;

console.log("Q8 Total:", total);
console.log("Q8 Average:", average.toFixed(2));