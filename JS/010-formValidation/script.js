window.addEventListener("submit", (e) => {
  e.preventDefault();
  let formHTML = document.getElementById("form");


  let myForm = new ValidationForm(formHTML);
  myForm.validate();
});

class ValidationForm {
  constructor(formHTML) {
    this.form = formHTML;
    this.nome = formHTML.querySelector('[name="nome"]')
    this.sobrenome = formHTML.querySelector('[name="sobrenome"]')
    this.cpf = formHTML.querySelector('[name="cpf"]')
    this.usuario = formHTML.querySelector('[name="usuario"]')
    this.senha = formHTML.querySelector('[name="senha"]')
    this.repetirSenha = formHTML.querySelector('[name="repetirSenha"]')
    this.errors = []
  }

  validate() {
    this.removeErrors()
    this.emptyField();
    let formHTML = this.form
    let nome = formHTML.querySelector('[name="nome"]')
  }

  emptyField() {

    // remove existing error messages
    for (let errorElement of this.form.querySelectorAll('.error-text')) {
      errorElement.remove()
    }

    // fields to check for emptiness
    const fields = [
      this.nome,
      this.sobrenome,
      this.cpf,
      this.usuario,
      this.senha,
      this.repetirSenha,
    ]

    for (let field of fields) {
      if (!field) continue
      if (field.value === '' || field.value === undefined || field.value === null) {
        let error = document.createElement('span')
        error.innerText = `${field.previousElementSibling.innerText} está vazio`
        error.classList.add('error-text')
        field.after(error)
      }
    }

    if(!this.usuario.value.match(/^[a-zA-Z0-9]+$/g)){
        let error = document.createElement('span')
        error.innerText = `${this.usuario.previousElementSibling.innerText} precisa ter apenas caracteres e números`
        error.classList.add('error-text')
        this.usuario.after(error)
    }

    if(this.cpf.value.match(/^[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}/g)){
        this.validaCPF(this.cpf.value)
    }
  }

  removeErrors(){
    console.log(this.errors)
  }
}
