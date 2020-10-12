const form = document.getElementById('form');
const userName = document.getElementById('userName');
const eMail = document.getElementById('eMail');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password2');

// show text and input error
function showError (input , message)
{
   const form = input.parentElement;
   form.className = 'form-control error';
   const small = form.querySelector('small');
   small.textContent = message;
}
// show  input Success

function showSuccess (input){
   const form = input.parentElement;
   form.className = 'form-control success';

}
// regex valid email
function validEmail(eMail)
{
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(eMail).toLowerCase());
}
// input Value event listener
form.addEventListener ('submit' , function(e){
   e.preventDefault();

   if (userName.value === '') {
      showError(userName , 'user name is require')
   }
   else {
   showSuccess (userName);
}

if (eMail.value === '') {
   showError(eMail , 'eMail is require')
}
else if (!validEmail(eMail.value)) {
   showError(eMail , 'eMail is not valid')

}
else {
showSuccess (eMail);
}

if (password.value === '') {
   showError(password , 'password is require')
}
else {
showSuccess (password);
}

if (passwordConfirm.value === '') {
   showError(passwordConfirm , 'confirm password is require')
}
else {
showSuccess (passwordConfirm);
}

})