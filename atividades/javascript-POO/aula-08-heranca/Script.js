class Property {
    constructor(area, price){
        this.area = area;
        this.price = price;
    }

    getPriceBySqyareMeter(){
        return this.price / this.area
    }
}

class House extends Property{ }

const land = new Property(200, 50000);
const house = new House(120, 200000);

console.log(land);
console.log(house.getPriceBySqyareMeter());

console.log(house instanceof House)


class Apartament extends Property { 
    constructor(number, area, price) {
        super(area, price)
        this.number = number
    }

    getFloor(){
        return this.number.slice(0, -2)
    }
}

const apt = new Apartament('201', 200, 60000)
console.log(apt)
console.log(apt.getFloor())