window.addEventListener("submit", (e) => {
  e.preventDefault();
  let formHTML = document.getElementById("form");

  let myForm = new ValidationForm(formHTML);
  myForm.validate();
});

class ValidationForm {
  constructor(formHTML) {
    this.form = formHTML;
    this.nome = formHTML.querySelector('[name="nome"]');
    this.sobrenome = formHTML.querySelector('[name="sobrenome"]');
    this.cpf = formHTML.querySelector('[name="cpf"]');
    this.usuario = formHTML.querySelector('[name="usuario"]');
    this.senha = formHTML.querySelector('[name="senha"]');
    this.repetirSenha = formHTML.querySelector('[name="repetirSenha"]');
    this.errors = [];
  }

  validate() {
    this.removeErrors();
    this.emptyField();
    if (!this.validaCPF(this.cpf.value)) {
      let error = document.createElement("span");
      error.innerText = `CPF não é valido.`;
      error.classList.add("error-text");
      this.cpf.after(error);
    }
    if(!this.validateUser(this.usuario.value)){
       let error = document.createElement("span");
      error.innerText = `Usuário deve conter entre 3 e 12.`;
      error.classList.add("error-text");
      this.usuario.after(error);
    }
    if(!this.validatePassword(this.senha.value)){
       let error = document.createElement("span");
      error.innerText = `Senha deve conter entre 6 e 12.`;
      error.classList.add("error-text");
      this.senha.after(error);
    }

    if(!this.validateRepeatPassword()){
      let error = document.createElement("span");
      error.innerText = `Senhas devem corresponder`;
      error.classList.add("error-text");
      this.repetirSenha.after(error);
      let error2 = document.createElement("span");
      error2.innerText = `Senhas devem corresponder`;
      error2.classList.add("error-text");
      this.senha.after(error2);

    }


  }

  emptyField() {

    

    // fields to check for emptiness
    const fields = [
      this.nome,
      this.sobrenome,
      this.cpf,
      this.usuario,
      this.senha,
      this.repetirSenha,
    ];

    for (let field of fields) {
      if (!field) continue;
      if (
        field.value === "" ||
        field.value === undefined ||
        field.value === null
      ) {
        let error = document.createElement("span");
        error.innerText = `${field.previousElementSibling.innerText} está vazio`;
        error.classList.add("error-text");
        field.after(error);
      }
    }
  }

  removeErrors() {
    for (let errorElement of this.form.querySelectorAll(".error-text")) {
      errorElement.remove();
    }
  }

  validaCPF(cpf) {
    let cpfLimpo = cpf.replace(/\D+/g, "");

    let cpfArray = Array.from(cpfLimpo);
    let cpfArraySemDigitos = cpfArray.slice(0, -2);

    let multiplicador1 = cpfArraySemDigitos.length + 1;
    console.log(multiplicador1);

    let total1 = cpfArraySemDigitos.reduce((ac, value) => {
      ac += Number(value) * multiplicador1;
      console.log(ac);
      multiplicador1--;
      return ac;
    }, 0);

    console.log(total1);
    let digito1 = 11 - (total1 % 11);
    if (digito1 > 9) {
      digito1 = 0;
    }

    let cpfArrayComPrimeiroDigito = [...cpfArraySemDigitos, String(digito1)];

    let multiplicador2 = cpfArrayComPrimeiroDigito.length + 1;

    let total2 = cpfArrayComPrimeiroDigito.reduce((ac, value) => {
      ac += Number(value) * multiplicador2;
      multiplicador2--;
      return ac;
    }, 0);

    console.log(total2);

    let digito2 = 11 - (total2 % 11);
    if (digito2 > 9) {
      digito2 = 0;
    }
    console.log(digito2);
    let cpfArrayValidado = [...cpfArrayComPrimeiroDigito, String(digito2)];
    console.log(cpfArrayValidado.join(""));
    console.log(cpfArray.join(""));
    return cpfArray.join("") === cpfArrayValidado.join("");
  }

  validateUser(user){
    if(user.length < 3 || user.length > 12){
      return false
    }
    return true
  }

  validatePassword(password){
    if(!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,12}$/)){
      return false
    }
    return true
  }

  validateRepeatPassword(password,repeatPassword){
    if(this.senha.value !== this.repetirSenha.value){
      return false
    }
    return true
  }
}
