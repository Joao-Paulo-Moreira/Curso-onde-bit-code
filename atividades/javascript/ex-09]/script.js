function menuCalculo() {
   let abrirMenu;
   
   do {

      abrirMenu = Number(window.prompt(`Olá bem vindo ao one bit ao quadrado \n 
      1 - Calcular área do triângulo \n
      2 - Calcular área do retângulo\n
      3 - Calular área do quadrado \n
      4 - Calcular área do trapézio \n
      5 - Calcular área do circulo do PI \n
      6 - Sair`))

      if (abrirMenu === 1){
         let base = Number(window.prompt(`qual o valor da base do triângulo?`))
         let altura = Number(window.prompt(`qual o valor da altura do triângulo?`))
         let result = alert(`O calculo da área do triangulo é ${base * altura / 2}`)
      } else if (abrirMenu === 2) {
         let base = Number(window.prompt(`qual o valor da base do triângulo?`))
         let altura = Number(window.prompt(`qual o valor da altura do triângulo?`))
         let result = alert(`O calculo base do triangulo é ${base * altura}`)
      } else if (abrirMenu === 3) {
         let lado = Number(window.prompt(`Por favor indique o valor do dado`))
         let calc = alert(`O resultado é ${lado * lado}`)
      } else if (abrirMenu === 4) {
         let baseMaior = Number(window.prompt(`Por favor indique o valor da base maior`))
         let baseMenor = Number(window.prompt(`Por favor indique o valor da base menor`))
         let altura =  Number(window.prompt(`Por favor indique o valor da altura`))
         let calc = alert(`O resultado da área do trapézio é ${(baseMaior + baseMenor) * altura / 2 }`)
      } else if (abrirMenu === 5) {
         let raio = Number(window.prompt(`Por favor informe o valor do raio`))
         let result = alert(`O valor da área do circulo é ${(raio * raio) * 3,14}`)
      } else if (abrirMenu === 6) {
         alert('Finalizando o programa')
      } else{
         alert('Informe um valor válido')
      }



   }while (abrirMenu !== 6)

}


function maneiraFacil(){
    function calcularAreaRetangulo() {
      const base = parseFloat(prompt("Informe a base do retângulo:"))
      const altura = parseFloat(prompt("Informe a altura do retângulo:"))
      return base * altura
    }

    function calcularAreaQuadrado() {
      const lado = parseFloat(prompt("Informe a área do quadrado:"))
      return lado * lado
    }
    

    

    function calcularAreaTrapezio() {
      const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
      const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
      const altura = parseFloat(prompt("Informe a altura do trapézio:"))
      return (baseMaior + baseMenor) * altura / 2
    }

    


    function calcularAreaCirculo() {
      const raio = parseFloat(prompt("Informe o raio do círculo:"))
      return (3.14 * raio * raio)
    }

    function exibirMenu() {
      return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n"
      )
    }


    function executar() {
      let opcao = ""
    
      do {
        opcao = exibirMenu()
        let resultado
    
        switch (opcao) {
          case "1":
            resultado = calcularAreaTriangulo()
            break
          case "2":
            resultado = calcularAreaRetangulo()
            break
          case "3":
            resultado = calcularAreaQuadrado()
            break
          case "4":
            resultado = calcularAreaTrapezio()
            break
          case "5":
            resultado = calcularAreaCirculo()
            break
          case "6":
            alert("Saindo...")
            break
          default:
            alert("Opção inválida!")
            break
        }
    
        if (resultado) {
          alert("Resultado: " + resultado)
        }
    
      } while (opcao !== "6");
    }

executar()}