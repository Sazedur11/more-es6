//arrow function
const addNumber = (name1, name2) => {
    const result = `${name1} ${name2}`;
    return result;
}
console.log(addNumber('Sazedur', 'Rahman'))


const square = x => x * x;
console.log(square(7))


const devided = x => x / 5;
console.log(devided(70))


// const add = (num1, num2) => {
//     const newNum = num1 + 2;
//     const newNum2 = num2 + 2;
//     const res = newNum * newNum2;
//     return res;
// }
const add = (num1, num2) => (num1 + 2) * (num2 + 2)

console.log(add(15, 5))