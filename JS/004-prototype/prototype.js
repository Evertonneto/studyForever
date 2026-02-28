let obj1 ={
    name: "Object 1"
}

let obj2 ={
    name:'object 2'
}

let obj3 = new Object()
obj3.name = 'object 3'

Object.setPrototypeOf(obj2, obj1)
Object.setPrototypeOf(obj3,obj2)

console.log(obj3)

function Produto(name, price) {
    this.name = name
    this.price = price
}

Produto.prototype.aumento = function(value) {
    this.price = this.price + this.price * (value / 100)
    console.log(this.price)
    return this.price
}

Produto.prototype.desconto = function(value) {
    this.price = this.price - this.price * (value / 100)
    return this.price
}

let produto1 = new Produto('Carro de controle remoto', 150)

produto1.aumento(100)
produto1.desconto(50)
produto1.desconto(50)
console.log(produto1.price)
