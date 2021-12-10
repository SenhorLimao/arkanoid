export default class ObjB {
    constructor(element) {
        this.name = 'ObjB';
        this.element = element;
    }

    get x() {
        return parseFloat(getComputedStyle(this.element).getPropertyValue('--x'));
    }
    set x(value) {
        this.element.style.setProperty('--x', value);
    }
    get y() {
        return parseFloat(getComputedStyle(this.element).getPropertyValue('--y'));
    }
    set y(value) {
        this.element.style.setProperty('--y', value);
    }
}