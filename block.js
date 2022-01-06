import map_block from './map_block.json' assert {type: 'json'}
import Powerup from './powerup.js';
export default class Block {
    constructor(element, x, y, width, type){
        this.type = {...map_block[type]};
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
    collided(paddle){
        
        console.log("🚀 ~ file: block.js ~ line 30 ~ Block ~ collided ~ this.type.toughness", this)
        this.type.toughness--
        if(this.type.toughness == 0){
            this.element.remove();
            if(this.type.powerup){
                console.log("🚀 ~ file: block.js ~ line 37 ~ Block ~ collided ~ this.element.style.getPropertyValue('left')", this.element.style.getPropertyValue('left'))
                let powerup = new Powerup(this.element.style.getPropertyValue('left'), this.element.style.getPropertyValue('top'), this.type.powerup, paddle)
                return powerup
            }
        }
    }


}