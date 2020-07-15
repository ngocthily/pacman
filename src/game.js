import Level from './level';
import Main from './main';
import Ghost from './ghost';

export default class Pacman {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };

        this.startedGhost = false;
        this.life = 3;
        this.totalScore = 0;

        window.addEventListener("keydown", (e) => this.registerEvents(e));
        this.score = document.getElementById("score");
        this.lives = document.getElementById("lives");
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
        
        // needs to be window so we can clear it when pacman loses a game
        // clear interval here or else pacman will move in diagonals for not clearing previous setInterval
        // so it causes a bunch of setintervals to go together
        clearInterval(window.rightMoves);
        clearInterval(window.leftMoves);
        clearInterval(window.upMoves);
        clearInterval(window.downMoves);

        // checks detection of collision with another ghost every time it moves
        setInterval(() => { this.detectCollision() }, 300);

        if (e.keyCode === 39) {
            window.rightMoves = setInterval(() => {
                this.main.move("right");
            }, 300);
        } else if (e.keyCode === 37) {
            window.leftMoves = setInterval(() => {
                this.main.move("left");
            }, 300);
        } else if (e.keyCode === 38) {
            window.upMoves = setInterval(() => {
                this.main.move("up");
            }, 300);
        } else if (e.keyCode === 40) {
            window.downMoves = setInterval(() => {
                this.main.move("down");
            }, 300);
        } else if (e.keyCode === 32) {
            // after losing all three lives
            this.startedGhost = false;
            this.life = 3;
            this.restart();
        }
 
        // put on end because then there will be lag
        // press any key to start animation
        if (!this.startedGhost) {
            window.myAnimation = setInterval(() => { this.animate() }, 300);
            this.startedGhost = true;
        }
    }

    animate() {
        this.level.animate(this.ctx);
        this.main.animate(this.ctx);
        this.ghost.animate(this.ctx);

        this.drawScore();
        this.checkWin();
        this.drawLives();
    }

    drawScore() {
        // Adds on the score from the previous try
        if (this.totalScore < this.main.score) {
            this.score.innerHTML = this.main.score;
        } else {
            this.score.innerHTML = this.totalScore + this.main.score;
        }
    }

    detectCollision() {
        if ( this.sameSpot()
            && this.life !== 0) {
                this.totalScore += this.main.score;
                clearInterval(window.myAnimation);
                // dying sprites before going back to original spot
                this.ghost.removeGhosts();
                // for(let i)
                // setInterval(() => this.main.mouth -= 1)
                this.startedGhost = false;
                this.life -= 1;
                // clear interval here again cause when pacman dies and restarts he will
                // move a certain amount in the last direction if went if possible
                clearInterval(window.rightMoves);
                clearInterval(window.leftMoves);
                clearInterval(window.upMoves);
                clearInterval(window.downMoves);
                this.restart();
            } else if (this.life === 0) {
            // lost all 3 lives
            // when game over remove pacman
            clearInterval(window.myAnimation);
            this.ghost.removeGhosts(this.ctx);
            // this.main.die();
            this.ctx.font = "24px Comic Sans MS";
            this.ctx.fillStyle = "red";
            this.ctx.fillText("Game Over", 240, 400);
        }
    }

    sameSpot() {
        return (this.main.x === this.ghost.redX && this.main.y === this.ghost.redY) ||
            (this.main.x === this.ghost.pinkX && this.main.y === this.ghost.pinkY) ||
            (this.main.x === this.ghost.orangeX && this.main.y === this.ghost.orangeY) ||
            (this.main.x === this.ghost.blueX && this.main.y === this.ghost.blueY) 
    }

    checkWin() {
        if (this.level.checkCoins()) {
            clearInterval(window.myAnimation);
            this.ctx.font = "30px Arial";
            this.ctx.fillText("You won!", 250, 270);
        }
    }

    drawLives() {
        this.lives.innerHTML = this.life;
    }
}