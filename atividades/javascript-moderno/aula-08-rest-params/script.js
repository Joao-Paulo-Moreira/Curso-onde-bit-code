function sum(...numbers){
    return numbers.reduce((accum, num) => accum + num, 0);
}

console.log(sum(3, 3))
console.log(sum(5,5,5,5,5,5,5,5))
console.log(sum(5, 23.3, 55.4, 10))

function calc(...ns){
    return ns.reduce((acc, n) => acc + n)
}

console.log(calc(1, 5, 5, 4, 3.75, 3,9 ))