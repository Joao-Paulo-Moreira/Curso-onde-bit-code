function multiplicate() {
   let callNumber = Number(window.prompt('Informe um número de 1 a 20'));

   for(let i = 0; i <= 20; i++) {
      console.log(`O resultado é: \n 
      ${callNumber * i}`)
   }

}

function palindrome() {
   let word = window.prompt('Escolha uma palavra para saber se é um palíndromo.')
   let discoverPalindrome = ''

   for (let i = word.length - 1; i >= 0; --i) {
      discoverPalindrome += word[i]
   }

   if(discoverPalindrome === word){
      alert(`Você dígitou um palíndromo: ${discoverPalindrome}`)
   } else{
      alert(`Palavra dígitada: ${word} \n
      Palavra ao contrário: ${discoverPalindrome}`)
   }
}