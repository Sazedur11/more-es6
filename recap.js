// 1. const and let

const myName = 'Md Sazedur Rahman';
let phone = 'Nokia is my running uses phone';
phone = 'iphone 12 mini pro max is my next target';

// 2. defoult parameture
// 3. spreed parameture or three dots (...)
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const bigestNumber = maxNumber();
console.log(bigestNumber)

// 4. string template
const aboutMe = `My name is ${myName}. I want to be a expert web developer.`;
console.log(aboutMe);

//5. arrow function
const square = x => x * x;
console.log(square(7))

// 5.1 arrow function
const add = (num1, num2) => num1 + num2;
console.log(add(15, 5))

