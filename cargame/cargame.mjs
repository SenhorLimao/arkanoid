import Computer from "./classes/computer.js";
import Track from "./classes/track.js";
let computer = new Computer(document.getElementById("computer"), 0.035);
let track = new Track(document.getElementById("track"), 50, 10);
let lastTime = null
function update(time){
    if (lastTime!=null){
        let delta = time - lastTime;
        computer.update(delta);
        track.update(time)
    }
    lastTime = time;
    if (!computer.inScreen()){
        computer.reset()
    }
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);