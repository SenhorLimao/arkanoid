export default class Computer {

    constructor(dom, velocity){
        this.dom = dom;
        this.velocity = velocity;
    }

    get x(){
        return parseFloat(getComputedStyle(this.dom).getPropertyValue('--x'));
    }

    set x(value){
        this.dom.style.setProperty('--x', value);
    }

    get y(){
        return parseFloat(getComputedStyle(this.dom).getPropertyValue('--y'));
    }
    set y(value){
        this.dom.style.setProperty('--y', value);
    }
    
    inScreen(){
        return this.y < 100;
    }

    reset(){
        this.y = -10
    }

    update(delta){
        this.y += this.velocity * delta;
        
    }
}