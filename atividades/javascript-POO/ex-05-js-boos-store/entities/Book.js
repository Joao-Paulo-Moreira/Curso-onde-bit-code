const Product = require("./Product");

module.export = class Book extends Product{
    constructor(title, synopsis, genre, pages, author, description, price, in_stock = 0){
        super(`Livro: ${title}`, description, price, in_stock)
        this.title = title
        this.synopsis = synopsis
        this.genre = genre
        this.pages = pages
        this.author = author
    }
}