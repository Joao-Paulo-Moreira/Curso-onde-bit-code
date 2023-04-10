class Product{
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addToStock(quantity){
        this.inStock += quantity
    }

    calculateDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const smartWatch = new Product('SmartWatch', 'Text...', 100);
smartWatch.addToStock(200)

const priceWithDiscount = smartWatch.calculateDiscount(12)

console.log(smartWatch)
console.log(priceWithDiscount)