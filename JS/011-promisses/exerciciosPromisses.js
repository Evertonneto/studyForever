// Exercicios praticos de Promises
// Tente resolver os desafios sem consultar a solucao de imediato.

function esperar(min, max) {
  const tempo = Math.floor(Math.random() * (max - min + 1) + min);
  return new Promise((resolve) => {
    setTimeout(() => resolve(tempo), tempo);
  });
}

/*
 * EXERCICIO 1 - Checkout de uma loja virtual
 *
 * Problema real:
 * Ao finalizar uma compra, a loja precisa:
 * 1. Buscar os dados do cliente.
 * 2. Verificar se todos os produtos ainda estao disponiveis.
 * 3. Calcular o frete.
 * 4. Criar o pagamento.
 *
 * Cada servico possui um tempo de resposta diferente e pode falhar.
 * O pedido so deve ser confirmado quando todas as etapas necessarias
 * forem concluidas com sucesso.
 */

function buscarCliente() {
  return esperar(500, 1500).then(() => ({
    id: 42,
    nome: "Ana",
    endereco: "Rua das Flores, 100",
  }));
}

function verificarEstoque() {
  return esperar(700, 1800).then(() => ({
    disponivel: true,
    itens: 2,
  }));
}

function calcularFrete(endereco) {
  return esperar(400, 1200).then(() => ({
    endereco,
    valor: 19.9,
    prazoDias: 5,
  }));
}

function criarPagamento(valor) {
  return esperar(800, 2000).then(() => ({
    aprovado: true,
    codigo: "PAG-2026-001",
    valor,
  }));
}

function finalizarCompra(valorProdutos) {
  
  return Promise.all([buscarCliente(), verificarEstoque()])
  .then(([cliente,estoque]) => {

    if (!estoque.disponivel) {
     throw new Error("Estoque Indisponível")
    }

    return Promise.all([cliente,calcularFrete(cliente.endereco),criarPagamento(valorProdutos)])
  }).then(([cliente,frete,pagamento])=>{
      if(!pagamento.aprovado) throw new Error("Pagamento Não Aprovado!")

      return {
        cliente: cliente.nome,
        pagamento: pagamento.valor,
        frete: frete.valor,
        total: pagamento.valor+frete.valor
      }
    })
}
// Implemente a cadeia de Promises aqui.
// Dicas:
// - buscarCliente e verificarEstoque podem ser iniciadas em paralelo.
// - Use Promise.all para aguardar as duas respostas.
// - Se o estoque estiver indisponivel, rejeite a operacao.
// - Depois calcule o frete e crie o pagamento.
// - Retorne um resumo com cliente, frete e pagamento.

// finalizarCompra(5000).then((res) => {
//   console.log(res);
// });

// Teste esperado:
finalizarCompra('A')
  .then((pedido) => console.log("Pedido confirmado:", pedido))
  .catch((erro) => console.error("Nao foi possivel finalizar:", erro));

/*
 * EXERCICIO 2 - Monitoramento de um servico online
 *
 * Problema real:
 * Uma aplicacao precisa verificar se um servico de pagamentos esta online.
 * Ela consulta tres servidores diferentes. O primeiro servidor que responder
 * com status 200 deve ser usado. Se nenhum responder a tempo, a verificacao
 * deve falhar e informar o problema para a equipe de suporte.
 */

function consultarServidor(nome, tempo, status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === 200) {
        resolve({
          servidor: nome,
          status,
          mensagem: "Servico disponivel",
        });
      } else {
        reject(new Error(`${nome} retornou status ${status}`));
      }
    }, tempo);
  });
}

function consultarComTimeout(promessa, limite) {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Tempo limite excedido"));
    }, limite);
  });

  return Promise.race([promessa, timeout]);
}

function verificarServicoPagamento() {
  const servidores = [
    consultarServidor("Pagamento A", 1800, 500),
    consultarServidor("Pagamento B", 900, 200),
    consultarServidor("Pagamento C", 1400, 200),
  ];

  // Implemente a verificacao aqui.
  // Requisitos:
  // - Cada consulta deve ter limite de 1200 ms.
  // - O resultado deve ser o primeiro servidor saudavel a responder.
  // - Servidores que falharem nao devem impedir as outras consultas.
  // - Se nenhum servidor estiver disponivel, rejeite com uma mensagem clara.
  // - Use Promise.race, Promise.allSettled ou uma combinacao apropriada.
}

// Teste esperado:
// verificarServicoPagamento()
//   .then((resultado) => console.log('Monitoramento:', resultado))
//   .catch((erro) => console.error('Alerta de indisponibilidade:', erro.message));

/*
 * Desafios extras:
 * - Adicione logs mostrando o inicio e o fim de cada etapa.
 * - Use finally para informar que o processo terminou.
 * - Faca uma das funcoes rejeitar aleatoriamente e trate o erro corretamente.
 * - Impeda que um erro exiba informacoes sensiveis do cliente ou do pagamento.
 */
