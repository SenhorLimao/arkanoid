export default class Block {
    constructor(element, x, y, width){
        this.element = element;
        console.log("🚀 ~ file: block.js ~ line 4 ~ Block ~ constructor ~ this.element", parseFloat(getComputedStyle(this.element).getPropertyValue('--altura')))
        this.x = x;
        this.y = y;
        this.element.style.setProperty('position', `absolute`);
        this.element.style.setProperty('left', `${this.y*width}vw`);
        // console.log(`${x*this.altura}vh`)
        this.element.style.setProperty('top', `${this.x*this.altura}vh`);

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
