import { loadImage } from './util';

export default class Ghost {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.redX = 300;
        this.redY = 210;
        this.pinkX = 270;
        this.pinkY = 270;
        this.orangeX = 300;
        this.orangeY = 300;
        this.blueX = 320;
        this.blueY = 270;
    }

    animate(ctx) {
        this.drawGhost(ctx);
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
                    this.blueX, this.blueY,
                    30, 30)
            });

    }
}
