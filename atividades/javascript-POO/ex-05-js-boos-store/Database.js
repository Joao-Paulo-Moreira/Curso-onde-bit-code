module.export = class Database{
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: [],
    }

    find(key){
        return this.#storage[key]
    }

    save_author(author){
        this.#storage.authors.push(author)
    }

    find_book_by_name(book_name){
        return this.#storage.books.find(b => b.name === book_name)
    }

    save_book(book){
        const book_exists = this.find_book_by_name(book.name)
        if(!book_exists){
            this.#storage.books.push(book)
        }
    }

    add_book_to_stock(book_name, quantity){
        const book = this.find_book_by_name(book_name)
        book?.add_to_stock(quantity)
    }

    remove_book_from_stock(book_name, quantity){
        const book = this.find_book_by_name(book_name)
        book?.remove_from_stock(quantity)
    }




    find_poster_by_name(poster_name){
        return this.#storage.posters.find(p => p.name === poster_name)
    }

    save_poster(book){
        const poster_exists = this.find_poster_by_name(poster.name)
        if(!poster_exists){
            this.#storage.posters.push(poster)
        }
    }

    add_poster_to_stock(poster_name, quantity){
        const poster = this.find_poster_by_name(poster_name)
        book?.add_to_stock(quantity)
    }

    remove_poster_from_stock(book_poster, quantity){
        const book = this.find_poster_by_name(poster_name)
        poster?.remove_from_stock(quantity)
    }




    save_user(user){
        const user_exists = this.#storage.users.find(u => u.email === user.email)
        if(!user_exists){
            this.#storage.users.push(user)
        }
    }

    save_order(order){
        this.#storage.orders.push(order)
    }

    show_storage(){
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))
    }
}