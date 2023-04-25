const Product = require("./Product");

module.export = class Posters extends Product{
    constructor(name, description, height, width, price, in_stock = 0){
        super(name, description, price, in_stock)
        this.height = height
        this.width = width
    }
}