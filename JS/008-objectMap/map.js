const pessoas = [
    {id: 3, nome: 'João'},
    {id:2, nome: 'Maria'},
    {id: 1, nome: 'Pedro'},
]

// const novasPessoas = {};
// for (const {id, nome} of pessoas){
//     novasPessoas[`${id}`] = {id:id,nome:nome}
// }

// console.log(novasPessoas)

const novasPessoas = new Map()

for(const pessoa of pessoas){
    let {id,nome} = pessoa
    novasPessoas.set(id, {id,nome})
}


console.log(novasPessoas)
console.log(novasPessoas.delete(2))
console.log(novasPessoas)
