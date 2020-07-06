export default class Pacman {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
    }
}