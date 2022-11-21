let nome = window.prompt('Insira seu primeiro nome')
let sNome = window.prompt('Insira seu sobrenome')
let campoDeEstudo = window.prompt('Qual a sua formação')
let idade = window.prompt('Quantos anos você tem?')

let resultado = window.alert(`Olá ${nome} ${sNome}, você tem ${idade}, e sua area de formação é ${campoDeEstudo}, correto?`)

function fazerCalculo(){
   const primeiroNumero = Number(window.prompt('insira um numero'))
   const segundoNumero = Number(window.prompt('insira um numero'))
   const resultadoConta = window.alert(`A soma de ${primeiroNumero} e ${segundoNumero} é ${primeiroNumero + segundoNumero}`)
}

function fazerSubtração(){
   const primeiroNumero = Number(window.prompt('insira um numero'))
   const segundoNumero = Number(window.prompt('insira um numero'))
   const resultadoConta = window.alert(`A subtração de ${primeiroNumero} e ${segundoNumero} é ${primeiroNumero - segundoNumero}`)
}

function fazerMultiplicação(){
   const primeiroNumero = Number(window.prompt('insira um numero'))
   const segundoNumero = Number(window.prompt('insira um numero'))
   const resultadoConta = window.alert(`A multiplicação de ${primeiroNumero} e ${segundoNumero} é ${primeiroNumero * segundoNumero}`)
}

function fazerDivisão(){
   const primeiroNumero = Number(window.prompt('insira um numero'))
   const segundoNumero = Number(window.prompt('insira um numero'))
   const resultadoConta = window.alert(`A divisão de ${primeiroNumero} e ${segundoNumero} é ${primeiroNumero / segundoNumero}`)
}