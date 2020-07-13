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
        this.lives = document.getElementById("lives");
        this.restart();
        // starts with 3 lives
        this.life = 3;
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
        } else if (e.keyCode === 32) {
            // after losing all three lives
            this.startedGhost = false;
            this.life = 3;
            this.restart();
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
        this.checkWin();
    }

    drawScore() {
        this.score.innerHTML = this.main.score;
    }

    detectCollision() {
        if ((this.main.x === this.ghost.redX && this.main.y === this.ghost.redY) ||
            (this.main.x === this.ghost.pinkX && this.main.y === this.ghost.pinkY) ||
            (this.main.x === this.ghost.orangeX && this.main.y === this.ghost.orangeY) ||
            (this.main.x === this.ghost.blueX && this.main.y === this.ghost.blueY) 
            && this.life !== 0) {
                clearInterval(window.myAnimation);
                this.main.die(this.ctx);
                this.ghost.removeGhosts(this.ctx);
                this.restart();
                this.startedGhost = false;
                this.life -= 1;
        } else if (this.life === 0) {
            // lost all 3 lives
            clearInterval(window.myAnimation);
            this.main.die(this.ctx);
            this.ghost.removeGhosts(this.ctx);
            this.ctx.font = "24px Comic Sans MS";
            this.ctx.fillStyle = "red";
            this.ctx.fillText("Game Over", 240, 400);
        }
    }

    checkWin() {
        if (this.level.checkCoins()) {
            clearInterval(window.myAnimation);
            this.ctx.font = "30px Arial";
            this.ctx.fillText("You won!", 250, 270);
        }
    }
}