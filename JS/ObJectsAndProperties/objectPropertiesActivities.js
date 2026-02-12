//activity 1
const student = {
    name:"James",
    grades:[3,2,1],
    school:"South Caroline University"
}

console.log(student.name)
console.log(student.grades)
console.log(student.school)

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

//activity 5
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

    this.getBalance = () => {
        return this.balance
    }
}


const nubank = new BankAccount('Nubank','20000')
console.log(nubank)
console.log(nubank.getBalance())

