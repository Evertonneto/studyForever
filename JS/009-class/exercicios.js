/* === Questão 1: Pessoa básica ===
 - Crie a classe Pessoa com nome e idade e um método falar() que imprime uma apresentação.
 - Instancie duas pessoas e chame falar().
 
 - Critérios de aceite:
	 - Existe a classe `Pessoa` com construtor `(nome, idade)`;
	 - Possui o método `falar()` que faz `console.log` incluindo `nome` e `idade`;
	 - Há ao menos duas instâncias demonstradas chamando `falar()` sem erros.
*/

class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    falar(){
        console.log(`Nome:${this.nome}, idade:${this.idade}`)
    }
}

let p1 = new Pessoa('Ton',22)
p1.falar()
let p2 = new Pessoa('João',21)
p2.falar()

/* === Questão 2: Herança - Aluno ===
 - Crie a classe Aluno que estende Pessoa e adiciona curso e notas (array).
 - Métodos: adicionarNota(n), media() e estaAprovado(minima = 6).

 - Critérios de aceite:
	 - `Aluno` estende `Pessoa` e chama `super` no construtor;
	 - Possui propriedades `curso` (string) e `notas` (array);
	 - `adicionarNota(n)` adiciona um número a `notas`;
	 - `media()` retorna a média numérica das notas (0 quando sem notas);
	 - `estaAprovado(minima)` retorna booleano correto com valor padrão `6`.
*/
class Aluno extends Pessoa{
	constructor(nome,idade,curso,notas = []){
		super(nome,idade)
		this.curso = curso;
		if(Array.isArray(notas)){
			this.notas = notas
		}else{
			this.notas = []
		}
	}

	adicionarNota(n){
		if(typeof n === 'number' && !isNaN(n) && n >= 0 && n <= 10){
			this.notas.push(n)
			console.log('Nota adicionado: '+ n)
		}else{
			console.log('A nota deve ser um valor numérico entre 0 e 10.')
		}
	}

	media(){
		let somaDasNotas = 0
		if(this.notas.length === 0){
			return 0
		}
		for(let i = 0; i < this.notas.length; i++){
		  if(typeof this.notas[i] === "number"){
			  somaDasNotas += this.notas[i]
		  }
		}
		let media = somaDasNotas/this.notas.length
		return media
	}

	estaAprovado(minima = 6){
		if(this.media() >= minima){
			console.log('Aluno Aprovado!')
			return true
		}else{
			console.log("Aluno Reprovado")
			return false
		}
	}
}

let alunoJ = new Aluno('João',22,'Matemática',[6])
alunoJ.adicionarNota(8)
console.log(alunoJ.media())
console.log(alunoJ.estaAprovado())
console.log(alunoJ)

/* === Questão 3: Encapsulamento - Usuario com senha privada ===
 - Crie a classe Usuario que recebe email e mantém uma senha privada (use Symbol ou # privado).
 - Implemente get password() e set password(value) com validação (mínimo 6 caracteres).

 - Critérios de aceite:
	 - `Usuario` armazena a senha de forma privada (Symbol ou `#` privado);
	 - `get password()` retorna o valor atual da senha;
	 - `set password(value)` valida que `value` é `string` com >= 6 caracteres e atualiza;
	 - Tentativas inválidas não alteram a senha e não lançam exceção (podem logar mensagem).
*/
const _password = Symbol('Password')
class Usuario1{
	constructor(email){
		this.email = email
		this[_password] = 'senhapadrao123'
	}

	get password(){
		return this[_password]
	}

	set password(value){
		if(typeof value === 'string' && value.length >= 6){
			this[_password] = value
			return
		}
		console.log('Senha não aceita. Por favor digite uma senha de pelo menos 6 digitos!')
	}
}

let user1 = new Usuario1('jose@gmail.com')
user1.password = 'Tony123'
console.log(user1.password)

class Usuario2{
	#password;

	constructor(email){
		this.email = email
		this.#password = 'senhapadrao123'
	}

	get password(){
		return this.#password
	}

	set password(value){
		if(typeof value === 'string' && value.length >= 6){
			this.#password = value
			return
		}
		console.log('Senha não aceita. Por favor digite uma senha de pelo menos 6 digitos!')
	}
}

let user2 = new Usuario2('ton@gmail.com')
user2.password = 'ddd123'
console.log(user2.password)

/* === Questão 4: Métodos estáticos e contador ===
 - Crie a classe Conta com titular e saldo.
 - Adicione um método estático transferir(contaOrigem, contaDestino, valor) que realiza a transferência se houver saldo.
 - Mantenha um contador estático do número de contas criadas.

 - Critérios de aceite:
	 - `Conta` tem propriedades `titular` e `saldo` (número);
	 - Construtor incrementa um contador estático (ex: `Conta.contador`);
	 - `depositar(valor)` e `sacar(valor)` funcionam corretamente (saldo ajustado);
	 - `Conta.transferir(origem, destino, valor)` realiza a transferência somente se `origem.saldo >= valor` e retorna booleano indicando sucesso/fracasso.
*/

class Conta{
	static contador = 0;

	constructor(titular,saldo){
		if(typeof titular ==='string' && typeof saldo === 'number' && saldo >= 0){
			this.titular = titular;
			this.saldo = saldo;
			Conta.contador += 1
		}else{
			console.log('Erro ao criar a conta!')
		}

	}

	depositar(value){
		if(typeof value === 'number' && value > 0){
			this.saldo += value
			return true
		}
		console.log('Erro ao depositar.')
		return false
	}

	sacar(value){
		if(value <= this.saldo && value > 0){
			this.saldo -= value
			console.log(`Saque de ${value} efetuado, saldo atual: ${this.saldo}`)
			return true
		}
		console.log('Erro ao sacar!')
		return false
	}

	static transferir(origem,destino,valor){
		if(origem instanceof Conta && destino instanceof Conta && typeof valor === 'number' && valor > 0){
				if(origem.saldo >= valor){
					if(origem.sacar(valor) === true && destino.depositar(valor) ===true){
						return true
					}
				}else{
					return false
				}


			}
		return false

	}
}

let contaTon = new Conta('Ton',200)
let contaJoao = new Conta('Joao',0)
Conta.transferir(contaTon,contaJoao,200)
console.log(contaJoao)
console.log(contaTon)
console.log(Conta.contador)


/* === Questão 5: Polimorfismo - Veículos ===
 - Crie Veiculo com marca e velocidadeMax e método info().
 - Crie Carro e Moto que sobrescrevem info() acrescentando características (ex: portas, carenagem).

 - Critérios de aceite:
	 - `Veiculo` implementa `marca` e `velocidadeMax` e método `info()` retornando string;
	 - `Carro` e `Moto` estendem `Veiculo` e sobrescrevem `info()` incluindo propriedades extras (ex: `portas`, `temCarenagem`);
	 - Chamadas a `info()` nas subclasses retornam strings que combinam `super.info()` com detalhes da subclasse.
*/

class Veiculo{
	constructor(marca,velocidadeMax){
		this.marca = marca;
		this.velocidadeMax = velocidadeMax;
	}

	info(){
		return `Marca:${this.marca} | Velocidade: ${this.velocidadeMax}`
	}
}

class Carro extends Veiculo{
	constructor(marca,velocidadeMax,portas,turbo){
		super(marca,velocidadeMax)
		this.portas = portas;
		this.turbo = turbo ;
	}

	info(){
		return `${super.info()} | Portas: ${this.portas} | Turbo: ${this.turbo}`
	}
}

let car1 = new Carro('Volkswagen',120,5,true)
console.log(car1)
console.log(car1.info())

class Moto extends Veiculo{
	constructor(marca,velocidadeMax,temCarenagem){
		super(marca,velocidadeMax)
		this.temCarenagem = temCarenagem;
	}

	info(){
		return `${super.info()} | Tem caneragem: ${this.temCarenagem}`
	}
}

let moto1 = new Moto('Honda',110,true)
console.log(moto1.info())

/* === Questão 6: Desafio extra (opcional) ===
 - Implemente Repositorio que guarda objetos em memória e oferece salvar(obj) e buscarTodos().

 - Critérios de aceite:
	 - `Repositorio` mantém um armazenamento interno (array);
	 - `salvar(obj)` adiciona o objeto ao repositório;
	 - `buscarTodos()` retorna uma cópia/array com todos os objetos salvos.
*/

class Repositorio{
	constructor(){
		this.armazenamento = []
	}

	salvar(obj){
		if(!(typeof obj == 'object')) return false
		this.armazenamento.push(obj)
	}

	buscarTodos(){
		let copia = [...this.armazenamento]
		return copia
	}
}

let repo1 = new Repositorio()
repo1.salvar({nome:'Ton',idade:24,altura:176})
repo1.salvar({nome:'Ton',idade:24,altura:176})
repo1.salvar({nome:'Ton',idade:24,altura:176})
console.log(repo1)
console.log(repo1.buscarTodos())

/* === Questão 7: Exercício prático - Biblioteca ===
 - Crie classes Livro (titulo, autor, isbn) e Biblioteca que mantém uma lista de livros.
 - Métodos: adicionarLivro(livro), buscarPorAutor(autor), removerPorISBN(isbn).

 - Critérios de aceite:
	 - `Livro` tem `titulo`, `autor` e `isbn`;
	 - `Biblioteca` armazena livros numa lista interna;
	 - `adicionarLivro(livro)` adiciona instância `Livro` à lista;
	 - `buscarPorAutor(autor)` retorna array com livros correspondentes ao autor;
	 - `removerPorISBN(isbn)` remove o livro se existir e retorna booleano indicando sucesso.
*/

/* === Questão 8: Bônus - Validações e erros ===
 - Para uma das classes acima, adicione validações que lancem Error quando dados inválidos forem passados.

 - Critérios de aceite:
	 - Pelo menos uma classe lança `Error` quando dados críticos inválidos forem passados (ex: ISBN vazio, saldo negativo ao criar conta, ou nome vazio em Pessoa);
	 - Há exemplos demonstrando a validação (tratados com `try/catch` opcionalmente).
*/

/* Dicas rápidas:
 - Use super() em classes que estendem outras.
 - Prefira getters/setters para propriedades que precisam de validação.
 - Teste com console.log e pequenos cenários para confirmar comportamento.
*/