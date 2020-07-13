import Level from './level';
import Main from './main';
import Ghost from './ghost';

export default class Pacman {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.startedGhost = false;

        window.addEventListener("keydown", (e) => this.registerEvents(e));
        this.score = document.getElementById("score");
        this.restart();
    }

    restart() {
        this.level = new Level(this.dimensions);
        this.main = new Main(this.dimensions);
        this.ghost = new Ghost(this.dimensions);

        this.animate();
    }

    registerEvents(e) {
        e.preventDefault();

        if (e.keyCode === 39) {
            this.main.move("right");
        } else if (e.keyCode === 37) {
            this.main.move("left");
        } else if (e.keyCode === 38) {
            this.main.move("up");
        } else if (e.keyCode === 40) {
            this.main.move("down");
        } 
 
        // put on end because then there will be lag
        if (!this.startedGhost) {
            window.myAnimation = setInterval(() => { this.animate() }, 1000);
            this.startedGhost = true;
        }
    }

    animate() {
        this.level.animate(this.ctx);
        this.main.animate(this.ctx);
        this.ghost.animate(this.ctx);
        this.drawScore();
        this.detectCollision();
    }

    drawScore() {
        this.score.innerHTML = this.main.score;
    }

    detectCollision() {
        if ((this.main.x === this.ghost.redX && this.main.y === this.ghost.redY) ||
            (this.main.x === this.ghost.pinkX && this.main.y === this.ghost.pinkY) ||
            (this.main.x === this.ghost.orangeX && this.main.y === this.ghost.orangeY) ||
            (this.main.x === this.ghost.blueX && this.main.y === this.ghost.blueY) ) {
                clearInterval(window.myAnimation);
                this.main.die(this.ctx);
                this.ghost.removeGhosts(this.ctx);
                
        }
    }
}