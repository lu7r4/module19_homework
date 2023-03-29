//Задание 2.

//Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function keyVerification (obj, propName) {
    return propName in obj;
}

const petAbout = {
    kind: "Cat",
    breed: "Oriental",
    gender: "Female",
    name: "Sunny",
    age: 2
}

console.log(keyVerification(petAbout, 'kind'));
console.log(keyVerification(petAbout, 'breed'));
console.log(keyVerification(petAbout, 'gender'));
console.log(keyVerification(petAbout, 'name'));
console.log(keyVerification(petAbout, 'age'));
console.log(keyVerification(petAbout, 'coatСolour'));
