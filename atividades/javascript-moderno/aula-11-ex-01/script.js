const average = (...numbers) => {
    const sum = numbers.reduce((sum, number) => sum + number)
    return sum / numbers.length;
}
console.log(`Média aritimética símples é: ${average(3, 6, 10, 9)}`);



const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, { number, weigth}) => accum + (number * weigth), 0);''
    const weigthSum = entries.reduce((accum, entries) => accum + entries.weigth, 0);
    return sum / weigthSum;
}
console.log(`Média ponderada: ${weightedAverage({ number: 9, weigth: 3}, 
    { number: 7, weigth: 1 }, 
    { number: 10, weigth: 1 })}`);


    const median = (...numbers) => {
        const orderedNumbers = [...numbers].sort((a, b) => a - b);
        const midle = Math.floor(orderedNumbers.length / 2);
        if(orderedNumbers.length % 2 !== 0){
            return orderedNumbers[midle]
        } 

        const firstMedian = orderedNumbers[midle - 1];
        const secondMedian = orderedNumbers[midle];
        return average(firstMedian, secondMedian);
    }

console.log(`mediana: ${median(1, 3, 5 ,8, 2)}`)

const mode = (...numbers) => {
    const quantities = numbers.map(num =>[
        num, 
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}
console.log(`Moda: ${mode(1, 2, 3,4 ,4, 5,7,675,67,57,57,5)}`)