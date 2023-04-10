export class Components{
    #element = null;

    constructor(tag, parent, options){//options = HTML attributes
        this.tag = tag;
        this.parent = parent;
        this.options = options;
        this.build();
    }

    getElement(){
        return this.#element
    }

    build(){
        this.#element = document.createElement(this.tag);
        Object.assign(this.#element, this.options)
        return this
    }


    render(){
        if(this.parent instanceof Components){
            this.parent.#element.append(this.#element)
        }else {
            document.querySelector(this.parent).append(this.#element)
        }
    }
}