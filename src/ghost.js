import { loadImage } from './util';
import { RedMap, BlueMap } from './board';

export default class Ghost {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.redX = 270;
        this.redY = 210;
        this.pinkX = 270;
        this.pinkY = 270;
        this.orangeX = 320;
        this.orangeY = 300;
        this.blueX = 330;
        this.blueY = 270;
        this.redMap = RedMap;
        this.blueMap = BlueMap;
        this.blueExit();
    }

    animate(ctx) {
        this.drawGhost(ctx);
        this.move();
    }

    drawGhost(ctx) {
        // red
        // eyes right
        loadImage('../images/ghosts.png')
            .then(image => {
                ctx.drawImage(image, 
                    0, 0,
                    180, 180,
                    this.redX-13, this.redY-13,
                    30, 30)
            });

        // pink
        // eyes up
        loadImage('../images/ghosts.png')
            .then(image => {
                ctx.drawImage(image,
                    180, 360,
                    180, 180,
                    this.pinkX-13, this.pinkY-13,
                    30, 30)
            });

        // orange
        // eyes down
        loadImage('../images/ghosts.png')
            .then(image => {
                ctx.drawImage(image,
                    400, 560,
                    180, 180,
                    this.orangeX-13, this.orangeY-13,
                    30, 30)
            });
        
        
        // blue
        // eyes left
        loadImage('../images/ghosts.png')
            .then(image => {
                ctx.drawImage(image,
                    580, 160,
                    180, 180,
                    this.blueX-13, this.blueY-13,
                    30, 30)
            });

    }

    move() {
        // 1: right
        // 2: up
        // 3: left
        // 4: down
        if (this.redMap[((this.redY)/30) - 1][((this.redX+30)/30) -1] === 1) {
            this.redX += 30;
        } else if (this.redMap[((this.redY-30) / 30) - 1][((this.redX) / 30) - 1] === 2) {
            this.redY -= 30;
        } else if (this.redMap[((this.redY) / 30) - 1][((this.redX - 30) / 30) - 1] === 3) {
            this.redX -= 30;
        } else if (this.redMap[((this.redY+30) / 30) - 1][((this.redX) / 30) - 1] === 4) {
            this.redY += 30;
        }

        if (this.blueMap[((this.blueY) / 30) - 1][((this.blueX + 30) / 30) - 1] === 1) {
            this.blueX += 30;
        } else if (this.blueMap[((this.blueY - 30) / 30) - 1][((this.blueX) / 30) - 1] === 2) {
            this.blueY -= 30;
        } else if (this.blueMap[((this.blueY) / 30) - 1][((this.blueX - 30) / 30) - 1] === 3) {
            this.blueX -= 30;
        } else if (this.blueMap[((this.blueY + 30) / 30) - 1][((this.blueX) / 30) - 1] === 4) {
            this.blueY += 30;
        }
    }

    blueExit() {
        setTimeout(() => {this.blueX -= 30}, 1000);
        setTimeout(() => {this.blueY -= 30}, 2000);
        setTimeout(() => {this.blueY -= 30}, 3000);
    }
}


