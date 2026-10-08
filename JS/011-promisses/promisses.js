// Promises são respostas assíncronas à solicitações

function rand(min, max) {
  min = min * 1000;
  max = max * 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitMinute(msg,time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

// waitMinute(rand(4,5)).then((resposta)=>{
//     console.log("Tempo: "+ resposta)
//     return waitMinute(rand(0,2))
// }).then((resposta)=>{
//     console.log("Tempo: "+ resposta)
// }).catch(e=>{
//     console.log(e)
// })

const promises = [waitMinute("PROMISE 1",rand(3, 4)), waitMinute("PROMISE 2",rand(1, 2))];

Promise.all(promises)
  .then((values) => {
    console.log(values);
  })
  .catch((e) => console.log(e));

// Promise.race(promises).then((resposta) => console.log(resposta));

// function carregarPagina(){
//     let emCache = false

//     if(emCache){
//         return Promise.reject("Página com erro")
//     }else{
//        return waitMinute('Carregando página',3000)
//     }
// }

// carregarPagina().then(res=>console.log(res)).catch(e=>console.log(e))