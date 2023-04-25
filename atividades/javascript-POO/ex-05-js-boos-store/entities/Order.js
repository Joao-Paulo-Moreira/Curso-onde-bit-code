module.export = class Order {
    #total
    #itens
    #user

    constructor(itens, user){
        itens.foreach(({product, quantity}) => {
            if(product > product.in_stock){
                throw new Error(`Quantidade insuficiente em estoque`)
            }
        })
        this.#items = itens
        this.#total = total
        this.#total = itens.reduce((sum, {product, quantity}) => sum + (product.price * quantity)), 0
    }

    get Data(){
        return {itens :this.#itens,
                user: this.#user,
                total: this.#total
        }
    }

    
}