// Задание 5.

// Перепишите консольное приложение из предыдущего юнита на классы.

class EnergyApp {
    constructor() {
        this.wH = 220;
        this.time = 360;
    }
}

class AppliancesEnergy extends EnergyApp {
    constructor(name, watt, color, time) {
        super(time);
        this.name = name;
        this.watt = watt;
        this.color = color;
    }

    getEnergyApp(){
        console.log("monthly energy use " + Math.round(this.watt / 1000 * this.time) + " kWh") 
    }
}

const television = new AppliancesEnergy('tv', 300, 'grey')
const light = new AppliancesEnergy('lamp', 60, 'red')

console.log(television)
console.log(light)


television.getEnergyApp()
light.getEnergyApp()
