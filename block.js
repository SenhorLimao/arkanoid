export default class Block {
    constructor(element, x, y, width){
        this.element = element;
        this.x = x;
        this.y = y;
        this.element.style.setProperty('position', `absolute`);
        this.element.style.setProperty('left', `${this.y*width}vw`);
        this.element.style.setProperty('top', `${this.x*this.altura}vh`);

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