class Reservation {
    constructor(guets, room, days){
        this.guets = guets;
        this.room = room;
        this.days = days;
        this.total = days * Reservation.baseFee;
    }

    static baseFee = 150

    static showBaseFee() {
        console.log(`baseFee is ${Reservation.baseFee}`)
    }

    static get premiumFee(){
        return Reservation.baseFee * 1.5
    }
}

Reservation.showBaseFee()

const r1 = new Reservation(3, 200, 2)

console.log(r1)

Reservation.baseFee = 200

const r2 = new Reservation(5, 201, 5)

console.log(r2)

console.log(`premium fee is ${Reservation.premiumFee}`)