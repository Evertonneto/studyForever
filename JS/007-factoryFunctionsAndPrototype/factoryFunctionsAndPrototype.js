function Pessoa(nome, idade) {
    let pessoaPrototype = {
        falar(){
            console.log("A pessoa está falando")
        },
        comer(){
            console.log("A pessoa está comendo")
            
        },
        estudar(){
            console.log("A pessoa está estudando")

        }
    }

    return Object.create(pessoaPrototype,{
        nome:{value:nome},
        idade:{value:idade}
    })
}

let p1 = new Pessoa('Ton',23)
console.log(p1)
p1.falar()
p1.estudar()
p1.comer()