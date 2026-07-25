function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{
        if(msg === "Frase 2") reject('Frase 2 está corrompido!')

        setTimeout(()=>{
            resolve(msg)
        },tempo)
    })
}

function randomTime(min,max){
    min = min*1000
    max = max*1000
    return (Math.random() * (max-min) + min)
}

esperaAi('Frase 1',randomTime(1,3)).then((resposta)=>{
    console.log(resposta)
    return esperaAi('Frase 2', randomTime(1,5))
}).then((resposta)=>{
    console.log(resposta)
}).catch((e)=> console.log(e))
