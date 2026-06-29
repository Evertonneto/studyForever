class Pessoa{
    constructor(cpfEnviado){
        this.cpfLimpo = cpfEnviado.replace(/\D+/g,"")
    }

    valida(){
        if(!this.cpfLimpo) return "Nenhum cpf inserido no constructor"
        if(typeof this.cpfLimpo !== 'string') return "O cpf não é um texto";
        if(this.cpfLimpo.length !== 11) return "O cpf contêm mais ou menos do que 11 digitos"
        if(this.sequencial()) return "O cpf é uma sequência."

        let novoCpf = this.geraNovoCpf()

        if(novoCpf === this.cpfLimpo){
            return true
        }else{
            return false
        }

    }

    sequencial(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }

    geraDigito(cpfSemDigito){
        let multiplicador = cpfSemDigito.length + 1


        let total = cpfSemDigito.reduce((ac,value)=>{
            ac += (Number(value) * multiplicador)
            multiplicador--
            return ac
        },0)

        let digito = 11 - (total % 11)
        return digito >= 9 ? 0 : digito


    }

    geraNovoCpf(){
        let cpfSemDigitos = Array.from(this.cpfLimpo.slice(0,-2))
        console.log(cpfSemDigitos)
        let digito1 = this.geraDigito(cpfSemDigitos)
        cpfSemDigitos.push(digito1)
        let digito2 = this.geraDigito(cpfSemDigitos)

        let cpfComDigitos = cpfSemDigitos.push(digito2)
        cpfComDigitos = cpfSemDigitos.join("")
        console.log("CPF com digitos:"+cpfComDigitos)
        return cpfComDigitos

    }
}   

let pessoa1 = new Pessoa('708.173.214-39')
console.log(pessoa1.valida())