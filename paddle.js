export default class Paddle {
    constructor(element) {
        this.element = element;
    }

    get position(){
        return parseFloat(getComputedStyle(this.element).getPropertyValue('--position'));
    }

    set position(value){
        this.element.style.setProperty('--position', value);
    }

    rect(){
        return this.element.getBoundingClientRect();
    }



    move(direction) {
        this.x = MouseEvent.x;
    }

}