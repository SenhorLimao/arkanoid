export default class Track {
    constructor(dom, x, inclination) {
        this.dom = dom;
        this.x = x;
        this.inclination = inclination;
        this.lastTime = null
        this.start()
    }

    get x() {
        return parseFloat(getComputedStyle(this.dom).getPropertyValue('--positionX'));
    }

    set x(value){
        this.dom.style.setProperty('--positionX', value);
    }

    get inclination() {
        return parseFloat(getComputedStyle(this.dom).getPropertyValue('--skew'));
    }
    set inclination(value) {
        this.dom.style.setProperty('--skew', value);
    }

    start() {
        addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                this.x -= 1;
            }
            if (e.key === 'ArrowLeft') {
                this.x += 1;
            }
        })
    }

    update(delta){
        if (this.lastTime === null) {
            this.lastTime = delta;
        }
        if (this.lastTime < delta - 10000){
            this.lastTime = delta;
            // this.x += this.inclination * delta;
            this.inclination = Math.random() * 60 - 30
            console.log("🚀 ~ file: track.js ~ line 25 ~ Track ~ update ~ this.skew", this.skew)
            console.log("🚀 ~ file: track.js ~ line 25 ~ Track ~ update ~ delta", delta)
            
        }

    }
}