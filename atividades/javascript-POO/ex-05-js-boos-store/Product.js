module.exports = class Product{
    constructor(name, description, price, in_stock = 0){
        this.name = name;
        this.description = description;
        this.price = price;
        this.in_stock = in_stock;
    }

    add_to_stock(quantity){
        return this.in_stock += quantity
    }

    remove_from_stock(quantity){
        return this.in_stock -= quantity
    }
}