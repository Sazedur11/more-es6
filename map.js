const numbers = [4, 6, 8, 10];
const output = [];
///array function
const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result);
}
// console.log(output);

// const output2 = numbers.map(doubleIt);
// const output2 = numbers.map(number => number * 2);
const output2 = numbers.map(x => x * 2);
console.log(output2)

const squares = numbers.map(x => x * x);
console.log(squares)