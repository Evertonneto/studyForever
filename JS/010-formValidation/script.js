window.addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const validationForm = new ValidationForm(form);
    validationForm.validate();
})

class ValidationForm{
    constructor(form){
        this.form = form
    }

    validate(){
        console.log(this.form)
    }
}
