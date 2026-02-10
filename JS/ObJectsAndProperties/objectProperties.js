const person = {
    name: "John",
    age: 30,
    city: "New York"
}

console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30

person.country = "USA"; // Adding a new property
console.log(person.country); // Output: USA

const Car = function (make, model) {
    this.make = make;
    this.model = model;
    Object.freeze(this)
}

const car1 = new Car('Tesla','x')
car1.year = 2020
console.log(car1)

function motocycle(make,model,year){
    return {
        make,
        model,
        year
    }
}

const moto1 = motocycle('honda','sxj','2019')
console.log(moto1)