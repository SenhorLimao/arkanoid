// import Paddle from './paddle.js';
import Paddle from './paddle.js';
import BlockGrid from './blockgrid.js';
import Block from './block.js'
import Ball from './ball.js';
import mapgrid from './grids.js';

let level = 0
let blockgrid = new BlockGrid(document.getElementById('blockgrid'), mapgrid.maps[level]);

let paddle = new Paddle(document.getElementById('paddle'), 10);

document.addEventListener('mousemove', e=>{
    paddle.position = (e.x/window.innerWidth)*100;
})

let ball = new Ball(document.getElementById('ball'));

let lastTime=null
function update(time){
    if (lastTime!=null && ball.inGame){
        let delta = time - lastTime;

        ball.update(delta, paddle, blockgrid.getFlattenBlocks());
    }
    lastTime = time;

    window.requestAnimationFrame(update);
    if(blockgrid.hasNoChild()){
        level++;
        blockgrid = new BlockGrid(document.getElementById('blockgrid'), mapgrid.maps[level]);
        ball = new Ball(document.getElementById('ball'));
    }
}

    window.requestAnimationFrame(update);
