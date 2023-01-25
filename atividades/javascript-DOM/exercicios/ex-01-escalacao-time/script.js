function adicionarJogador() {
   const playerPosition = document.getElementById('position').value;
   const playerName = document.getElementById('number').value;
   const playerShirt = document.getElementById('shirt').value;
   
   const confirmEscalation = confirm("Deseja escalar " + playerName + " como " + playerPosition + "?")

   if(confirmEscalation === true) {

      const ul = document.getElementById('listaDeJogadores');

      const playerLi = document.createElement('li');
      playerLi.id = 'player-' + playerShirt;
      playerLi.innerText ='Jogador: ' + playerName + ' Posição: ' + playerPosition  + ' N° da camisa: ' + playerShirt

      ul.appendChild(playerLi);


      document.getElementById('position').value = '';
      document.getElementById('number').value = '';
      document.getElementById('shirt').value = '';

   }else if (confirmEscalation === false) {
      alert('Jogador não adicionado');
   }
}


function removerJogador() {
   const numero = document.getElementById('removerAlgumJogador').value;
   const removerJogador = document.getElementById('player-' + numero);
   const confirmarRemcao = confirm(`Tem certeza que deseja remover o jogador ${removerJogador.innerText}?`);


   if(confirmarRemcao === true) {
      document.getElementById('listaDeJogadores').removeChild(removerJogador);
      document.getElementById('removerAlgumJogador').value = '';
   } else if (confirmarRemcao === false) {
      alert('Jogador não excluído');
   }
}