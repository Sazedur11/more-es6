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
const addNumber = (name1, name2) => {
    const result = `${name1} ${name2}`;
    return result;
}
console.log(addNumber('Sazedur', 'Rahman'))












