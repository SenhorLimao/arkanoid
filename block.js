import map_block from './map_block.json' assert {type: 'json'}
export default class Block {
    constructor(element, x, y, width, type){
        this.type = map_block[type];
        console.log(this.type);
        this.element = element;
        this.x = x;
        this.y = y;
        this.element.style.setProperty('position', `absolute`);
        this.element.style.setProperty('left', `${this.y*width}vw`);
        this.element.style.setProperty('top', `${this.x*this.altura}vh`);
        this.element.style.setProperty('background-color', `${this.type.color}`);

    }


    get altura(){
        return parseFloat(getComputedStyle(this.element).getPropertyValue('--altura'));
    }
    set altura(value){
        this.element.style.setProperty('--altura', value);
    }

    rect(){
        return this.element.getBoundingClientRect();
    }
    collided(){
        this.element.remove();
    }


}