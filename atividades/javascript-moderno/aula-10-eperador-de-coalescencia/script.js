let a = 0
let b = a || 42

console.log({a, b})

b = a ?? 24

console.log({a, b})