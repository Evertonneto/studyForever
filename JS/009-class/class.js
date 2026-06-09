class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    talk(){
        console.log(`Hello, my name is ${this.nome} and i am ${this.idade} years old.`)
    }
}

const p1 = new Pessoa('Everton',22)

console.log(p1)
p1.talk()

let _password = Symbol('Password')
class User{
    constructor(email){
        this.email = email;
        this[_password] = 'Senha123'
    }
    get password(){
        return this[_password]
    }

    set password(value){
        if(typeof value !== 'string' || value.length < 6){
            console.log('Password must be a string with at least 6 characters.')
            return
        }
        this[_password]= value
    }
}

let user1 = new User('Ton')
user1.password = '123456'
console.log(user1.password)
