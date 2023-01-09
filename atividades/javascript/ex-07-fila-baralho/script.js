function abrirFila() {
   let filaDeEspera = ['João ', 'José ', 'Maria ', 'Ana Clara ', 'Marcos ', 'Marcela']
   let openMenu;

   do{
      openMenu = Number(window.prompt(`Você gostaria de \n
      1 - Incluir um novo paciente na lista. \n
      2 - Checar a lista de espera. \n
      3 - consultar próximo paciente \n
      4 - sair`))


      if (openMenu === 1){
         filaDeEspera.push(window.prompt('Qual o nome do paciente?'))
      } else if (openMenu === 2){
         alert(`A fila de espera é: ${filaDeEspera}`)
      } else if (openMenu === 3){
         const pacienteAtendido = filaDeEspera.shift()
      } else if (openMenu === 4){
         alert('Encerrando programa')
      }else {
         alert('Dígite um valor valido')
      }
   } while (openMenu !== 4)

}
///////////////////////////////////////////////////////////////
function pegarUmaCarta() {
   let Pokemons = ['Pikachu ', 'Charmander ', 'Bubasauro ', 'Eevee', 'Cyndaquil'];
   let openMenu;

   do{
      openMenu = Number(window.prompt(`Olá, você gostaria de: \n
      1 - Adicionar um pokemon novo \n
      2 - Pegar um pokemon aleatorio \n
      3 - consultar pokemons \n
      4 - sair`))

      if(openMenu === 1) {
         Pokemons.push(window.prompt('Qual o nome do pokemon que você deseja adicionar?'));
      } else if(openMenu === 2) {
         let aleatorio = Pokemons[Math.floor(Math.random() * Pokemons.length)]
         alert(`O pokemon que você escolheu é ${aleatorio}`)
      } else if (openMenu === 3){
         alert(`Os pokemons que você pode escolhe é: ${Pokemons}`)
      } else if (openMenu === 4) {
         alert('Finalizando o progama')
      } else{
         alert('Dígite um valor valido')
      }

   } while (openMenu !== 4)

}