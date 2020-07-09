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

        // 0: empty
        // 1: wall
        // 2: coin
        // 3: big coin
        this.board = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
            [1, 3, 1, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1, 3, 2, 2, 1],
            [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
            [1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
            [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1],
            [1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1],
            [0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0],
            [1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1],
            [1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1],
            [1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 1],
            [1, 3, 1, 2, 1, 2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 3, 1, 2, 1],
            [1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1],
            [1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
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

        if (way === "right") {
            // within bounds
            // this.x + 5 <= 540 && 
            // for right 
            // this.board[Math.round(this.y / 30) - 1][Math.round((this.x - 15) / 30)] !== 1
            if (this.board[Math.round(this.y / 30) - 1][Math.round((this.x - 15) / 30)] !== 1) {
                this.x+=5;
            }
            this.right = true;
        } else if (way === "left") {
            // this.x - 5 >= 60
            // this.board[Math.round(this.y/ 30) - 1][Math.round((this.x+15) / 30) - 2] !== 1
            if (this.board[Math.round(this.y / 30) - 1][Math.round((this.x + 15) / 30) - 2] !== 1) {
                this.x-=5;
            }
            this.left = true;
        } else if (way === "up") {
            // y increases from top of page to bottom
            // this.y - 5 >= 60
            // this.board[Math.round((this.y +15) / 30) -2][Math.round(this.x / 30) - 1] !== 1
            if (this.board[Math.round((this.y + 15) / 30) - 2][Math.round(this.x / 30) - 1] !== 1) {
                this.y-=5;
            }
            this.up = true;
        } else if (way === "down") {
            // this.y + 5 <= 540
            if (this.board[Math.round((this.y - 15) / 30)][Math.round(this.x / 30) - 1] !== 1) {
                this.y+=5;
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
    
}