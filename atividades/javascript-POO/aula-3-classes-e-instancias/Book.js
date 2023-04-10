class Book{
    constructor(title){
        this.title = title;
        this.published = false;
    }

    publish(){
        this.published = true;
    }
}

const SinCity = new Book('Hardest Goodbye');
const GeorgeOrwell = new Book('1984');

SinCity.publish();
GeorgeOrwell.publish();

console.log(SinCity)
console.log(GeorgeOrwell)