function informarCidades(){

   let name = window.prompt('Olá, qual o seu nome?')
   let citiesVisited = ''
   let citiesCounted = 0
   let cities = window.prompt(`Olá ${name}, você já visitou alguma cidade? \n SIM \n NÃO`)

   while (cities === 'sim'){
      let cityName = window.prompt('Qual o nome da cidade?')
      citiesVisited += cityName + '\n'
      citiesCounted++
      cities = window.prompt('Já visitou mais alguma cidade? \n SIM \n NÃO')
      if(cities == '5'){
         break
      }
   }

   window.alert(`Olá ${name}, você já visitou um total de ${citiesCounted}, sendo essas cidades as seguintes ${citiesVisited}`)
}