/**
 * EXERCÍCIOS DE GETTERS E SETTERS - SITUAÇÕES REAIS DE TRABALHO
 *
 * Resolva os exercícios abaixo implementando getters e setters
 * com validações apropriadas para cada cenário.
 */

// ============================================================
// EXERCÍCIO 1: Sistema de Usuário
// ============================================================
/**
 * Crie um construtor User que:
 * - Tenha uma propriedade 'email' privada com getter/setter
 * - O setter deve validar se o email contém '@' e '.'
 * - Tenha uma propriedade 'password' privada (somente setter, sem getter por segurança)
 * - O setter de password deve validar se tem pelo menos 6 caracteres
 * - Tenha uma propriedade 'isActive' com getter/setter que aceita apenas boolean
 */

// Sua solução aqui:
const User = function (email) {
  let emailPrivate = email;
  let passwordPrivate;
  let isActive;

  Object.defineProperties(this, {
    email: {
      enumerable: false,
      configurable: true,
      get: () => {
        return emailPrivate;
      },
      set: (value) => {
        if (!value.includes("@") || !value.includes(".")) {
          console.log("O email deve conter @ e . !");
          return;
        }
        emailPrivate = value;
      },
    },
    password: {
      enumerable: false,
      configurable: false,
      set: (value) => {
        if (value.length < 6) {
          console.log("A senha deve conter no mínimo 6 caracteres");
          return;
        }
        passwordPrivate = value;
      },
    },
    isActive: {
      enumerable: true,
      configurable: true,
      get: () => {
        if (typeof isActive !== "boolean") {
          console.log("isActive doesn't exists");
        } else {
          return isActive;
        }
      },
      set: (value) => {
        if (typeof value !== "boolean") {
          console.log("O valor deve ser do tipo boolean!");
          return;
        }
        isActive = value;
      },
    },
  });
};

// Teste seu código:
const user1 = new User("joao@email.com");
// console.log(user1.email)
// user1.email = 'novoemail@test.com'
// user1.email = 'novoemailtest.com'
// user1.email = 'novoemailtestcom'
// user1.isActive = true
// user1.password = '12345'
// console.log(user1.email)
// console.log(user1.isActive)

// ============================================================
// EXERCÍCIO 2: Carrinho de Compras
// ============================================================
/**
 * Crie um construtor ShoppingCart que:
 * - Tenha um array privado de items
 * - Tenha um getter 'items' que retorna uma cópia do array (não o original)
 * - Tenha um getter 'total' que calcula a soma dos preços de todos os items
 * - Tenha um getter 'itemCount' que retorna a quantidade de items
 * - Tenha métodos addItem(item) e removeItem(index)
 * - Cada item deve ter { name: string, price: number, quantity: number }
 */

// Sua solução aqui:
const ShoppingCart = function () {
  let items = [];
  Object.defineProperties(this, {
    items: {
      enumerable: true,
      configurable: false,
      get: () => {
        let itemsCopy = [...items];
        return itemsCopy;
      },
    },
    total: {
      enumerable: true,
      configurable: false,
      get: () => {
        let total = 0;
        for (let i = 0; i < items.length; i++) {
          total += items[i].price * items[i].quantity;
        }
        return total;
      },
    },
    itemCount: {
      enumerable: true,
      configurable: false,
      get: () => {
        const itemsCount = new Set(items.map((item) => item.name));
        return itemsCount.size;
      },
    },
    addItem: {
      enumerable: false,
      configurable: false,
      value: (item) => {
        if (item.name && item.price && item.quantity) {
          items.push(item);
          console.log("Inserido com sucesso!");
        } else {
          console.log("Informações faltando!");
        }
      },
    },
    removeItem: {
      enumerable: false,
      configurable: false,
      value: (index) => {
        items.splice(index, 1);
        console.log("Removido com sucesso");
      },
    },
  });
};

// Teste seu código:
// const cart = new ShoppingCart()
// cart.addItem({ name: 'Notebook', price: 2500, quantity: 1 })
// cart.addItem({ name: 'Mouse', price: 50, quantity: 2 })
// cart.addItem({ name: 'Mouse', price: 50, quantity: 2 })
// cart.addItem({ name: 'Mouse', price: 50, quantity: 2 })
// cart.removeItem(0)
// console.log(cart.items) // [{ name: 'Notebook', price: 2500, quantity: 1 }, { name: 'Mouse', price: 50, quantity: 2 }]
// console.log(cart.total) // 2600
// console.log(cart.itemCount) // 2

// ============================================================
// EXERCÍCIO 3: Conta Bancária
// ============================================================
/**
 * Crie uma factory function createBankAccount que:
 * - Receba accountNumber e initialBalance
 * - Tenha um getter 'balance' que retorna o saldo atual
 * - Tenha um setter 'balance' que NÃO permite mudanças diretas (throw error)
 * - Tenha métodos deposit(amount) e withdraw(amount)
 * - Withdraw não deve permitir saldo negativo
 * - Ambos os métodos devem validar se amount é um número positivo
 * - Tenha um getter 'accountNumber' (read-only)
 */

// Sua solução aqui:
function createBankAccount(accountNumber, initialBalance) {
  let actualBalance = initialBalance;

  return {
    get balance() {
      return actualBalance;
    },
    set balance(value) {
      throw new Error("Não é permitido alterar o saldo diretamente!");
    },
    deposit(value) {
      if (typeof value === "number" && value > 0) {
        actualBalance += value;
      } else {
        throw new Error("Valour menor que 0 ou tipo diferente de number");
      }
    },
    withdraw(value) {
      if (value < 0 || typeof value !== "number") {
        throw new Error("Valor precisa ser maior que 0 e do tipo numérico!");
      }
      if (actualBalance - value < 0) {
        throw new Error("O valor no saldo não pode ficar abaixo de zero!");
      } else {
        actualBalance -= value;
      }
    },
    get accountNumber() {
      return accountNumber;
    },
  };
}

// Teste seu código:
const account = createBankAccount("001-2345", 1000);
// console.log(account.balance) // 1000
// account.deposit(500)
// console.log(account.balance) // 1500
// account.withdraw(200)
// console.log(account.balance) // 1300
// try{
//     account.withdraw(1400)
// }catch(e){
//     console.log(e.message) // Error
// }

// ============================================================
// EXERCÍCIO 4: Configurações de Aplicação
// ============================================================
/**
 * Crie um objeto AppConfig usando factory function que:
 * - Tenha uma propriedade 'theme' que aceita apenas: 'light', 'dark', 'auto'
 * - Tenha uma propriedade 'language' que aceita apenas: 'pt-BR', 'en-US', 'es-ES'
 * - Tenha uma propriedade 'fontSize' que aceita apenas números entre 12 e 24
 * - Tenha um getter 'config' que retorna um objeto com todas as configurações
 * - Todas as propriedades devem ter validação no setter
 */

// Sua solução aqui:
function createAppConfig(theme, language, fontSize) {
  let actualTheme;
  let actualLanguage;
  let actualFontSize;

  if (theme === "light" || theme === "dark" || theme === "auto") {
    actualTheme = theme;
  } else {
    throw new Error("O valor do tema deve ser light,dark ou auto");
  }

  if (language === "pt-BR" || language === "en-US" || language === "es-ES") {
    actualLanguage = language;
  } else {
    throw new Error("O valor da language deve ser pt-BR,en-US ou es-EN");
  }

  if (fontSize >= 12 && fontSize <= 24) {
    actualFontSize = fontSize;
  } else {
    throw new Error("O valor do fontSize deve ser entre 12 e 24");
  }

  return {
    get theme() {
      return actualTheme;
    },
    set theme(newTheme) {
      if (newTheme === "light" || newTheme === "dark" || newTheme === "auto") {
        actualTheme = newTheme;
      }
    },
    get language() {
      return actualLanguage;
    },
    set language(newLanguage) {
      if (
        newLanguage === "pt-BR" ||
        newLanguage === "en-US" ||
        newLanguage === "es-ES"
      ) {
        actualLanguage = newLanguage;
      }
    },
    get fontSize() {
      return actualFontSize;
    },
    set fontSize(newFontSize) {
      if (newFontSize >= 12 && newFontSize <= 24) {
        actualFontSize = newFontSize;
      }
    },
    get config() {
      return {
        theme: actualTheme,
        language: actualLanguage,
        fontSize: actualFontSize,
      };
    },
  };
}

// Teste seu código:
// const config = createAppConfig('light', 'pt-BR', 16)
// console.log(config.config)
// console.log(config.theme)
// config.theme = 'dark'
// config.fontSize = 18

// ============================================================
// EXERCÍCIO 5: Produto com Desconto
// ============================================================
/**
 * Crie um construtor DiscountProduct que:
 * - Tenha propriedades privadas: name, basePrice, discountPercent
 * - Tenha getter/setter para 'name' (string não vazia)
 * - Tenha getter/setter para 'basePrice' (número positivo)
 * - Tenha getter/setter para 'discountPercent' (número entre 0 e 100)
 * - Tenha um getter 'finalPrice' (calculado) que retorna o preço com desconto
 * - Tenha um getter 'savings' que retorna quanto está economizando
 */

// Sua solução aqui:

const DiscountProduct = function (name, basePrice, discountPercent) {
  let privateName;
  let privateBasePrice;
  let privateDiscountPercent;

  if (name !== "" && typeof name === "string") {
    privateName = name;
  } else {
    throw new Error("Valor incorreto!");
  }

    if (typeof basePrice === "number" && basePrice > 0) {
        privateBasePrice = basePrice;
    } else {
        throw new Error("Valor incorreto!");
    }

    if (discountPercent <= 100 && discountPercent >= 0) {
        privateDiscountPercent = discountPercent;
    } else {
        throw new Error("Valor incorreto!");
    }

  Object.defineProperties(this, {
    name: {
      enumerable: true,
      configurable: true,
      get: () => {
        return privateName;
      },
      set: (value) => {
        if (value !== "" && typeof value === "string") {
          privateName = value;
        } else {
          throw new Error("Valor incorreto!");
        }
      },
    },
    basePrice: {
      enumerable: true,
      configurable: false,
      get: () => {
        return privateBasePrice;
      },
      set: (value) => {
        if (typeof value === "number" && value > 0) {
          privateBasePrice = value;
        } else {
          throw new Error("Valor incorreto!");
        }
      },
    },
    discountPercent: {
      enumerable: true,
      configurable: false,
      get: () => {
        return privateDiscountPercent;
      },
      set: (value) => {
        if (value <= 100 && value >= 0) {
          privateDiscountPercent = value;
        } else {
          throw new Error("Valor incorreto!");
        }
      },
    },
    finalPrice: {
      enumerable: true,
      configurable: false,
      get: () => {
        return (
          privateBasePrice - privateBasePrice * (privateDiscountPercent / 100)
        );
      },
    },
    savings: {
      enumerable: true,
      configurable: false,
      get: () => {
        return `Você está economizando R$${privateBasePrice * (privateDiscountPercent / 100)}`;
      },
    },
  });
};

// Teste seu código:
const product = new DiscountProduct("Teclado Mecânico", 500, 20);
console.log(product.finalPrice); // 400
console.log(product.savings) // 100
product.discountPercent = 30
console.log(product.finalPrice) // 350

// ============================================================
// EXERCÍCIO 6: Sistema de Cache
// ============================================================
/**
 * Crie uma factory function createCache que:
 * - Armazene dados em um objeto privado
 * - Tenha um método set(key, value, ttl) onde ttl é tempo de vida em milissegundos
 * - Tenha um getter que aceita uma key e retorna o valor se não expirou
 * - Retorne null se o item expirou ou não existe
 * - Tenha um getter 'size' que retorna quantos items válidos existem no cache
 * - Tenha um método clear() que limpa o cache
 */

// Sua solução aqui:
function createCache() {
  let privateCache = {
    
  }
  return {
    get (key){
      if(!privateCache[key]){
        return null
      }

      if(Date.now() > privateCache[key].expiresAt){
        delete privateCache[key];
        return null
      }

      return privateCache[key].value.name
    },
    set (key,value,ttl){
      privateCache[key] = {
          value:value,
          expiresAt: Date.now() + ttl
      }
    },
    get size(){
      let count = 0
      for(let key in privateCache){
        if(privateCache[key].expiresAt >= Date.now()){
          count++
        }
      }
      return count
    },
    clear(){
       for(let key in privateCache){
        delete privateCache[key]
      }
    }
    
  }
}

// Teste seu código:
const cache = createCache()
cache.set('user1', { name: 'João' }, 25000) // expira em 5 segundos
cache.set('user2', { name: 'Ton' }, 1000) // expira em 1 segundos
setTimeout(()=>{
  console.log(cache.get('user1'))
  console.log(cache.size)
},995)

// ============================================================
// EXERCÍCIO 7: Validador de Formulário
// ============================================================
/**
 * Crie um construtor FormValidator que:
 * - Armazene um objeto de campos privado
 * - Cada campo tem: { value: any, rules: array, errors: array }
 * - Tenha um método addField(name, rules) onde rules é array de funções validadoras
 * - Tenha um setter para cada campo que executa as validações
 * - Tenha um getter 'isValid' que retorna true se todos os campos são válidos
 * - Tenha um getter 'errors' que retorna objeto com todos os erros
 */

// Sua solução aqui:

// Teste seu código:
// const form = new FormValidator()
// form.addField('email', [
//     value => value.includes('@') || 'Email deve conter @',
//     value => value.length > 5 || 'Email muito curto'
// ])
// form.setValue('email', 'teste@email.com')
// console.log(form.isValid)

// ============================================================
// EXERCÍCIO 8: Gerenciador de Tarefas (TODO)
// ============================================================
/**
 * Crie uma factory function createTaskManager que:
 * - Armazene um array privado de tarefas
 * - Cada tarefa tem: { id, title, completed, priority, createdAt }
 * - Tenha método addTask(title, priority) que gera ID automaticamente
 * - Tenha getter 'tasks' que retorna cópia das tarefas
 * - Tenha getter 'completedTasks' que retorna apenas tarefas concluídas
 * - Tenha getter 'pendingTasks' que retorna tarefas não concluídas
 * - Tenha getter 'highPriorityTasks' que retorna tarefas com priority === 'high'
 * - Tenha método toggleTask(id) para marcar como concluída/não concluída
 */

// Sua solução aqui:

// Teste seu código:
// const tasks = createTaskManager()
// tasks.addTask('Estudar JavaScript', 'high')
// tasks.addTask('Fazer exercícios', 'medium')
// console.log(tasks.pendingTasks.length)
// tasks.toggleTask(1)
// console.log(tasks.completedTasks.length)

// ============================================================
// DESAFIO FINAL: Sistema de Pedidos de Restaurante
// ============================================================
/**
 * Crie um sistema completo de pedidos que:
 *
 * 1. Construtor MenuItem:
 *    - name, price, category, available (boolean)
 *    - Todas com validações apropriadas
 *
 * 2. Factory function createOrder:
 *    - orderNumber (gerado automaticamente)
 *    - items (array privado de { menuItem, quantity })
 *    - status: 'pending', 'preparing', 'ready', 'delivered'
 *    - Método addItem(menuItem, quantity)
 *    - Getter 'subtotal' (soma dos items)
 *    - Getter 'tax' (10% do subtotal)
 *    - Getter 'total' (subtotal + tax)
 *    - Método updateStatus(newStatus) com validação
 *
 * 3. Factory function createRestaurant:
 *    - Gerencie um menu de items
 *    - Gerencie uma lista de pedidos
 *    - Método addMenuItem(name, price, category)
 *    - Método createOrder() que retorna novo pedido
 *    - Getter 'activeOrders' (pedidos não entregues)
 *    - Getter 'revenue' (soma de todos pedidos entregues)
 */

// Sua solução aqui:

// ============================================================
// BOA SORTE! 🚀
// ============================================================
