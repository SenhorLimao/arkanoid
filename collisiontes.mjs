import ObjA from './objA.js';
import ObjB from './objB.js';


let objA = new ObjA(document.getElementById("objA"))
let objB = new ObjB(document.getElementById("objB"))


const collided = (a, b) =>{
    if (a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.height + a.y > b.y) {
            console.log("🚀 ~ file: collisiontes.mjs ~ line 9 ~ collision ~ collided")
        return true;
    }
    return false;
}

const getCollisions = (a, b) =>{
    // console.log("🚀 ~ file: collisiontes.mjs ~ line 9 ~ collision ~ b", b)
    // console.log("🚀 ~ file: collisiontes.mjs ~ line 9 ~ collision ~ a", a)
    let collisions = []
    if (collided(a,b)) {
        // return true;
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
        console.log("🚀 ~ file: collisiontes.mjs ~ line 9 ~ collision ~ right")
        return true
    }
    return false
}

const topCollision = (a, b) =>{
    if (b.y+b.height>a.y
        && b.y < a.y){
            console.log("🚀 ~ file: collisiontes.mjs ~ line 9 ~ collision ~ top")
            return true
        }
    return false
}

const bottomCollision = (a, b) =>{
    if (a.y+a.height>b.y
        && b.y+b.height>a.y+a.height){
            console.log("🚀 ~ file: collisiontes.mjs ~ line 9 ~ collision ~ bottom")
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
    // if (collided(objA.element.getBoundingClientRect(), objB.element.getBoundingClientRect())) {
    //     // console.log("collision")
    //     objA.color = "red"
    // }
    // else {
    //     objA.color = "white"
    // }
    console.log("🚀 ~ file: collisiontes.mjs ~ line 9 ~ collision ~ getCollisions", getCollisions(objA.element.getBoundingClientRect(), objB.element.getBoundingClientRect()))
})