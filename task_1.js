//Задание 1.

//Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.


const pet = {
    kind: "Cat",
    breed: "Oriental",
    gender: "Female",
    name: "Sunny",
    age: 2
}

function keyOutput (object){
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            console.log(key);
        }
    }
}

keyOutput(pet);