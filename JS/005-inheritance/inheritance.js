function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
}

function Camisa(nome,preco, cor){
    Produto.call(this,nome,preco)
    this.cor = cor
}

Camisa.prototype = Object.create(Produto.prototype);
Camisa.prototype.constructor = Camisa;

let camisa1 = new Camisa('Adidas Brand New T-shirt', 30, 'Red and White');
camisa1.aumento(10);
console.log(camisa1);

function Caneca(nome,preco,material,estoque){
    Produto.call(this,nome,preco)
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        configurable:false,
        get: function(){
            return estoque
        },
        set: function(quantidade){
            if(typeof(quantidade) !== 'number') return;
            estoque = quantidade
        }
    })

}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.desconto = function(porcentagem){
    this.preco = this.preco - (this.preco * (porcentagem/100))
}

let caneca1 = new Caneca('Caneca do Snoppy',40,'Argila',5)
caneca1.estoque = 10
caneca1.aumento(10)
caneca1.desconto(20)

console.log(caneca1)
console.log(caneca1.estoque)