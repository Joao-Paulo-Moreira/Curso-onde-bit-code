const Database = require('./Database')
const User = require('./entities/User')
const Author = require('./entities/Author')

module.export = class App {
    static #database = new Database()

    create_user(name, email, password) {
        const user = new User(name, email, password)
        App.#database.save_user(user)
    }

    get_users(){
        App.#database.find('users')
    }

    create_author(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#database.save_author(author)
    }

    get_author(){
        return App.#database.find('authors')
    }
}