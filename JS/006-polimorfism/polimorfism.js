function Conta(agencia, numero, saldo){
    this.agencia = agencia;
    this.numero = numero;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log('Valor Insuficiente: ' + this.saldo)
        return;
    } 
    this.saldo -= valor
    console.log('Saldo Atual: '+ this.saldo)
}

let c1 = new Conta(1234,3, 200)
c1.sacar(190)

function CC(agencia,numero,saldo,limite){
    Conta.call(this,agencia,numero,saldo)
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC

CC.prototype.sacar = function(valor){
    if(valor > (this.limite + this.saldo)){
        console.log("Limite Insuficiente(Saldo+Limite): " + (this.saldo + this.limite))
        return;
    }
    this.saldo -= valor
    console.log('Saldo Atual: ' + this.saldo)
}

let c2 = new CC(4321,1,300,100)
c2.sacar(401)

function CP(agencia,numero,saldo){
    Conta.call(this,agencia,numero,saldo)
   
}

CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP

let c3 = new CP(12333,1,200)
c3.sacar(201)
