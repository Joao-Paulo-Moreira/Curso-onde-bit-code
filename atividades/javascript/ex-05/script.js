function openMenu() {
   let chooseOption;

   do {
      chooseOption = Number(window.prompt(`Menu aberto. para selecionar uma opção dígite o numero da mesma \n \n 1 - Cadastro de usuário \n 2 - informações adicionais \n 3 - buscar informação \n 4 - ajuda \n 5 - encerrar programa`))

      if (chooseOption >= 1 && 4 >= chooseOption){
         alert(`A opção que você selecionou foi ${chooseOption}`)
      } else if (chooseOption === 5) {
         alert('O programa está sendo finalizado!')
      } else{
         alert(`Opção invalida`)
      }

   } while (chooseOption !== 5)
}


//desafio 2

function calculateFinances() {
   let salary = Number(window.prompt(`Quanto você ganha em reais?`))
   let menu = ''
   let newMoney;


   do {
      menu = window.prompt(`Você tem ${salary}, você gostaria de: \n 1 - Adicionar uma fonte de renda secundaria \n 2 - Ir direto para os gastos \n 3 - Sair`)

      switch(menu) {
         case '1':
            newMoney = Number(window.prompt(`Seu caixa é de ${salary}. Quanto você gostaria de adicionar?`))
            salary += newMoney
         break

         case '2':
            newMoney = Number(window.prompt(`Seu caixa é de ${salary}. Quanto você gasta em despesas?`))
            salary -= newMoney
         break

         case '3':
            alert('Programa encerrado')
         break

         default:
            alert('Valor invalido')
         break
      }

   }while (menu !== '3')
}