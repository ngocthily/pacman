import { Board } from './board';

export default class Level { 
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.board = Board;
        this.ready = true;
    }

    animate(ctx) {
        this.drawBackground(ctx);
    }

    drawBackground(ctx) {
        // Black background
        ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

        if (this.ready) {
            ctx.font = "26px Times New Roman";
            ctx.fillStyle = "yellow";
            ctx.fillText("READY!", 252, 400);
        } 

        // Tiles
        // Temporary just to see
        // var bw = this.dimensions.width-30;
        // var bh = this.dimensions.height-30;
        // var p = 15;
        // for (var x = 0; x <= bw; x += 30) {
        //     ctx.moveTo(0.5 + x + p, p);
        //     ctx.lineTo(0.5 + x + p, bh + p);
        // }

        // for (var x = 0; x <= bh; x += 30) {
        //     ctx.moveTo(p, 0.5 + x + p);
        //     ctx.lineTo(bw + p, 0.5 + x + p);
        // }
        // ctx.strokeStyle = "white";
        // ctx.stroke();
        this.drawLines(ctx);
        this.drawInside(ctx);
        this.drawDots(ctx);
    }

    drawLines(ctx) {
        // top line
        // outer
        ctx.beginPath();
        ctx.moveTo(30,30);
        ctx.lineTo(570,30);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        // inner
        ctx.beginPath();
        ctx.moveTo(40, 40);
        ctx.lineTo(560, 40);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();
        

        // left line
        // outer
        ctx.beginPath();
        ctx.moveTo(30, 30);
        ctx.lineTo(30, 240);
        ctx.lineTo(120, 240);
        ctx.lineTo(120, 270);
        ctx.lineTo(20, 270);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(20, 330);
        ctx.lineTo(120, 330);
        ctx.lineTo(120, 360);
        ctx.lineTo(30, 360);
        ctx.lineTo(30, 570);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        // inner
        ctx.beginPath();
        ctx.moveTo(40, 40);
        ctx.lineTo(40, 230);
        ctx.lineTo(130, 230);
        ctx.lineTo(130, 280);
        ctx.lineTo(20, 280);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(20, 320);
        ctx.lineTo(130, 320);
        ctx.lineTo(130, 370);
        ctx.lineTo(40, 370);
        ctx.lineTo(40, 560);
        ctx.lineTo(560, 560);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        // outer
        ctx.beginPath();
        ctx.moveTo(30, 570);
        ctx.lineTo(570, 570);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        // right
        // inner
        ctx.beginPath();
        ctx.moveTo(560, 40);
        ctx.lineTo(560, 230);
        ctx.lineTo(470, 230);
        ctx.lineTo(470, 280);
        ctx.lineTo(580, 280);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(580, 320);
        ctx.lineTo(470, 320);
        ctx.lineTo(470, 370);
        ctx.lineTo(560, 370);
        ctx.lineTo(560, 560);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        // outer
        ctx.beginPath();
        ctx.moveTo(570, 30);
        ctx.lineTo(570, 240);
        ctx.lineTo(480, 240);
        ctx.lineTo(480, 270);
        ctx.lineTo(580, 270);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(580, 330);
        ctx.lineTo(480, 330);
        ctx.lineTo(480, 360);
        ctx.lineTo(570, 360);
        ctx.lineTo(570, 570);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();
    }   

    drawInside(ctx) {
        // letter n
        ctx.beginPath();
        ctx.moveTo(80, 80);
        ctx.lineTo(160, 80);
        ctx.moveTo(80, 80);
        ctx.lineTo(80, 190);
        ctx.lineTo(100, 190);
        ctx.lineTo(100, 100);
        ctx.lineTo(140, 100);
        ctx.lineTo(140, 190);
        ctx.lineTo(160, 190);
        ctx.lineTo(160, 80);
        ctx.strokeStyle = "#fe00cf";
        ctx.stroke();

        // letter g
        ctx.beginPath();
        ctx.moveTo(200, 80);
        ctx.lineTo(280, 80);
        ctx.moveTo(200, 80);
        ctx.lineTo(200, 190);
        ctx.lineTo(280, 190);
        ctx.lineTo(280, 140);
        ctx.lineTo(260, 140);
        ctx.lineTo(260, 170);
        ctx.lineTo(220, 170);
        ctx.lineTo(220, 100);
        ctx.lineTo(280, 100);
        ctx.lineTo(280, 80);
        ctx.strokeStyle = "#fe00cf";
        ctx.stroke();

        // letter O
        ctx.beginPath();
        ctx.moveTo(320, 80);
        ctx.lineTo(400, 80);
        ctx.lineTo(400, 190);
        ctx.lineTo(320, 190);
        ctx.lineTo(320, 80);
        ctx.moveTo(350, 110);
        ctx.lineTo(370, 110);
        ctx.lineTo(370, 160);
        ctx.lineTo(350, 160);
        ctx.lineTo(350, 110);
        ctx.strokeStyle = "#fe00cf";
        ctx.stroke();

        // letter c
        ctx.beginPath();
        ctx.moveTo(440, 80);
        ctx.lineTo(520, 80);
        ctx.lineTo(520, 100);
        ctx.lineTo(460, 100);
        ctx.lineTo(460, 150);
        ctx.lineTo(520, 150);
        ctx.lineTo(520, 190);
        ctx.lineTo(440, 190);
        ctx.lineTo(440, 80);
        ctx.strokeStyle = "#fe00cf";
        ctx.stroke();

        // left line to rectangle
        ctx.beginPath();
        ctx.moveTo(170, 230);
        ctx.lineTo(190, 230);
        ctx.lineTo(190, 370);
        ctx.lineTo(170, 370);
        ctx.lineTo(170, 230);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        // rectangle with ghosts insides
        // top
        // left
        // outer
        ctx.beginPath();
        ctx.moveTo(230, 230);
        ctx.lineTo(280, 230);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        // inner
        ctx.beginPath();
        ctx.moveTo(240, 240);
        ctx.lineTo(280, 240);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        // white part
        ctx.fillStyle = "lavender";
        ctx.fillRect(280, 230, 40, 10);

        // right
        // outer
        ctx.beginPath();
        ctx.moveTo(320, 230);
        ctx.lineTo(370, 230);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        // inner
        ctx.beginPath();
        ctx.moveTo(320, 240);
        ctx.lineTo(360, 240);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        // rest
        // outer
        ctx.beginPath();
        ctx.moveTo(370, 230);
        ctx.lineTo(370, 370);
        ctx.lineTo(230, 370);
        ctx.lineTo(230, 230);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        // inner
        ctx.beginPath();
        ctx.moveTo(360, 240);
        ctx.lineTo(360, 360);
        ctx.lineTo(240, 360);
        ctx.lineTo(240, 240);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        // right rectangle
        ctx.beginPath();
        ctx.moveTo(410, 230);
        ctx.lineTo(410, 370);
        ctx.lineTo(430, 370);
        ctx.lineTo(430, 230);
        ctx.lineTo(410, 230);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        // lower letters
        // t
        ctx.beginPath();
        ctx.moveTo(140,410)
        ctx.lineTo(160, 410);
        ctx.lineTo(160, 440);
        ctx.lineTo(190, 440);
        ctx.lineTo(190, 460);
        ctx.lineTo(160, 460);
        ctx.lineTo(160, 500);
        ctx.lineTo(190, 500);
        ctx.lineTo(190, 520);
        ctx.lineTo(140, 520);
        ctx.lineTo(140, 460);
        ctx.lineTo(110, 460);
        ctx.lineTo(110, 440);
        ctx.lineTo(140, 440);
        ctx.lineTo(140, 410);
        ctx.strokeStyle = "#fe00cf";
        ctx.stroke();

        // h
        ctx.beginPath();
        ctx.moveTo(250, 410);
        ctx.lineTo(250, 470);
        ctx.lineTo(310, 470);
        ctx.lineTo(310, 520);
        ctx.lineTo(290, 520);
        ctx.lineTo(290, 490);
        ctx.lineTo(250, 490);
        ctx.lineTo(250, 520);
        ctx.lineTo(250, 520);
        ctx.lineTo(230, 520);
        ctx.lineTo(230, 410);
        ctx.lineTo(250, 410);
        ctx.strokeStyle = "#fe00cf";
        ctx.stroke();

        // i 
        // dot of i
        ctx.beginPath();
        ctx.moveTo(350, 410);
        ctx.lineTo(350, 430);
        ctx.lineTo(370, 430);
        ctx.lineTo(370, 410);
        ctx.lineTo(350, 410);
        ctx.strokeStyle = "#fe00cf";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(350, 470);
        ctx.lineTo(370, 470);
        ctx.lineTo(370, 520);
        ctx.lineTo(350, 520);
        ctx.lineTo(350, 470);
        ctx.strokeStyle = "#fe00cf";
        ctx.stroke();

        // letter l
        ctx.beginPath();
        ctx.moveTo(410, 410);
        ctx.lineTo(430, 410);
        ctx.lineTo(430, 520);
        ctx.lineTo(410, 520);
        ctx.lineTo(410, 410);
        ctx.strokeStyle = "#fe00cf";
        ctx.stroke();

        // letter y
        ctx.beginPath();
        ctx.moveTo(470, 410);
        ctx.lineTo(490, 410);
        ctx.lineTo(490, 440);
        ctx.lineTo(500, 440);
        ctx.lineTo(500, 410);
        ctx.lineTo(520, 410);
        ctx.lineTo(520, 520);
        ctx.lineTo(470, 520);
        ctx.lineTo(470, 500);
        ctx.lineTo(500, 500);
        ctx.lineTo(500, 460);
        ctx.lineTo(470, 460);
        ctx.lineTo(470, 410);
        ctx.strokeStyle = "#fe00cf";
        ctx.stroke();

        // fill in spots so no more two squares next to one
        // colon left to t
        ctx.beginPath();
        ctx.moveTo(80, 410)
        ctx.lineTo(100, 410);
        ctx.lineTo(100, 460);
        ctx.lineTo(80, 460);
        ctx.lineTo(80, 410);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(80, 470)
        ctx.lineTo(100, 470);
        ctx.lineTo(100, 520);
        ctx.lineTo(80, 520);
        ctx.lineTo(80, 470);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(200, 410);
        ctx.lineTo(220, 410);
        ctx.lineTo(220, 430);
        ctx.lineTo(200, 430);
        ctx.lineTo(200, 410);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(290, 410);
        ctx.lineTo(310, 410);
        ctx.lineTo(310, 430);
        ctx.lineTo(290, 430);
        ctx.lineTo(290, 410);
        ctx.strokeStyle = "#be00fe";
        ctx.stroke();
    }

    drawDots(ctx) {
        // big dots
        for(let i=0; i< this.board[0].length; i++) {
            for(let j=0; j< this.board.length; j++) {
                if (this.board[i][j] === 3) {
                    ctx.beginPath();
                    ctx.arc((j+1)*30, (i+1)*30, 6, 0, 2 * Math.PI);
                    ctx.fillStyle = "lavender";
                    ctx.fill();
                }
            }
        }

        // tiny dots
        for (let i = 0; i < this.board[0].length; i++) {
            for (let j = 0; j <this.board.length; j++) {
                if (this.board[i][j] === 2) {
                    ctx.beginPath();
                    ctx.arc((j + 1) * 30, (i + 1) * 30, 2, 0, 2 * Math.PI);
                    ctx.fillStyle = "lavender";
                    ctx.fill();
                }
            }
        }
    }

    checkCoins() {
        for(let i=0; i< this.board.length; i++) {
            if (this.board[i].some(el => (el === 2 || el === 3))) {
                return false;
            }
        }
        return true;
    }

}