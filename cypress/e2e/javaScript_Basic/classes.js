class Car {

    constructor(carName, model, year) {
        this.carName = carName;
        this.model = model;
        this.year = year;
    }

    carAge() {        // method(function)
        let date = new Date();   // comes from JS
        return date.getFullYear() - this.year;
    }

}

var myCar = new Car("Tesla", " S Model", "2020");
console.log(myCar.carName, myCar.model);
console.log(myCar.carName, " is ", myCar.carAge(), " years old");