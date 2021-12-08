export default class Block {
    constructor(element, x, y){
        this.element = element;
        this.x = x;
        this.y = y;
        this.element.style.setProperty('position', `absolute`);
        this.element.style.setProperty('left', `${y*10}vw`);
        this.element.style.setProperty('top', ` ${x*2}vh`);

    }

    // get element(){
    //     return this.element;
    // }
    // set element(value){
    //     this.element = value;
    // }
    get placement(){
        return parseFloat(this.element).getPropertyValue('--placement');
    }
    set placement(value){
        this.element.style.setProperty('--placement', value);
    }

    rect(){
        return this.element.getBoundingClientRect();
    }
    collided(){
        this.element.remove();
    }


}