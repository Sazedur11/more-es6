const name = 'sazedur';
let age = 20;
age = 25;
const details = { profession: 'web developer', address: 'Dhaka' }
// console.log(name, age)

// template string ডাইনামিক and ডাইনামিকভাবে অবজেক্ট use
const about = `I am a ${name}. I am ${age} years old. I live in ${details.address}. I would like to hard work because I want to be an expert ${details.profession}.`;
// console.log(about)

// template string with mathemetic opration
const friend = `His name Karim. He is ${age + 4} years old. He is an expert web deisgner`;
// console.log(friend)



/* defoult paramiture */
function devided(num1, num2 = 2) {
    const result = num1 / num2;
    return result;
}

// console.log(devided(12, 4))

/* arrow function */
// const addName = (name1, name2) => {
//     const result = `${name1} ${name2}`;
//     return result;
// }
const addName = (name1, name2) => `${name1} ${name2}`
// console.log(addName('Sazedur', 'Rahman'))

const devide = x => x / 5;
// console.log(devide(70))

// 2 ta paramiture er sathe 2 jog kore sei jogfol er gun
const add = (num1, num2) => (num1 + 2) * (num2 + 2)

// console.log(add(15, 5))

// 3 paramiture owala arrow function
const res = (x, y, z) => x * y * z;
// console.log(res(5, 2, 3))


// spread operator (...) => ata array copy korte us ekora hoi

const vashaShahid = ['Salam', 'Rafiq', 'Borkat', 'Shafiq', 'Jabbar'];
console.log(...vashaShahid)












