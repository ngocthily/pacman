import { Board } from './board';

export default class Main {
    constructor(dimensions) {
        this.dimensions = dimensions;

        // starting position of pacman
        this.x = 300;
        this.y = 540;

        this.friction = 0.5;

        // starts the mouth at the "widest"
        // and closes mouth first before opening
        this.mouth = 0;
        this.opening = true;

        // sets right to true for its starting position
        this.right = true;
        this.left = false;
        this.up = false;
        this.down = false;

        // to keep score
        this.score = 0;
        this.board = Board;
    }

    animate(ctx) {
        this.drawCharacter(ctx);
    }

    drawCharacter(ctx) {
        // mouth open pacman
        let angleDiff = 0.05;
        let sub = this.mouth * angleDiff;
        ctx.beginPath();

        if (this.right) {
            ctx.arc(this.x, this.y, 13, (0.3 - sub) * Math.PI, (1.7 + sub) * Math.PI);
            ctx.lineTo(this.x - 4, this.y);
        } else if (this.left) {
            ctx.arc(this.x, this.y, 13, (1.3 - sub) * Math.PI, (0.7 +sub) * Math.PI);
            ctx.lineTo(this.x+4, this.y);
        } else if (this.up) {
            ctx.arc(this.x, this.y, 13, (1.8-sub) * Math.PI, (1.2+sub) * Math.PI);
            ctx.lineTo(this.x, this.y+4);
        } else if (this.down) {
            ctx.arc(this.x, this.y, 13, (0.8-sub) * Math.PI, (0.2+sub) * Math.PI);
            ctx.lineTo(this.x, this.y- 4);
        }

        ctx.closePath();
        ctx.fillStyle = "yellow";
        ctx.fill();
    }

    move(way) {
        this.resetDirection();
        this.scoreKeep = false;
        // handles the walls (boundaries)
        // and lets pacman continuous move in one direction until user clicks a diff arrow key
        if (way === "right") {
            this.right = true;
            if (this.board[Math.round(this.y / 30) - 1][Math.round(this.x / 30)] !== 1
                && this.board[Math.floor(this.y / 30) - 1][Math.floor(this.x / 30)] !== 1) {
                    this.x+=30;
                    this.switchSide();
                    this.moveMouth();
                    this.collectCoin();
                    this.scoreKeep = true;
            }
        } else if (way === "left") {
            this.left = true;
            if (this.board[Math.round(this.y / 30) - 1][Math.round(this.x / 30) - 2] !== 1
                && this.board[Math.floor(this.y / 30) - 1][Math.floor(this.x / 30) - 2] !== 1) {
                this.x -= 30;
                this.switchSide();
                this.moveMouth();
                this.collectCoin();
                this.scoreKeep = true;
            }
        } else if (way === "up") {
            this.up = true;
            if (this.board[Math.round(this.y / 30) - 2][Math.round(this.x / 30) - 1] !== 1
                && this.board[Math.floor(this.y / 30) - 2][Math.floor(this.x / 30) - 1] !== 1) {
                this.y -= 30;
                this.switchSide();
                this.moveMouth();
                this.collectCoin();
                this.scoreKeep = true;
            }

        } else if (way === "down") {
            this.down = true;
            if (this.board[Math.round(this.y / 30)][Math.round(this.x / 30) - 1] !== 1
                && this.board[Math.floor(this.y / 30)][Math.floor(this.x / 30) - 1] !== 1) {
                this.y += 30;
                this.switchSide();
                this.moveMouth();
                this.collectCoin();
                this.scoreKeep = true;
            }
        }
    }

    moveMouth() {
        if (this.opening) {
            this.mouth=5;
            this.opening = false;
        } else {
            this.mouth=0;
            this.opening = true;
        }
    }

    resetDirection() {
        this.right = false;
        this.left = false;
        this.up = false;
        this.down = false;
    }
    
    switchSide() {
        if (this.x === 30 && 295 <= this.y && this.y <= 310) {
            this.x = 570;
        } else if (this.x === 570 && 295 <= this.y && this.y <= 310) {
            this.x = 30;
        }
    }

    collectCoin() {
        let wholeNumX = (((this.x / 30) - 1) - Math.floor((this.x / 30) - 1)) === 0;
        let wholeNumY = (((this.y / 30) - 1) - Math.floor((this.y / 30) - 1)) === 0;

        if (wholeNumX && wholeNumY) {
            if (this.board[(this.y/30)-1][(this.x/30)-1] === 2) {
                this.board[(this.y / 30) - 1][(this.x / 30) - 1] = 0;
                this.score += 10;
                // small dots are worth 10 each
            } else if (this.board[(this.y / 30) - 1][(this.x / 30) - 1] === 3) {
                this.board[(this.y / 30) - 1][(this.x / 30) - 1] = 0;
                this.score += 50;
                // big dots are worth 50 each
            }
        }
    }

    die() {
        // this is where the dying sprites goes
        // console.log(this.mouth)
        this.mouth -= 1;
    }

}