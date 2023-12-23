var firstname = document.getElementById('Firstname')
var lastname = document.getElementById('Lastname')
var email = document.getElementById('email')
var password = document.getElementById('Password')
var firstname_error = document.querySelector('#Firstname-error')
var lastname_error = document.querySelector('#Lastname-error')
var email_error = document.querySelector('#email-error')
var password_error = document.querySelector('#Password-error')
// var Merror = document.querySelector('.error')
function validateForm(){
    if (firstname.value == "" && lastname.value == "" && email.value == "" && password.value == "") {
        firstname_error.innerHTML = "firstname cannot be empty"
        lastname_error.innerHTML = "lastname cannot be empty"
        email_error.innerHTML = "email cannot be empty"
        password_error.innerHTML = "password cannot be empty"
        return false;
    }
    if(firstname.value == ""){
        firstname_error.innerHTML = "firstname cannot be empty"
        return false;
    }
    if(lastname.value == ""){
        lastname_error.innerHTML = "lastname cannot be empty"
        return false;
    }
    if(email.value == ""){
        email_error.innerHTML = "email cannot be empty"
        return false;
    }
    if(password.value == ""){
        password_error.innerHTML = "password cannot be empty"
        return false;
    }
    if(password.value.length < 8){
        password_error.innerHTML = "password must be 8 characters"
        return false;
    }
}
// console.log(Merror)