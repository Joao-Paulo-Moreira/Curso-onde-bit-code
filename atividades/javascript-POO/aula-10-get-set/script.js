class Wallet {
    #amount
    #user_name
    constructor(){
        this.#amount = 100.99 * 100;
    }

    get amount(){
        return this.#amount / 100
    }

    set user_name(new_user_name){
        if(typeof new_user_name === 'string'){
            this.#user_name = new_user_name;
        }else{
            console.error('User name must be a string')
        }
        
    }

    get user_name(){
        return this.#user_name;
    }
}

const myWallet = new Wallet()

console.log(myWallet.amount)

myWallet.user_name = 'João paulo'

console.log(myWallet.user_name)

myWallet.user_name = true

console.log(myWallet.user_name)