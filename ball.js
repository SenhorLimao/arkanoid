const INITIAL_VEL=0.035
const SPEED_INCREMENT=0.001
import {collided, getCollisions, leftCollision, rightCollision, topCollision, bottomCollision } from  './collisiontes.mjs'

// require('./collisiontes.mjs')
export default class Ball {
    constructor(element){
        this.element = element;
        this.powerups = []
        this.initialize()
        
    }

    get x(){
        return parseFloat(getComputedStyle(this.element).getPropertyValue('--x'));
    }
    set x(value){
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

    initialize(){
        this.x = 50
        this.y = 96.5
        this.inGame = false
        addEventListener('keydown', (e) => {
            if(e.key === "Enter" && !this.inGame){
                this.inGame = true
                this.start()
            }
        })
        this.mouseListener = (e) => {
            this.x = (e.x/window.innerWidth)*100;
        }
        addEventListener('mousemove', this.mouseListener)
    }
    
    start(){
        // this.direction = 1
        // let heading = randomNumberBetween(Math.PI/6, Math.PI*5/6)
        
        this.heading = Math.PI/3
        let multiplier = Math.random()>0.5?1:-1
        this.direction = {x: Math.cos(this.heading)*multiplier, y: -Math.sin(this.heading)}
        this.velocity = INITIAL_VEL
        this.inGame = true
        // this.update(delta,paddleRects)
        removeEventListener('mousemove', this.mouseListener)
    }

    updateDirection(salt){

        if ((this.heading+salt)<5*Math.PI/12 && (this.heading+salt)>Math.PI/12){
            let multiplier = (this.direction.x/Math.abs(this.direction.x))
            this.heading = Math.abs(this.heading+salt*multiplier)
            this.direction = {x: Math.cos(this.heading)*multiplier, y: -Math.sin(this.heading)}
        }
    }

    update(delta, paddle, blocks){
        this.x+=this.direction.x*this.velocity*delta
        this.y+=this.direction.y*this.velocity*delta
        if(this.rect().top<=0){
            this.direction.y*=-1
        }
        if (this.rect().left<=0 || this.rect().right>=window.innerWidth){
            this.direction.x*=-1
        }
        let tmpBlock = null
        let tmpBlockRect = null
        
        if (blocks.some(block => {
            if (block!==null){
                if(block.rect()){
                    tmpBlock = block
                    tmpBlockRect = block.rect()
                    return this.isCollision(this.rect(), block.rect())
                }
            }
            return false
            })){

                // this.direction.x*=-1
                let collisions = getCollisions(tmpBlock.rect(), this.rect())
                if(collisions.indexOf('bottom')>-1){
                    this.direction.y*=-1
                }
                else if(collisions.indexOf('top')>-1){
                    this.direction.y*=-1
                }
                else if(collisions.indexOf('left')>-1){
                    this.direction.x*=-1
                } else if(collisions.indexOf('right')>-1){
                    this.direction.x*=-1
                }
                // setTimeout(tmpBlock.collided(),250)
                this.powerups.push(tmpBlock.collided(paddle))
                this.velocity+=SPEED_INCREMENT

            }
        if (this.isCollision(this.rect(), paddle.rect())){
            this.direction.y*=-1
            this.updateDirection((paddle.position-this.x)/20)
        }
        if (this.powerups.length>0){
            this.powerups.forEach(powerup => {
                if (powerup) {
                    if (powerup.done()) this.powerups.splice(this.powerups.indexOf(powerup),1)
                    powerup.update()
                    if (powerup.done()) this.powerups.splice(this.powerups.indexOf(powerup),1)
                }
                // console.log(powerup)
            })
        }


        // if (collided(this.rect(), paddle.rect())){
        //     console.log('🚀 ~ file: ball.js ~ line 107 ~ update ~ collided', getCollisions(paddle.rect(), this.rect()))

        // }

        if(this.rect().bottom>(window.innerHeight+50)){
            alert("Game Over")
            this.initialize()
        }
        // }
    }

    isCollision(ball, other){
        return ball.left <= other.right &&
            ball.right >= other.left &&
            ball.top <= other.bottom &&
            ball.bottom >= other.top
    }
}
function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min
}