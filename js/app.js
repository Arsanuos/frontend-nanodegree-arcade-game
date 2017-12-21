//number of enemies.
var numberOfEnemies = 7;
//column width as a constant.
var colWidth = 101;
//row width as a constant.
var rowWidth = 83;

//generates random from start inclusive to end inclusive.
var random = function(start,end){
  return Math.floor(Math.random() * (end - start +1) ) + start;
}

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //intialize enemy.
    this.reset();
    this.x = 0;
    this.y = 0;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //speed is used to make some enemies abit more faster than the others
    //for a better performance.
    this.col = this.col + dt + this.speed;
    this.x = this.col * colWidth;
    this.y = this.row * rowWidth;
    //reset if the player reached the end.
    if(this.col > 4){
      this.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Reset the enemy with inital random values.
Enemy.prototype.reset = function(){
  this.col =  -1 * random(1,4);
  this.row = random(1,3);
  this.speed = Math.random() * .01;
}



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var Player = function(){
  this.sprite = 'images/char-boy.png';
  this.reset();
  this.x = 0;
  this.y = 0;
}
//Extends enemy prototype with some modifications.
Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;

//updates player position.
Player.prototype.update = function(){
  this.x = this.col * colWidth;
  this.y = this.row * rowWidth;
}

//reset palyer position if the player failed or managed to reach the end.
Player.prototype.reset = function(){
  this.col = 2;
  this.row = 5;
}


//handle keyboard inputs
Player.prototype.handleInput = function(key){
  if(key === 'left'){
    this.col--;
    if(this.col < 0){
      this.col++;
    }
  }else if(key === 'right'){
    this.col++;
    if(this.col > 4){
      this.col--;
    }
  }else if(key === 'up'){
    this.row--;
    if(this.row < 0){
      this.row++;
    }
  }else if(key === 'down'){
    this.row++;
    if(this.row > 5){
      this.row--;
    }
  }
  //reset if the player reached the end.
  if(this.row === 0){
    this.reset();
  }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();
var allEnemies = [];
for(var i = 0 ;i < numberOfEnemies; i++){
  allEnemies.push(new Enemy());
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
