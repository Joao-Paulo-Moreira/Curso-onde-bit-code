
   const vagas = [];

   function listarVagas(){
      const vagasTxt = vagas.reduce(function(textoFinal, vaga, indice){
         textoFinal += indice + ". ";
         textoFinal += vaga.nome;
         textoFinal += `( ${vaga.candidatos.length} candidatos ) \n`;
         return textoFinal;
      }, '')

      alert(vagasTxt);
   }

   function novaVaga() {
      const nome = prompt('Informe um nome para a vaga');
      const descricao = prompt('Escreva uma descrição sobre a vaga');
      const dataLimite = prompt('Informe uma data limite para a vaga(dd/mm/aa):');

      const confirma = confirm("As informações\n" +
      "Nome:" + nome + "Descrição:" + descricao + "\nData Limite:" + dataLimite + "\n Estão corretas?");

      if (confirma) { 
         const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
         vagas.push(novaVaga)
         alert("Vaga criada.")
      } 


   }


   function exibirVaga(){
      const indice = prompt('Informe qual a vaga você deseja ver.');

      if(indice >= vagas.length || indice < 0){
         alert('Índice inválido')
         return
      }

      const vaga = vagas[indice];


      const candidatosEmTxt = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + '\n - ' + candidato, '')

      alert(`Vaga N°: ${indice} \n
      Nome: ${vaga.nome} \n
      descrição: ${vaga.descricao} \n
      Quantidade de candidatos: ${vaga.candidatos.lenght} \n
      Candidatos inscritos na vaga: ${candidatosEmTxt}`);
   }


   function inscreverCandidato() {
      const candidato = prompt('Informe o nome do candidato(a)');
      const indice = prompt('Informe o indíce da vaga (o indice é o primeiro número que aparece na vaga)');
      const vaga = vagas[indice];

      const confirmacao = confirm(`Deseja inscrever o candidato (a) ${candidato} para a vaga ${indice}? \n
      Nome: ${vaga.nome}\n
      Descrição ${vaga.descricao}\n
      Data limite: ${vaga.dataLimite}`);

      if(confirmacao) {
         vaga.candidatos.push(candidato);
         alert('Incrição realizada');
      }

   }


   function excluirVaga(){
      const indice = prompt('Qual vaga você deseja excluir?');
      const vaga = vagas[indice];

      const confirma = confirm(`Você tem certeza quedesja excluir a vaga ${indice}\n
      Nome: ${vaga.nome}\n
      Descrição ${vaga.descricao}\n
      Data limite: ${vaga.dataLimite}`);

      if(confirma === true) {
         vaga.splice(indice, 1);
         alert('Vaga excluida');
      }

   }


   function exibirMenu(){
      const opcao = Number(prompt(`APP de vagas de emprego.\n
      Escolha uma opção:\n
      1-Listar vagas disponíveis \n
      2-Criar uma nova vaga\n
      3-Exibir uma vaga \n
      4-Inscrever um cândidato\n
      5-Excluir uma vaga\n
      6-Sair`));

      return opcao;

   }

function executar() {
   let opcao = '';

   do{
      opcao = exibirMenu()

      switch(opcao){
         case 1:
            listarVagas();
            break;
         case 2:
            novaVaga();
            break;
         case 3:
            exibirVaga();
            break;
         case 4:
            inscreverCandidato();
            break;
         case 5:
            excluirVaga();
            break
         default:
      }


   }while(opcao !== 6){
      alert('Finalizando programa')
   }

}