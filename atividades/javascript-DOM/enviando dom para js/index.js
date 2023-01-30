function register(element){
   const user = element.children.name.value;
   const userPassword = element.children.password.value
   const confirmUserPassword = element.children.confirmPassword.value

   if(userPassword === confirmUserPassword){
      alert(`Registro feito com sucesso. Seja muito bem vindo (a) ${user}`);
   } else{
      alert('As duas senhas não conferem.')
   }
}