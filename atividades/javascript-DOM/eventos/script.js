function register(ev) {
   console.log(ev);

   const username = ev.currentTarget.parentNode.children.username.value;
   const password = ev.currentTarget.parentNode.children.password.value;
   const confirmPassword = ev.currentTarget.parentNode.children.passwordConfirmation.value;

   if(password === confirmPassword){
      alert(`Seja bem vindo (a) ${username}`)
   } else{
      alert('As senhas não conferem')
   }
}

const button = document.getElementById('register-button');

button.addEventListener('click', register)

function removeEvent() {
   button.removeEventListener('click', register);
   alert('Evento removido')
}