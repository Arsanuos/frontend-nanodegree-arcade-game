# Frontend-nanodegree-arcade-game(Frogger-Like-Game-Project)
## Docs

The repository contains css, images, and js folders, as well as an index.html and a README.md file. Once you have downloaded the files we have provided, you will have to edit app.js to build the game.

* The css folder contains a style.css file which you do not need to edit
* The images folder contains the png image files, which are used when displaying the game. The images for the player and enemy     character are going to be loaded from this folder.
* The js folder also contains the app engine needed to run the game and a resources.js file. You do not need to edit these files.
* index.html - opening index.html should load the game
* README.md should contain instructions on how to load and play the game.


Inside the app.js file, implementation of the Player and the Enemy classes, using Object-Oriented JavaScript:

The Enemy function, which initiates the Enemy by:
* Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
* Setting the Enemy initial location.
* Setting the Enemy speed.

The update method for the Enemy:

* Updates the Enemy location.

The Player function, which initiates the Player by:

* Loading the image by setting this.sprite to the appropriate image in the image folder (use the code from the Enemy function as an example on how to do that)
* Setting the Player initial location 

* The update method for the Player (can be similar to the one for the Enemy)
* The render method for the Player (use the code from the render method for the Enemy)
* The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:

* Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
* Recall that the player cannot move off screen.
 * If the player reaches the water the game should be reset by moving the player back to the initial location.

## About
This game was implemented in javascript as a final project for  Object-Oriented JavaScript course at udacity.

## How to play
Just download this repo and open index.html file in your browser.
