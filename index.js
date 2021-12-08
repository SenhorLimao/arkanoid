import Paddle from './paddle.js';
import BlockGrid from './blockgrid.js';
import Ball from './ball.js';
import mapgrid from './grids.js';
let blockgrid = new BlockGrid(document.getElementById('blockgrid'), mapgrid.maps[0]);

let paddle = new Paddle(document.getElementById('paddle'));
document.addEventListener('mousemove', e=>{
    paddle.position = (e.x/window.innerWidth)*100;
})

let ball = new Ball(document.getElementById('ball'));

let lastTime=null
function update(time){
    if (lastTime!=null && ball.inGame){
        let delta = time - lastTime;
        ball.update(delta, paddle.rect(), blockgrid.getFlattenBlocks());
    }
    lastTime = time;

    window.requestAnimationFrame(update);
}

    window.requestAnimationFrame(update);
