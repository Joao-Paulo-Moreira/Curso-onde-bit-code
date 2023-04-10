const Author = require('./Author')

const john = new Author('João Paulo');

const post = john.writePost('Titulo do post', 'Conteudo do post ...');

post.newComment('paulo', 'Muito legal!!!')
post.newComment('Moreira', 'Incrível!!!')


console.log(john)
console.log(post)