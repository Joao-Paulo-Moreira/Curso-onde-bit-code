function converterMedidas() {
   const valueMeters = Number(prompt('Escolha o valor em metros'))
   const value = window.prompt('Esolha a unidade para qual você quer converter: n/ mm n/ cm /dm /n dan /n hm /n km')

   switch(value){
      case 'mm':
         const valueMilimeters = valueMeters * 1000
         alert(`O valor em milímetros é ${valueMilimeters}`)
      break
      case 'cm':
         const valueCentimeters = valueMeters * 100
         alert(`O valor em centímetros é ${valueCentimeters}`)
      break
      case 'dm':
         const valueDecimeter = valueMeters * 10
         alert(`O valor em decímetro é ${valueDecimeter}`)
      break
      case 'dam':
         const valueDecameter = valueMeters * 0.1
         alert(`O valor em decâmetro é ${valueDecameter}`)
      break
      case 'hm':
         const valueHectameter = valueMeters *0.01
         alert(`O valor em hectômetro é ${valueHectameter}`)
      break
      case 'km':
         const valueKilometers = valueMeters * 0.001
         alert(`O valor em quilômetro é ${valueKilometers}`)
      break
      default:
         alert('Por favor insira um valor valido.')
   }
}