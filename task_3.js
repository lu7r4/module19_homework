//Задание 3.

//Напишите функцию, которая создает пустой объект, но без прототипа.

function withoutPrototype() {
    return Object.create(null);
}

let consoleLogFunction = withoutPrototype();
console.log(consoleLogFunction);

