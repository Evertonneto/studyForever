
function rand(min, max) {
  min = min * 1000;
  max = max * 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitMinute(msg,time) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('Erro na tipagem')
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

async function executeFunction(){

    try{
        let fase1 =  waitMinute("Fase 1 - Motores Ligados",3000)
        setTimeout(()=>{
            console.log(fase1)
        },3100)
        let fase2 = await waitMinute("Fase 2 - Motores ligadas",5000)
        console.log(fase2)
        let fase3 = await waitMinute("Fase 3 - Motores ligadas",1000)
        console.log(fase3)

    }catch(e){
        console.log(e)
    }
}

executeFunction()