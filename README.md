# PAC-MAN
<p align="center">
<img src = "https://user-images.githubusercontent.com/53027578/87837983-4f317d80-c84a-11ea-8551-4969c6611057.png" width= "1200">
</p>

# About
It's pacman and who doesn't love pacman

# Technologies Used
* HTML5 and CSS3
* Javascript

# Other
* Font Awesome
  * For a few fonts
* Pixilart
  * To make some pixel characters and editing
* pacman logo 
  * Used fonts from RingoStarr39 on Deviant Art
* Music
  * By youtuber Arsenic1987

# Gameplay
* Click any key to start game
* Use "WASD" or arrows keys to move
* Collect all the dots to win
* Turn the ghosts eatable by eating a big dot

The main Class is where pacman's functionalities are at. If a user clicks a certain direction it tells pacman to move in that direction. It checks the board, where each number symbolizes either an empty space, a wall, a small dot, or a big dot, and checks if it is able to move there. If pacman is able to move, then it will move, check to see if it is in the spot when it can move right from the right side to left side and vice versa, change how wide its mouth is, and collect the dots if there is any there.

``` Javascript
// main.js
// just a snippet of the right direction

if (way === "right") {
    this.right = true;
    if (this.board[Math.round(this.y / 30) - 1][Math.round(this.x / 30)] !== 1
        && this.board[Math.floor(this.y / 30) - 1][Math.floor(this.x / 30)] !== 1) {
            this.x+=30;
            this.switchSide();
            this.moveMouth();
            this.collectCoin();
     }
}
```

# Tasks
- [x] Design background (the walls)
- [x] Add small dots and bigger dots as coins to the background
- [x] Add pacman and move pacman in all four directions with four different ways the mouth is towards
- [x] Animate pacman so it looks like he's eating
- [x] Let pacman move from the left end to the right end or vice versa through the tunnel
- [x] Add ghosts and make the move when pacman first moves
- [x] Make pacman die with different sprites (dying animation)
- [x] Have three lives showing and decreases each time if pacman collides with a ghost
- [x] Have "game over" text when you lose
- [x] Have "you won" text when you win
- [x] Click spacebar to reset game
- [x] When pacman eats a bigger dot to turn the ghosts to eatable and earn higher score
- [x] Add instructions to the side of the game
- [x] Add music
- [x] CSS styling to make page look more appealing (less white space)
- [x] README

#### Working on
- [ ] Smooth out glitches
- [ ] When you eat a ghost to have just their eyes move back to the cage
- [ ] Sound effects (finding the sounds and making it the same BPM)
- [ ] Restart button
- [ ] Add fruits
- [ ] Edit movement of ghosts so they follow how the original ones were like
- [ ] Keep track of players' scores

