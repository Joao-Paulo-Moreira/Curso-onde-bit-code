const hello = 'Olá, mundo!'

console.log(...hello);

const names = ['João', 'Paulo', 'Roberta', 'Aline', 'Juliano']

console.log(...names[0])

const namesCopy = names

namesCopy.pop()
namesCopy.pop()
namesCopy.push()

console.log({names, namesCopy})

const namesClone = [...names]

namesClone.push('Julia')

console.log({names, namesCopy, namesClone})