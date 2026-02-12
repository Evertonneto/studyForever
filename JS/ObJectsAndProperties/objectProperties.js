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

const House = function (m2,color,age,value){
    this.m2 = m2,
    this.color = color,
    this.age = age,
    
    Object.defineProperty(this,'value',{
        enumerable:false,
        value:value,
        writable:false,
        configurable:true
    })

    Object.defineProperty(this,'value',{
        enumerable:true,
        value:value,
        writable:false,
        configurable:true
    })


}

const house1 = new House(60,'yellow',10,350000)
house1.value = 400000
delete house1.value
console.log(house1)

const Computer = function(cpu,ram,gpu,ssd){
    Object.defineProperties(this,{
        cpu:{
            enumerable:true,
            value:cpu,
            writable:false,
            configurable:false
        },
         ram:{
            enumerable:true,
            value:ram,
            writable:true,
            configurable:false
        },
        gpu:{
            enumerable:false,
            value:gpu,
            writable:false,
            configurable:false
        },
        ssd:{
            enumerable:false,
            value:ssd,
            writable:true,
            configurable:false
        }
    })

}

const acer = new Computer("i5 13ª Geração",16,"NVIDIA 4050 8gb 256bits",2)
console.log(acer)
acer.ram=24
acer.ssd=2
console.log(acer)