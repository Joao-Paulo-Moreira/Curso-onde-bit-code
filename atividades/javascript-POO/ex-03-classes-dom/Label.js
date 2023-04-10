import {Components} from './Components.js';

export class Label extends Components {
    constructor(text, parent, options) {
        super('label', parent, Object.assign({}, options, {textContent: text}));
    }
}