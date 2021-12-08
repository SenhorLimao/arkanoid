const INITIAL_VEL=0.035
const SPEED_INCREMENT=0.005

export default class Ball {
    constructor(element){
        this.element = element;
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
        this.y = 98
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
        let heading = randomNumberBetween(Math.PI/6, Math.PI*5/6)
        this.direction = {x: Math.cos(heading), y: -Math.sin(heading)}
        this.velocity = INITIAL_VEL
        this.inGame = true
        // this.update(delta,paddleRects)
        removeEventListener('mousemove', this.mouseListener)
    }

    
    update(delta, paddleRects, blocks){
    
        this.x+=this.direction.x*this.velocity*delta
        this.y+=this.direction.y*this.velocity*delta
        if(this.rect().top<0){
            this.direction.y*=-1
        }
        if (this.rect().left<0 || this.rect().right>window.innerWidth){
            this.direction.x*=-1
        }
        let tmpBlock = null
        if (blocks.some(block => {
            if (block!==null){
                if(block.rect()){
                    tmpBlock = block
                    return this.isCollision(this.rect(), block.rect())
                }
            }
            return false
            })){

                // this.direction.x*=-1
                this.direction.y*=-1
                setTimeout(tmpBlock.collided(),250)
                this.velocity+=SPEED_INCREMENT
        }
        if (this.isCollision(this.rect(), paddleRects)){
            this.direction.y*=-1
        }

        if(this.rect().bottom>(window.innerHeight+50)){
            alert("Game Over")
            this.initialize()
        }
        // }
    }

    isCollision(ball, other){
        console.log("🚀 ~ file: ball.js ~ line 94 ~ isCollision ~ other", other)
        console.log("🚀 ~ file: ball.js ~ line 94 ~ isCollision ~ ball", ball)
        return ball.left <= other.right &&
            ball.right >= other.left &&
            ball.top <= other.bottom &&
            ball.bottom >= other.top
    }
}
function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min
}