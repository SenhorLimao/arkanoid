import ObjA from './objA.js';
import ObjB from './objB.js';


let objA = new ObjA(document.getElementById("objA"))
let objB = new ObjB(document.getElementById("objB"))



const collided = (a, b) =>{
    if (a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.height + a.y > b.y) {
        return true;
    }
    return false;
}

const getCollisions = (a, b) =>{
    let collisions = []
    if (collided(a,b)) {
            if (leftCollision(a, b)){
                collisions.push("left")
            }
            if (rightCollision(a, b)){
                collisions.push("right")
            }
            if (topCollision(a, b)){
                collisions.push("top")
            }
            if (bottomCollision(a, b)){
                collisions.push("bottom")
            }
    }
    return collisions
}

const leftCollision = (a, b) =>{
    if(a.x < b.x
        && a.x+a.width>b.x
        && a.x+a.width<b.x+b.width){
         return true
    } 
    return false
}

const rightCollision = (a, b) =>{
    if (b.x < a.x
        && b.x+b.width>a.x){
        return true
    }
    return false
}

const topCollision = (a, b) =>{
    if (b.y+b.height>a.y
        && b.y < a.y){
            return true
        }
    return false
}

const bottomCollision = (a, b) =>{
    if (a.y+a.height>b.y
        && b.y+b.height>a.y+a.height){
            return true
        }
    return false

}

document.addEventListener("keydown", function(event) {
    if(event.key=="ArrowRight") {
        objB.x += 1;
    }
    if(event.key=="ArrowLeft") {
        objB.x -= 1;
    }
    if(event.key=="ArrowUp") {
        objB.y -= 1;
    }
    if(event.key=="ArrowDown") {
        objB.y += 1;
    }
    
})

export {collided, getCollisions, leftCollision, rightCollision, topCollision, bottomCollision}