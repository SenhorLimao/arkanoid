const SPEED = 0.001
import {collided, getCollisions, leftCollision, rightCollision, topCollision, bottomCollision } from  './collisiontes.mjs'
export default class Powerup {
    constructor(x, y, type, paddle) {
        this.father = document.getElementsByTagName("body")[0]
        this.element = document.createElement('div')
        this.father.appendChild(this.element)
        this.element.classList.add('pwup')
        this.x = parseFloat(x.replace(/\D/g, ''))
        this.y = parseFloat(y.replace(/\D/g, ''))
        
        this.type = type
        this.paddle = paddle
        this.element.style.setProperty('--x', this.x)
        this.element.style.setProperty('--y', this.y)
    }
    get x(){
        return parseFloat(getComputedStyle(this.element).getPropertyValue('--x'));
    }
    set x(value){
    console.log("🚀 ~ file: powerup.js ~ line 24 ~ Powerup ~ setx ~ value", value)
        
        this.element.style.setProperty('--x', value);
    }

    get y(){
        return parseFloat(getComputedStyle(this.element).getPropertyValue('--y'));
    }

    set y(value){
        this.element.style.setProperty('--y', value);
    }

    rect() {
        return this.element.getBoundingClientRect()
    }

    update(){
        this.y+=0.3
        if(collided(this.rect(), this.paddle.rect())){
            console.log("powerup collided")
            this.father.removeChild(this.element)
            this.element=null
        }
        else if (this.y > 100) {
            console.log('caiu')
            this.father.removeChild(this.element)
            this.element=null
        }
    }
    
    done(){
        if (this.element) return false
        return true
    }
}