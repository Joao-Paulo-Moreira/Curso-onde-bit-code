function openFunction() {
   let imoveisCadastrados = [];
   let menuImoveis;

   do{
      menuImoveis = Number(window.prompt(`Imoveis:\n 
      ${imoveisCadastrados.length}\n
      Bem vindo ao one bit House. Selecione a opção desejada. \n 
      1 - Incluir um novo imovel \n
      2 - Ver lista completa de imoveis \n
      3 - Sair `))

      if (menuImoveis === 1){
         const imovel = {}
            imovel.proprietario = prompt(`Qual o nome do proprietário?`);
            imovel.quantidadeQuartos = Number(prompt(`Quantos quartos possui o imóvel?`));
            imovel.quantidadeBanheiros = Number(prompt(`Quantos banheiros possui o imóvel?`));
            imovel.garagem = prompt(`O imóvel possui garagem? S/N`)

            const confirmacao = confirm(`Os dados estão corretos?\n
            Propietário: ${imovel.proprietario} \n
            Quartos: ${imovel.quantidadeQuartos} \n
            Banheiros: ${imovel.quantidadeBanheiros} \n
            Garagrem: ${imovel.garagem}`)

         if(confirmacao === true) {
            imoveisCadastrados.push(imovel)
            alert('Imóvel cadastrado')
         } else {
            alert('Voltando ao menu')
         }

      } else if (menuImoveis === 2){
         
         for(let i = 0; i < imoveisCadastrados.length; i++){
            alert(`Imovel ${(i + 1)} \n
            Proprietario: ${imoveisCadastrados[i].proprietario} \n
            Quartos: ${imoveisCadastrados[i].quantidadeQuartos} \n
            Banheiros: ${imoveisCadastrados[i].quantidadeBanheiros} \n
            Garagrem: ${imoveisCadastrados[i].garagem}`)
         }

      } else if (menuImoveis === 3 ){
         alert('Finalizando o programa')
      }
   }while(menuImoveis !== 3)
}