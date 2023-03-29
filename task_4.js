// Задание 4.

//Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

//Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 

//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.


function Appliances() {
    this.wH = 220, // ватт-час
    this.time = 360 // использование 12 часов в день
};
  
function Energy(name, watt, color) {
    this.name = name,
    this.watt = watt,
    this.color = color
}

Energy.prototype = new Appliances()

Appliances.prototype.getEnergy = function () {
    console.log("monthly energy use " + Math.round(this.watt / 1000 * this.time) + " kWh")
}

const tv = new Energy('tv', 300, 'grey')
const lamp = new Energy( 'lamp', 60, 'red')

console.log(tv)
console.log(lamp)

tv.getEnergy()
lamp.getEnergy()