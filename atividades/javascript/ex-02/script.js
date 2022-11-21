function carSpeed() {
   let carName01 = window.prompt('Qual o carro?')
   let carSpeed01 = window.prompt('Qual a velocidade')
   let carName02 = window.prompt('Qual o carro?')
   let carSpeed02 = window.prompt('Qual a velocidade')

   if(carSpeed01 > carSpeed02){
      window.alert(`O carro ${carName01} é mais veloz que o ${carName02}`)
   } else if(carSpeed01 < carSpeed02) {
      window.alert(`O carro ${carName01} é mais lento que o ${carName02}`)
   } else if(carSpeed01 === carSpeed02) {
      window.alert(`O carro ${carName01} e ${carName02} estão com a mesma velocidade`)
   }
}


function duel() {
   let charName = window.prompt('Como se chama o atacante?')
   let powerAtk = window.prompt(`pontos de ataque de ${charName}`)
   let defenseName = window.prompt('Como se chama o defensor?')
   let defenseLife = window.prompt(`pontos de vida de ${defenseName}`)
   let defenderPower = window.prompt(`Pontos de desefa de ${defenseName}`)
   let shield = window.confirm(`O personagem ${defenseName} possuí escudo?`)

   if (powerAtk >= defenseLife && shield === false) {
      let battle = powerAtk - defenseLife
      let defenderNewLife = defenderPower - battle
      window.alert(`Quem atacou ${charName} \n
      poder de ataque ${powerAtk} \n
      Nome do defensor ${defenseName} \n
      Vida do defensor ${defenseLife} \n
      Ponto de defesa do defensor ${defenderPower} \n
      Pontos de vida restante ${defenderNewLife}`)
   } else if (powerAtk >= defenseLife && shield === true) {
      let battle = (powerAtk / 2 ) - defenseLife
      let defenderNewLife = defenderPower - battle
      window.alert(`Quem atacou ${charName} \n
      poder de ataque ${powerAtk} \n
      Nome do defensor ${defenseName} \n
      Vida do defensor ${defenseLife} \n
      Ponto de defesa do defensor ${defenderPower} \n
      Pontos de vida restante ${defenderNewLife}`)
   }
}