class Account{
    #password
    #balance = 0
    constructor(user){
        this.email = user.email;
        this.#password = user.password;
    }

    getBalance(email, password){
        if(this.#authenticate){
            return this.#balance
        }else{
            return null
        }
    }

    #authenticate(email, password){
        return this.email === email && this.#password === password
    }
}

const user = {
    email: 'email@example.com',
    password: '123456'
}

const myAccount = new Account(user);

console.log(myAccount.getBalance('email@example.com', '123456'));