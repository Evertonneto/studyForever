// ATIVIDADES DE REVISÃO - PROTOTYPE

// ============================================
// ATIVIDADE 1: Criar uma cadeia de protótipos
// ============================================
// Crie três objetos: animal, cachorro, e meuCachorro
// - animal deve ter uma propriedade "vivo" com valor true
// - cachorro deve herdar de animal e ter uma propriedade "especie" com valor "Canis lupus"
// - meuCachorro deve herdar de cachorro e ter uma propriedade "nome" com valor "Rex"
// Use Object.setPrototypeOf para criar a cadeia de herança
// Teste acessando meuCachorro.vivo (deve retornar true)

// Escreva seu código aqui:

let animal = {
    vivo: true
}

let cachorro = {
    especie: 'Canis lupus'
}

Object.setPrototypeOf(cachorro,animal)

console.log(cachorro.vivo)

let meuCachorro = {
    nome: "Rex"
}

Object.setPrototypeOf(meuCachorro, cachorro)
 
console.log(meuCachorro.vivo)
console.log(meuCachorro.especie)
console.log(meuCachorro.nome)

// ============================================
// ATIVIDADE 2: Função construtora com métodos no prototype
// ============================================
// Crie uma função construtora chamada "Livro" que receba título e autor
// Adicione ao prototype de Livro os seguintes métodos:
// - info(): retorna uma string no formato "Título: [título], Autor: [autor]"
// - emprestar(): define uma propriedade "emprestado" como true e imprime "Livro emprestado"
// - devolver(): define "emprestado" como false e imprime "Livro devolvido"
// Crie duas instâncias de Livro e teste os métodos

// Escreva seu código aqui:


function Livro(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;

}

Livro.prototype.info = function(){
    return `Título: ${this.titulo}, Autor: ${this.autor}`
}

Livro.prototype.emprestar = function(){
    this.emprestado = true;
    return "Livro emprestado"
}

Livro.prototype.devolver = function(){
    this.emprestado = false;
    return "Livro devolvido"
}

let livro1 = new Livro('Educar, dar limites e amar','Paulo Vieira')
let livro2 = new Livro('Estudo das religiões para quem tem pressa', 'José')

console.log(livro1.emprestar())
console.log(livro1)
console.log(livro1.devolver())
console.log(livro1)




// ============================================
// ATIVIDADE 3: Sistema de descontos progressivos
// ============================================
// Crie uma função construtora "Smartphone" que receba marca, modelo e preço
// Adicione ao prototype os seguintes métodos:
// - aplicarDesconto(percentual): reduz o preço pelo percentual informado
// - aplicarAcrescimo(percentual): aumenta o preço pelo percentual informado
// - exibirPreco(): imprime o preço atual formatado com 2 casas decimais
// Crie um smartphone, aplique 10% de desconto, depois 20% de acréscimo, 
// e por fim mais 15% de desconto. Exiba o preço final.

// Escreva seu código aqui:

function SmartPhone(marca,modelo,preço){
    this.marca = marca;
    this.modelo = modelo;
    this.preco = preço;
}

SmartPhone.prototype.aplicarDesconto = function(percentual){
    this.preco = this.preco - (this.preco*(percentual/100))
}

SmartPhone.prototype.aplicarAcrescimo = function(percentual){
    this.preco = this.preco + (this.preco*(percentual/100))
}

SmartPhone.prototype.exibirPreco = function(){
    console.log(this.preco.toFixed(2))
}

let iphone = new SmartPhone('Apple','iPhone 17',10000)

iphone.aplicarDesconto(10)
iphone.aplicarAcrescimo(20)
iphone.aplicarDesconto(15)
iphone.aplicarDesconto(12,5)

iphone.exibirPreco()


