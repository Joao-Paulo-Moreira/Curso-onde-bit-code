const Mage = require('./Mage')
const Thief = require('./Thief')
const Warrior = require('./Warrior')

const Arthur = new Mage('Arthur', 90, 4, 2, 14)
const Alicia = new Thief('Alicia', 140, 33, 10)
const Mike = new Warrior('Mike', 200, 17, 11, 4)


console.table({Arthur, Alicia, Mike })

Mike.switchStance()

Arthur.attack(Mike)
Alicia.attack(Arthur)

console.table({Arthur, Alicia, Mike })


Mike.switchStance()
Mike.attack(Arthur)
Arthur.heal(Arthur)
Alicia.attack(Mike)


console.table({Arthur, Alicia, Mike })