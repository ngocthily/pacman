import Level from './level';
import Main from './main';

export default class Pacman {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };

        window.addEventListener("keydown", (e) => this.registerEvents(e))
        this.restart();
    }

    restart() {
        this.level = new Level(this.dimensions);
        this.main = new Main(this.dimensions);

        this.animate();
    }

    registerEvents(e) {
        e.preventDefault();
        if (e.keyCode === 39) {
            this.main.move("right")
        } else if (e.keyCode === 37) {
            this.main.move("left")
        } else if (e.keyCode === 38) {
            this.main.move("up")
        } else if (e.keyCode === 40) {
            this.main.move("down")
        }
        // put on end because then there will be lag
        this.animate();
    }

    animate() {
        this.level.animate(this.ctx);
        this.main.animate(this.ctx);
    }
}