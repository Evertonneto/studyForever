// ============================================================
// ATIVIDADES - Métodos para Objetos em JavaScript
// ============================================================

// ATIVIDADE 1: Spread Operator e Object.assign()
// Objetivo: Praticar cópia de objetos de forma segura
// ============================================================
console.log('==== ATIVIDADE 1: Spread Operator e Object.assign() ====');

// 1.1 - Crie um objeto 'livro' com propriedades: titulo, autor, ano, paginas
// 1.2 - Copie este objeto usando spread operator (...) e chame de 'livro2'
// 1.3 - Altere a propriedade 'titulo' de livro2 para 'O Novo Título'
// 1.4 - Use Object.assign() para criar 'livro3' adicionando uma nova propriedade 'genero'
// 1.5 - Exiba todos os três objetos e verifique se o original não foi alterado

// Seu código aqui:

let livro = {
    titulo:'O magico de oz', 
    autor:'Não identificado', 
    ano: 1950, 
    paginas: 200
}

let livro2 = {...livro}
livro2.titulo = 'O Novo Título'
let livro3 = Object.assign({},livro,{genero:'drama'})
console.log(livro)
console.log(livro2)
console.log(livro3)



// ============================================================
// ATIVIDADE 2: Object.freeze() vs Object.seal()
// Objetivo: Entender as diferenças entre congelamento e selagem de objetos
// ============================================================
console.log('\n==== ATIVIDADE 2: Object.freeze() vs Object.seal() ====');

// 2.1 - Crie um objeto 'usuario' com nome, email e telefone
// 2.2 - Congele o objeto usando Object.freeze()
// 2.3 - Tente modificar uma propriedade existente (email) - o que acontece?
// 2.4 - Tente adicionar uma nova propriedade - o que acontece?
// 2.5 - Crie outro objeto 'usuario2' idêntico ao anterior e use Object.seal()
// 2.6 - Tente modificar uma propriedade existente - o que diferencia do freeze?
// 2.7 - Tente adicionar uma nova propriedade - o que acontece?
// Exiba mensagens indicando se as operações funcionaram ou não

// Seu código aqui:

let usuario = {
    nome:'Ton',
    email:'ton@gmail.com',
    telefone:'8399999999'
}

Object.freeze(usuario)
usuario.email = 'ton1@gmail.com'
console.log(usuario)
usuario.idade = 22
console.log(usuario)

let usuario2 = {
    ...usuario
}

Object.seal(usuario2)
usuario2.nome = 'Tony'
console.log(usuario2)
usuario2.idade = 23
console.log(usuario2)


// ============================================================
// ATIVIDADE 3: Object.defineProperty() e Descritores
// Objetivo: Controlar propriedades com configurações avançadas
// ============================================================
console.log('\n==== ATIVIDADE 3: Object.defineProperty() e Descritores ====');

// 3.1 - Crie um objeto 'produto' com nome e preco
// 3.2 - Use Object.defineProperty() para tornar a propriedade 'preco' não enumerável
// 3.3 - Use Object.defineProperty() para tornar a propriedade 'nome' não configurável
// 3.4 - Exiba Object.getOwnPropertyDescriptor() para ambas as propriedades
// 3.5 - Teste se consegue remover ou reconfigurar essas propriedades
// Analise e comente os resultados

// Seu código aqui:



// ============================================================
// ATIVIDADE 4: Object.keys(), Object.values() e Object.entries()
// Objetivo: Extrair e iterar sobre dados de objetos
// ============================================================
console.log('\n==== ATIVIDADE 4: Object.keys(), Object.values() e Object.entries() ====');

// 4.1 - Crie um objeto 'computador' com as propriedades: processador, ram, armazenamento, preco
// 4.2 - Use Object.keys() para obter todas as chaves e exiba-as
// 4.3 - Use Object.values() para obter todos os valores e exiba-os
// 4.4 - Use Object.entries() para obter os pares chave-valor
// 4.5 - Transforme Object.entries() em um loop for-of que exiba cada par no formato "chave: valor"
// 4.6 - Crie uma função que retorna um string formatado com todas as informações do objeto

// Seu código aqui:



// ============================================================
// ATIVIDADE 5: Combinando Conceitos
// Objetivo: Usar múltiplos conceitos em um cenário prático
// ============================================================
console.log('\n==== ATIVIDADE 5: Combinando Conceitos ====');

// 5.1 - Crie um objeto 'conta' com: titular, saldo, ativo
// 5.2 - Use Object.defineProperty() para tornar 'saldo' não enumerável
// 5.3 - Use Object.assign() para adicionar propriedades: agencia e numero
// 5.4 - Congele o objeto com Object.freeze()
// 5.5 - Obtenha todas as propriedades enumeráveis usando Object.keys()
// 5.6 - Exiba as propriedades como uma lista formatada
// 5.7 - Tente adicionar ou modificar uma propriedade (devem falhar silenciosamente)

// Seu código aqui:



// ============================================================
// ATIVIDADE 6: DESAFIO - Sistema de Configuração
// Objetivo: Criar um sistema robusto usando todos os conceitos
// ============================================================
console.log('\n==== ATIVIDADE 6: DESAFIO - Sistema de Configuração ====');

// Crie um objeto de configuração para uma aplicação com as seguintes características:

// 6.1 - Propriedades obrigatórias: appName, versao, debug, tema
// 6.2 - Use Object.defineProperty() para fazer:
//       - 'versao' ser não configurável (não pode ser deletada ou redefinida)
//       - 'appName' ser não enumerável
//       - 'apiUrl' ser uma propriedade oculta (não enumerável e não configurável)
// 6.3 - Use Object.assign() para adicionar configurações adicionais: maxRequests, timeout
// 6.4 - Use Object.freeze() para impedir modificações acidentais
// 6.5 - Crie uma função que exiba apenas as propriedades enumeráveis
// 6.6 - Crie uma função que retorna todas as propriedades (incluindo não enumeráveis)
//       usando Object.getOwnPropertyNames()
// 6.7 - Teste tentando modificar, adicionar e deletar propriedades
// 6.8 - Exiba um relatório completo da configuração

// Seu código aqui:
