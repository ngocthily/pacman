export default class Main {
    constructor(dimensions) {
        this.dimensions = dimensions;

        // starting position of pacman
        this.x = 300;
        this.y = 540;

        this.right = 0;
    }

    animate(ctx) {
        this.drawCharacter(ctx);
    }

    drawCharacter(ctx) {
        // mouth open pacman
        // pacman has weird white outline because i added the stoke to white in level (TEMP)
        let angleDiff = 0.10;
        let sub = this.right * angleDiff;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 15, (0.2 - sub) * Math.PI, (1.8 + sub) * Math.PI);
        ctx.lineTo(this.x-4, this.y);
        // then reverse it 
        ctx.closePath();
        ctx.fillStyle = "yellow";
        ctx.fill();
        
        // rotate for other directions (:
    }

    move(way) {
        if (way === "right") {
            this.x+=10;
            this.right+=1;
        } else if (way === "left") {
            this.x-=10;
        } else if (way === "up") {
            // y increases from top of page to bottom
            this.y-=10;
        } else if (way === "down") {
            this.y+=10;
        }
    }
}