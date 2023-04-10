// const book = {
//     title: '1984',
//     pages: 386,
//     published: true,
//     inStock: 20,
//     tags: ['ficção', 'Distópico'],
//     author: {
//         name: 'George Orwell'
//     },
//     addOnStock(quantity){
//         this.inStock += quantity
//     },
// }


function Book(title, pages, tags, author) {
    this.title = title;
    this.pages = pages;
    this.tags = tags;
    this.author = author;
    this.published = false;
    this.inStock = 0;
    this.addOnStock = function(quantity){
        this.inStock += quantity
    }
    this.save = function() {}
}

const author = {name: 'Frank Miller'};
const tags = ['Comics', 'Investigation', 'Thriller'];

const sinCity = new Book('The hardest goodbye', '184', tags, author);

console.log(sinCity)