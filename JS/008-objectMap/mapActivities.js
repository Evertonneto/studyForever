// ========================================
// EXERCÍCIOS DE FIXAÇÃO - OBJETO MAP
// ========================================

// ========== EXERCÍCIO 1 ==========
// Crie um Map com informações de produtos
// Chaves: ID do produto (números)
// Valores: objetos com {nome, preco, estoque}
// Após criar, exiba o tamanho do Map

console.log("===== EXERCÍCIO 1 =====");
const Produtos = new Map([
    [0,{nome:'Coca-cola',preco:12,estoque:true}],
    [1,{nome:'Pão',preco:1.2,estoque:true}],
    [2,{nome:'Queijo',preco:30,estoque:true}]
])
console.log(Produtos.size)


// ========== EXERCÍCIO 2 ==========
// Use o Map do exercício 1
// Verifique se existe um produto com ID 2
// Se existir, atualize o preço para 99.99
// Se não existir, adicione um novo produto

console.log("===== EXERCÍCIO 2 =====");
if(Produtos.has(2)){
    let produto = Produtos.get(2)
    Produtos.set(2,{...produto,preco:99.99})
}else{
    Produtos.set(2,{nome:'Carne',preco:99.99,estoque:true})

}
console.log(Produtos.get(2))


// ========== EXERCÍCIO 3 ==========
// Itere sobre todos os produtos do Map
// Para cada um, exiba: "Produto X: nome - preço"
// Use for...of

console.log("===== EXERCÍCIO 3 =====");
for(let produto of Produtos){
    let [id,{nome,preco,estoque} ]= produto
    console.log(`Produto ${id}: ${nome} - R$${preco}`)
}


// ========== EXERCÍCIO 4 ==========
// Crie um Map de usuários onde:
// - Chave: email do usuário (string)
// - Valor: {nome, idade, ativo}
// Adicione 3 usuários
// Delete um usuário pelo email
// Verifique se outro usuário ainda existe

console.log("===== EXERCÍCIO 4 =====");
const Usuarios = new Map()
Usuarios.set('jose@gmail.com',{nome:'José da Silva Santos',idade:27,ativo:true})
Usuarios.set('paulo@gmail.com',{nome:'Paulo da Silva Santos',idade:30,ativo:true})
Usuarios.set('costasilva@gmail.com',{nome:'Costa da Silva Santos',idade:32,ativo:true})
Usuarios.delete('paulo@gmail.com')
console.log(Usuarios.has('costasilva@gmail.com'))
console.log(Usuarios)

// ========== EXERCÍCIO 5 ==========
// Crie um Map que armazene o histórico de acessos
// Chave: timestamp (Date)
// Valor: {usuario, acao, detalhes}
// Adicione 3 acessos
// Use o método .keys() para listar todos os timestamps
// Use o método .values() para listar todas as ações

console.log("===== EXERCÍCIO 5 =====");
const Acessos = new Map()
Acessos.set(new Date('2026-05-16T08:52:00'),{usuario:'@JOSE12',acao:'Criação de Processo',detalhes:'teste'})
Acessos.set(new Date('2026-05-16T08:48:00'),{usuario:'@ABC',acao:'Busca de Processo',detalhes:'teste'})
Acessos.set(new Date('2026-05-16T08:44:00'),{usuario:'@JJJUNIOR',acao:'Alteração de Processo',detalhes:'teste'})

console.log(Acessos.keys())
console.log([...Acessos.values()].map(item => item))

// ========== EXERCÍCIO 6 ==========
// Converta um objeto JavaScript para Map
// Objeto original:

console.log("===== EXERCÍCIO 6 =====");

const livros = {
    1: {titulo: "1984", autor: "George Orwell"},
    2: {titulo: "Dom Casmurro", autor: "Machado de Assis"},
    3: {titulo: "O Cortiço", autor: "Aluísio Azevedo"}
};
const livrosConversao = new Map()
for(let propriedade in livros){
    livrosConversao.set(propriedade,{titulo:livros[propriedade].titulo,autor:livros[propriedade].autor})
}
console.log(livrosConversao)
console.log(Object.entries(livros))



// ========== EXERCÍCIO 7 ==========
// Crie um Map que funcione como um contador de votos
// Chave: nome do candidato (string)
// Valor: número de votos
// Implemente:
// - addVoto(candidato): adiciona 1 voto
// - removerVoto(candidato): remove 1 voto (se existir)
// - obterVotos(candidato): retorna quantidade de votos
// - obterVencedor(): retorna candidato com mais votos

console.log("===== EXERCÍCIO 7 =====");
let Candidatos = new Map()
Candidatos.set('José',0)
Candidatos.set('Paula',0)
Candidatos.set('addVoto',(candidato)=>{
    if(Candidatos.has(candidato)){
        Candidatos.set(candidato,Candidatos.get(candidato)+1)
    }else{
        console.log('Candidato Não Encontrado.Vote Novamente!')
    }
})
Candidatos.set('removerVoto',(candidato)=>{
    if(Candidatos.has(candidato)){
        if(Candidatos.get(candidato) > 0){
            Candidatos.set(candidato,Candidatos.get(candidato)-1)
        }else{
            console.log('O candidato possui 0 votos.')
        }
    }else{
        console.log('Candidato não encontrado. Vote Novamente!')
    }
})
Candidatos.set('obterVotos',(candidato)=>{
    if(Candidatos.has(candidato)){
        return Candidatos.get(candidato)
    }else{
        return 'Candidato não encontrado.'
    }
})

Candidatos.set('obterVencedor',()=>{
    let vencedor = ''
    let maiorVotos = -Infinity
    let empate = false

    for (let candidato of Candidatos) {
        if (typeof candidato[1] !== 'number') {
            continue
        }

        if (candidato[1] > maiorVotos) {
            maiorVotos = candidato[1]
            vencedor = candidato[0]
            empate = false
        } else if (candidato[1] === maiorVotos) {
            empate = true
        }
    }

    return empate ? 'Empate' : vencedor
})

Candidatos.get('addVoto')('José')
Candidatos.get('addVoto')('José')
Candidatos.get('addVoto')('José')
Candidatos.get('addVoto')('Paula')
Candidatos.get('addVoto')('Paula')
Candidatos.get('addVoto')('Paula')
console.log(Candidatos.get('obterVencedor')())
console.log(Candidatos)


// ========== EXERCÍCIO 8 ==========
// Crie dois Maps com dados de clientes
// Map 1: clientes inativos
// Map 2: clientes ativos
// Implemente uma função que:
// - Move um cliente de um Map para outro
// - Remove de um e adiciona ao outro
// - Exibe o status da operação

console.log("===== EXERCÍCIO 8 =====");
// TODO: Implemente aqui


// ========== EXERCÍCIO 9 ==========
// Use um Map para armazenar configurações de um aplicativo
// Chaves: strings (nomes das configurações)
// Valores: valores variados (string, número, booleano)
// Implemente:
// - setConfig(chave, valor)
// - getConfig(chave, padrão)
// - resetConfig()
// - listarConfiguracoes()

console.log("===== EXERCÍCIO 9 =====");
// TODO: Implemente aqui


// ========== EXERCÍCIO 10 ==========
// Desafio: Crie um cache usando Map com expiração
// - Adicione itens com chave e valor
// - Adicione também um tempo de expiração (em segundos)
// - Implemente a função get() que verifica se o item expirou
// - Se expirou, remove do cache e retorna undefined
// - Se não expirou, retorna o valor
// Dica: use Date.now() para comparar tempos

console.log("===== EXERCÍCIO 10 =====");
// TODO: Implemente aqui


// ========== EXERCÍCIO 11 ==========
// Use Map para resolver este problema:
// Dado um array de palavras, crie um Map que conta
// a frequência de cada palavra
// Exemplo: ["gato", "cão", "gato", "pássaro", "cão", "cão"]
// Resultado esperado:
// Map { 'gato' => 2, 'cão' => 3, 'pássaro' => 1 }

console.log("===== EXERCÍCIO 11 =====");
// TODO: Implemente aqui


// ========== EXERCÍCIO 12 ==========
// Crie um Map que simule um carrinho de compras
// Chave: ID do produto
// Valor: {nome, preco, quantidade}
// Implemente:
// - adicionarAoCarrinho(id, nome, preco, quantidade)
// - removerDoCarrinho(id)
// - atualizarQuantidade(id, novaQuantidade)
// - calcularTotal()
// - listarItens()

console.log("===== EXERCÍCIO 12 =====");
// TODO: Implemente aqui
