const person = {
    name: 'Stan',
    job: 'Student',
    parents: ['Randy','Sharon']
}

const name = person.name;

const {job, parents} = person;

console.log(name, job, parents);


const [father, mother] = parents;

console.log(father, mother);


function createUser({name, job, parents}) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}

const Kyle = createUser(person)

console.log(Kyle)