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
        this.vulnerable = false;
        this.eatGhostScore = 0;

        window.addEventListener("keydown", (e) => this.registerEvents(e));
        this.score = document.getElementById("score");
        this.lives = document.getElementById("lives");
        this.restart();
    }

    restart() {
        this.listen = true;

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
        if (this.listen) {
            if (e.keyCode === 39) {
                window.rightMoves = setInterval(() => {
                    this.main.move("right");
                    if (this.main.turnGhost) {
                        this.turnAllGhostsVulnerable();
                        setTimeout(() => { this.turnGhostsBackNormal()}, 13000);
                    }
                    this.main.turnGhost = false;
                }, 300);
            } else if (e.keyCode === 37) {
                window.leftMoves = setInterval(() => {
                    this.main.move("left");
                    if (this.main.turnGhost) {
                        this.turnAllGhostsVulnerable();
                        setTimeout(() => { this.turnGhostsBackNormal()}, 13000);
                    }
                    this.main.turnGhost = false;
                }, 300);
            } else if (e.keyCode === 38) {
                window.upMoves = setInterval(() => {
                    this.main.move("up");
                    if (this.main.turnGhost) {
                        this.turnAllGhostsVulnerable();
                        setTimeout(() => { this.turnGhostsBackNormal() }, 13000);
                    }
                    this.main.turnGhost = false;
                }, 300);
            } else if (e.keyCode === 40) {
                window.downMoves = setInterval(() => {
                    this.main.move("down");
                    if (this.main.turnGhost) {
                        this.turnAllGhostsVulnerable();
                        setTimeout(() => { this.turnGhostsBackNormal() }, 13000);
                    } 
                    this.main.turnGhost = false;
                }, 300);
            } 
            else if (e.keyCode === 32) {
                // after losing all three lives
                this.startedGhost = false;
                this.life = 3;
                this.restart();
            }
        }
 
        // put on end because then there will be lag
        // press any key to start animation
        if (!this.startedGhost) {
            window.myAnimation = setInterval(() => { this.animate() }, 300);
            this.startedGhost = true;
        }
    }

    turnAllGhostsVulnerable() {
        this.ghost.redVulnerable = true;
        this.ghost.pinkVulnerable = true;
        this.ghost.orangeVulnerable = true;
        this.ghost.blueVulnerable = true;
        this.vulnerable = true;
    }

    turnGhostsBackNormal() {
        this.ghost.redVulnerable = false;
        this.ghost.pinkVulnerable = false;
        this.ghost.orangeVulnerable = false;
        this.ghost.blueVulnerable = false;
        this.vulnerable = false;
        this.eatGhostScore = 0;
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
            this.score.innerHTML = this.main.score + this.eatGhostScore;
        } else {
            this.score.innerHTML = this.totalScore + this.main.score + this.eatGhostScore;
        }
    }

    detectCollision() {
        if (!this.vulnerable
            && this.sameSpot()
            && this.life !== 0) {
                this.totalScore += this.main.score;
                clearInterval(window.myAnimation);
                // keep this because if you remove it the ghosts will still be detected
                // this.sameSpot() will keep returning true
                // we move them off the canvas
                this.ghost.removeGhosts();
                // pacman dying animation
                // disable moving while pacman is dying!!
                window.dying = setInterval(() => {
                    this.listen = false;
                    this.main.mouth -= 1;
                    // need to overlay background each time or else pacman will overlay its old one
                    this.level.animate(this.ctx);
                    this.main.animate(this.ctx)
                    if (this.main.mouth === -12) {
                        clearInterval(window.dying);
                        this.level.animate(this.ctx);
                        this.main.dead = true;
                        this.main.animate(this.ctx)
                    }
                }, 100)
                this.startedGhost = false;
                this.life -= 1;
                // clear interval here again cause when pacman dies and restarts he will
                // move a certain amount in the last direction if went if possible
                clearInterval(window.rightMoves);
                clearInterval(window.leftMoves);
                clearInterval(window.upMoves);
                clearInterval(window.downMoves);
                setTimeout(() => {this.restart()}, 3000);
        } else if (this.life === 0) {
            // lost all 3 lives
            // when game over remove pacman
            clearInterval(window.myAnimation);
            this.ghost.removeGhosts(this.ctx);
            // this.main.die();
            this.ctx.font = "24px Comic Sans MS";
            this.ctx.fillStyle = "red";
            setTimeout(() => {this.ctx.fillText("Game Over", 240, 400)}, 3000);
        } else if (this.ghost.redVulnerable
            && (this.main.x === this.ghost.redX && this.main.y === this.ghost.redY)) {
                // eating a ghost that's vulnerable
                // add score +200
                this.eatGhostScore += 200;
                // put ghost back to starting point and not vulnerable
                this.ghost.redX = 300;
                this.ghost.redY = 270;
                this.ghost.redVulnerable = false; 
                this.ghost.redExit();
                this.ghost.moveRed(this.ctx);
        } else if (this.ghost.pinkVulnerable
            && (this.main.x === this.ghost.pinkX && this.main.y === this.ghost.pinkY)) {
            // eating a ghost that's vulnerable
            // add score +200
            this.eatGhostScore += 200;
            // put ghost back to starting point and not vulnerable
            this.ghost.pinkX = 270;
            this.ghost.pinkY = 270;
            this.ghost.pinkVulnerable = false;
            this.ghost.pinkExit();
            this.ghost.movePink(this.ctx);
        } else if (this.ghost.orangeVulnerable
            && (this.main.x === this.ghost.orangeX && this.main.y === this.ghost.orangeY)) {
            // eating a ghost that's vulnerable
            // add score +200
            this.eatGhostScore += 200;
            // put ghost back to starting point and not vulnerable
            this.ghost.orangeX = 300;
            this.ghost.orangeY = 300;
            this.ghost.orangeVulnerable = false;
            this.ghost.orangeExit();
            this.ghost.moveOrange(this.ctx);
        } else if (this.ghost.blueVulnerable
            && (this.main.x === this.ghost.blueX && this.main.y === this.ghost.blueY)) {
            // eating a ghost that's vulnerable
            // add score +200
            this.eatGhostScore += 200;
            // put ghost back to starting point and not vulnerable
            this.ghost.blueX = 330;
            this.ghost.blueY = 270;
            this.ghost.blueVulnerable = false;
            this.ghost.blueExit();
            this.ghost.moveBlue(this.ctx);
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
        // edit to have pacman images
        this.lives.innerHTML = this.life;
    }
}