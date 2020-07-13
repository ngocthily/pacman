import { Board } from './board';

export default class Main {
    constructor(dimensions) {
        this.dimensions = dimensions;

        // starting position of pacman
        this.x = 300;
        this.y = 540;

        // starts the mouth at the "widest"
        // and closes mouth first before opening
        this.mouth = 0;
        this.backwards = false; 

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
        // pacman has weird white outline because i added the stoke to white in level (TEMP)
        let angleDiff = 0.05;
        let sub = this.mouth * angleDiff;
        ctx.beginPath();

        if (this.right) {
            ctx.arc(this.x, this.y, 15, (0.3 - sub) * Math.PI, (1.7 + sub) * Math.PI);
            ctx.lineTo(this.x - 4, this.y);
        } else if (this.left) {
            ctx.arc(this.x, this.y, 15, (1.3 - sub) * Math.PI, (0.7 +sub) * Math.PI);
            ctx.lineTo(this.x+4, this.y);
        } else if (this.up) {
            ctx.arc(this.x, this.y, 15, (1.8-sub) * Math.PI, (1.2+sub) * Math.PI);
            ctx.lineTo(this.x, this.y+4);
        } else if (this.down) {
            ctx.arc(this.x, this.y, 15, (0.8-sub) * Math.PI, (0.2+sub) * Math.PI);
            ctx.lineTo(this.x, this.y- 4);
        }

        ctx.closePath();
        ctx.fillStyle = "yellow";
        ctx.fill();
    }

    move(way) {
        if (this.mouth === 0) {
            this.backwards = false;
        } else if (this.mouth === 5) {
            this.backwards = true;
        }

        if (this.backwards === true) {
            this.mouth -= 1;
        } else {
            this.mouth += 1;
        }

        this.resetDirection();
        this.switchSide();
        this.collectCoin();

        if (way === "right") {
            if (this.board[Math.round(this.y / 30) - 1][Math.round(this.x  / 30)] !== 1
                && this.board[Math.floor(this.y / 30) - 1][Math.floor(this.x / 30)] !== 1) {
                this.x+=30;
            }
            this.right = true;
        } else if (way === "left") {
            if (this.board[Math.round(this.y / 30) - 1][Math.round(this.x / 30) - 2] !== 1
                && this.board[Math.floor(this.y / 30) - 1][Math.floor(this.x / 30) - 2] !== 1) {
                this.x-=30;
            }
            this.left = true;
        } else if (way === "up") {
            if (this.board[Math.round(this.y / 30) - 2][Math.round(this.x / 30) - 1] !== 1
                && this.board[Math.floor(this.y / 30) - 2][Math.floor(this.x / 30) - 1] !== 1) {
                this.y-=30;
            }
            this.up = true;
        } else if (way === "down") {
            if (this.board[Math.round(this.y / 30)][Math.round(this.x / 30) - 1] !== 1
                && this.board[Math.floor(this.y / 30)][Math.floor(this.x / 30) - 1] !== 1) {
                this.y+=30;
            }
            this.down = true;
        }
    }

    resetDirection() {
        this.right = false;
        this.left = false;
        this.up = false;
        this.down = false;
    }
    
    switchSide() {
        if (this.x === 35 && 295 <= this.y && this.y <= 310) {
            this.x = 565;
        } else if (this.x === 565 && 295 <= this.y && this.y <= 310) {
            this.x = 35;
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
                this.score += 60;
                // big dots are worth 50 each
            }
        }
    }

    die(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 15, 0, 2 * Math.PI);
        ctx.lineTo(this.x - 4, this.y);
        ctx.closePath();
        ctx.fillStyle = "yellow";
        ctx.fill();
    }
}