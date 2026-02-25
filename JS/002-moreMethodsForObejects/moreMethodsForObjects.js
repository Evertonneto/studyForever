const pessoa1 = {
    nome: 'Maria',
    idade: 30,
    cidade: 'São Paulo'
}

const pessoa2 = {...pessoa1}
pessoa2.nome = 'Paulo'
console.log(pessoa2)

const carro1 = {
    brand: 'Tesla',
    model: 'X',
    year: 2030
}

let carro2 = Object.assign({},carro1,{stock:true})
// Object.freeze(carro2)
carro2 = Object.assign(carro2, {isActive:true})
console.log(carro2)

console.log(Object.getOwnPropertyDescriptor(carro2,'brand'))