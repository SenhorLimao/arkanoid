export default class Paddle {
    constructor(element, width) {
        this.element = element;
        this.width = width;
    }

    get position(){
        return parseFloat(getComputedStyle(this.element).getPropertyValue('--position'));
    }

    set position(value){
        this.element.style.setProperty('--position', value);
    }

    get width() {
        return parseFloat(getComputedStyle(this.element).getPropertyValue('--largura'));
    }

    set width(value) {
        this.element.style.setProperty('--largura', value);
    }

    rect(){
        return this.element.getBoundingClientRect();
    }



    move(direction) {
        this.x = MouseEvent.x;
    }

}
