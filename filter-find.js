const numbers = [2, 15, 53, 48, 66, 92, 20, 16];
const bigNumber = numbers.filter(number => number > 20);
const smallNumber = numbers.filter(number => number < 20);
// console.log(smallNumber)
// console.log(bigNumber)


const employee = [
    { name: 'rahim', id: 10, dress: 'black', income: 20000 },
    { name: 'karim', id: 42, dress: 'white', income: 2000 },
    { name: 'salam', id: 52, dress: 'pink', income: 1500 },
    { name: 'kashem', id: 12, dress: 'white', income: 13500 }
]
// const bigSalary = employee.filter(employ => employ.income > 3000);
const dressColor = employee.filter(employ => employ.dress == 'white');
const dressColor2 = employee.find(employ => employ.dress == 'pink');
console.log(dressColor2)