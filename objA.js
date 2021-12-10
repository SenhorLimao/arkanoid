export default class ObjA {
    constructor(element) {
        this.name = 'objA';
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

    set color(value) {
        this.element.style.setProperty('--actualcolor', value);
    }
}