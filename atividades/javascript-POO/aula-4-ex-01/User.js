class User{
    constructor(fullname, email, password){
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login (email, password){
        if(this.email === email && this.password === password){
            console.log('You successfully registered');
        } else{
            console.log('You are not registered');
        }
    }
}

const firstUser = new User('João Paulo Moreira', 'email@email.com', '123456789');

firstUser.login('email@email.com', '123456789');