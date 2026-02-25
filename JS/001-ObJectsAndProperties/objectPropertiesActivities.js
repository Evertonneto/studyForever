//activity 1
const student = {
    name:"James",
    grades:[3,2,1],
    school:"South Caroline University"
}

console.log(student.name)
console.log(student['name'])
console.log(student.grades)
console.log(student['grades'])
console.log(student.school)
console.log(student['school'])

//activity 2

student.age = 20
console.log(student)

//activity 3
const Book = function(title,author){
    this.title = title,
    this.author = author

    Object.freeze(this)
}

const littlePrince = new Book('The little prince','Antoine de Saint-Exupéry')

littlePrince.title = "Little Prince"
console.log(littlePrince)

//activity 4

function createPhone(brand,model,price){
    return {
        brand,
        model,
        price
    }
}

const iPhone = createPhone('Apple','iPhone 13',2500)
console.log(iPhone)

//activity 5 e 6
function BankAccount(holder,balance){
    Object.defineProperties(this,{
        holder:{
            enumerable:true,
            writable:true,
            value:holder,
            configurable:false
        },
        balance:{
            enumerable:false,
            writable:false,
            value:balance,
            configurable:false
        },
    })

    Object.defineProperty(this,'getBalance',{
        enumerable:false,
        writable: false,
        value: ()=>{
            return this.balance
        },
        configurable:false
    })
}


const nubank = new BankAccount('Nubank','20000')
console.log(nubank)
console.log(nubank.getBalance())


// Activity 7

const Product = function (name,price,cost,stock) {
    Object.defineProperties(this,{
        name:{
            enumerable:true,
            value:name,
            writable:false
        },
        price:{
            enumerable:true,
            value:price,
            writable:true
        },
        cost:{
            enumerable:false,
            value:cost,
            writable:false
        },
        stock:{
            enumerable:false,
            value:stock,
            writable:true
        }
    })
}

const product1 = new Product('Shampoo',20,10,100)
product1.name = "Condicionador"
product1.price = 23
product1.cost = 12
product1.stock = 50
console.log(product1)
console.log(Object.keys(Product))


//activity 8 

function Employee(name,role,salary,ssn){
    Object.defineProperties(this,{
        name:{
            enumerable:true,
            value:name,
            writable:true,
            configurable:true
        },
        role:{
            enumerable:true,
            value:role,
            writable:true,
            configurable:true
        },
        salary:{
            enumerable:true,
            value:salary,
            writable:false,
            configurable:true
        },
        ssn:{
            enumerable:true,
            value:ssn,
            writable:false,
            configurable:false
        }
        
    })
}

const emp1 = new Employee('Alice','Developer',70000,'123-45-6789')
delete emp1.name
delete emp1.role
delete emp1.salary
delete emp1.ssn
console.log(Object.keys(emp1))
console.log(emp1)