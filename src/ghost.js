import { loadImage } from './util';
import { RedMap, PinkMap, OrangeMap, BlueMap } from './board';

export default class Ghost {
    constructor(dimensions) {
        this.dimensions = dimensions;

        // starting locations of ghosts
        this.redX = 270;
        this.redY = 210;
        this.pinkX = 270;
        this.pinkY = 270;
        this.orangeX = 300;
        this.orangeY = 300;
        this.blueX = 330;
        this.blueY = 270;

        // maps of each ghost
        this.redMap = RedMap;
        this.pinkMap = PinkMap;
        this.orangeMap = OrangeMap;
        this.blueMap = BlueMap;

        // first exit the ghosts inside the "cage"
        this.pinkExit();
        this.orangeExit();
        this.blueExit();
    }

    animate(ctx) {
        this.drawGhost(ctx);
        this.moveRed(ctx);
        this.movePink(ctx);
        this.moveOrange(ctx);
        this.moveBlue(ctx);
    }

    drawGhost(ctx) {
        // initially draw
        // pink
        // eyes up
        loadImage('../images/ghosts.png')
            .then(image => {
                ctx.drawImage(image,
                    180, 380,
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
                    580, 180,
                    180, 180,
                    this.blueX-13, this.blueY-13,
                    30, 30)
            });
    }

    moveRed(ctx) {
        // 1: right
        // 2: up
        // 3: left
        // 4: down
        if (this.redMap[((this.redY)/30) - 1][((this.redX+30)/30) -1] === 1) {
            this.redX += 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        0, 0,
                        180, 180,
                        this.redX - 13, this.redY - 13,
                        30, 30)
                });
        } else if (this.redMap[((this.redY-30) / 30) - 1][((this.redX) / 30) - 1] === 2) {
            this.redY -= 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        180, 0,
                        180, 180,
                        this.redX - 13, this.redY - 13,
                        30, 30)
                });
            
        } else if (this.redMap[((this.redY) / 30) - 1][((this.redX - 30) / 30) - 1] === 3) {
            this.redX -= 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        180, 180,
                        180, 180,
                        this.redX - 13, this.redY - 13,
                        30, 30)
                });
        } else if (this.redMap[((this.redY+30) / 30) - 1][((this.redX) / 30) - 1] === 4) {
            this.redY += 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        0, 180,
                        180, 180,
                        this.redX - 13, this.redY - 13,
                        30, 30)
                });
        }
    }

    movePink(ctx) {
        // 1: right
        // 2: up
        // 3: left
        // 4: down
        if (this.pinkMap[((this.pinkY) / 30) - 1][((this.pinkX + 30) / 30) - 1] === 1) {
            this.pinkX += 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        0, 380,
                        180, 180,
                        this.pinkX - 13, this.pinkY - 13,
                        30, 30)
                });
        } else if (this.pinkMap[((this.pinkY - 30) / 30) - 1][((this.pinkX) / 30) - 1] === 2) {
            this.pinkY -= 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        180, 380,
                        180, 180,
                        this.pinkX - 13, this.pinkY - 13,
                        30, 30)
                });
        } else if (this.pinkMap[((this.pinkY) / 30) - 1][((this.pinkX - 30) / 30) - 1] === 3) {
            this.pinkX -= 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        180, 560,
                        180, 180,
                        this.pinkX - 13, this.pinkY - 13,
                        30, 30)
                });
        } else if (this.pinkMap[((this.pinkY + 30) / 30) - 1][((this.pinkX) / 30) - 1] === 4) {
            this.pinkY += 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        0, 560,
                        180, 180,
                        this.pinkX - 13, this.pinkY - 13,
                        30, 30)
                });
        }
    }

    moveOrange(ctx) {
        // 1: right
        // 2: up
        // 3: left
        // 4: down
        if (this.orangeMap[((this.orangeY) / 30) - 1][((this.orangeX + 30) / 30) - 1] === 1) {
            this.orangeX += 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        400, 360,
                        180, 180,
                        this.orangeX - 13, this.orangeY - 13,
                        30, 30)
                });
        } else if (this.orangeMap[((this.orangeY - 30) / 30) - 1][((this.orangeX) / 30) - 1] === 2) {
            this.orangeY -= 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        580, 380,
                        180, 180,
                        this.orangeX - 13, this.orangeY - 13,
                        30, 30)
                });
        } else if (this.orangeMap[((this.orangeY) / 30) - 1][((this.orangeX - 30) / 30) - 1] === 3) {
            this.orangeX -= 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        580, 560,
                        180, 180,
                        this.orangeX - 13, this.orangeY - 13,
                        30, 30)
                });
        } else if (this.orangeMap[((this.orangeY + 30) / 30) - 1][((this.orangeX) / 30) - 1] === 4) {
            this.orangeY += 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        400, 560,
                        180, 180,
                        this.orangeX - 13, this.orangeY - 13,
                        30, 30)
                });
        }
    }

    moveBlue(ctx) {
        // 1: right
        // 2: up
        // 3: left
        // 4: down
        if (this.blueMap[((this.blueY) / 30) - 1][((this.blueX + 30) / 30) - 1] === 1) {
            this.blueX += 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        380, 0,
                        180, 180,
                        this.blueX - 13, this.blueY - 13,
                        30, 30)
                });
        } else if (this.blueMap[((this.blueY - 30) / 30) - 1][((this.blueX) / 30) - 1] === 2) {
            this.blueY -= 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        580, 0,
                        180, 180,
                        this.blueX - 13, this.blueY - 13,
                        30, 30)
                });
        } else if (this.blueMap[((this.blueY) / 30) - 1][((this.blueX - 30) / 30) - 1] === 3) {
            this.blueX -= 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        580, 180,
                        180, 180,
                        this.blueX - 13, this.blueY - 13,
                        30, 30)
                });
        } else if (this.blueMap[((this.blueY + 30) / 30) - 1][((this.blueX) / 30) - 1] === 4) {
            this.blueY += 30;
            loadImage('../images/ghosts.png')
                .then(image => {
                    ctx.drawImage(image,
                        400, 180,
                        180, 180,
                        this.blueX - 13, this.blueY - 13,
                        30, 30)
                });
        }
    }

    pinkExit() {
        setTimeout(() => { this.pinkX += 30 }, 1000);
        setTimeout(() => { this.pinkY -= 30 }, 2000);
        setTimeout(() => { this.pinkY -= 30 }, 3000);
    }
    
    orangeExit() {
        setTimeout(() => { this.orangeY -= 30 }, 2000);
        setTimeout(() => { this.orangeY -= 30 }, 3000);
        setTimeout(() => { this.orangeY -= 30 }, 4000);
    }
    
    blueExit() {
        setTimeout(() => {this.blueX -= 30}, 3000);
        setTimeout(() => {this.blueY -= 30}, 4000);
        setTimeout(() => {this.blueY -= 30}, 5000);
    }

    removeGhosts() {
        // moves the ghosts off canvas
        this.redX = 1000;
        this.pinkX = 1000;
        this.orangeX = 1000;
        this.blueX = 1000;
    }
}

