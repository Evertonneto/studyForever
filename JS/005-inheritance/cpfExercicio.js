function Pessoa(nome,cpf){
    this.nome = nome,
    this.cpf = function(){
        if(typeof(cpf) !== 'string') return;
        let cpfLimpo = cpf.replace(/\D+/g,'')
        let cpfArray = Array.from(cpfLimpo)
        let isSequencial = true
        cpfArray.forEach((value,index)=>{
            console.log(cpfArray[index] == cpfArray[index+1])
            if(cpfArray[index+1]){
                isSequencial = cpfArray[index] == cpfArray[index+1]
            }
        })
        if(isSequencial){
            console.log('CPF sequencial!')
            return;
        }

        
        let multiplicador1 = 10
        let primeiroSomaDosValores = cpfArray.reduce((ac,value)=>{
            while(multiplicador1 > 1){
                ac += (Number(value) * multiplicador1)
                multiplicador1--
                return ac
            }
            return ac
        }, 0)

        let multiplicador2 = 11
        let segundaSomaDosValores = cpfArray.reduce((ac,value)=>{
            while(multiplicador2 > 1){
                ac += (Number(value) * multiplicador2)
                multiplicador2--
                return ac
            }
            return ac
        }, 0 )

        let primeiroDigito = 11 - (primeiroSomaDosValores % 11)
        if(primeiroDigito >= 9){
            primeiroDigito = 0
        }

        let segundoDigito = 11 - (segundaSomaDosValores % 11)
        if(segundoDigito >= 9){
            segundoDigito = 0
        }

        if(primeiroDigito === Number(cpfArray[9]) && segundoDigito === Number(cpfArray[10]) ){
            console.log('CPF Válido')
            return cpf
        }
        else{
            console.log('CPF Inválido')
            return;
        }
    }

}

let p1 = new Pessoa('Ton', '70817321438')
console.log(p1.cpf())