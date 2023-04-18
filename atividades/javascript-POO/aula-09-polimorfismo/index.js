class Vehicle {
    move(){
        console.log('O veículo está se movendo')
    }
}

class car extends Vehicle {
    move(){
        console.log('O carro está andando')
    }
}

class Ship extends Vehicle {
    move(){
        console.log('O barco está navegando')
    }
}
class Aircraft extends Vehicle {
    move(gForce){
        console.log(`O avião está voando á ${gForce} força G`)
    }
}

const Ferrari = new car()
const Carrier = new Ship()
const superHornet = new Aircraft()

Ferrari.move()
Carrier.move()
superHornet.move(5)

function start(vehicle){
    console.log('O veiculo está ligando')
    vehicle.move()
}

start(Ferrari)
start(Carrier)
start(superHornet)