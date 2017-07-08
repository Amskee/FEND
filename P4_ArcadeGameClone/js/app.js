//allEnemies array contains the enemy objects
var allEnemies = [];

var enemyPositions = [60, 140, 230]; //enemies are deployed in one of the three paths randomly

var reset = function(won) {
    //checks if won the game
    if(won === true) {
        alert("You won the game! Now challenge your friends!");
    }
    player.x = 200;
    player.y = 400;
};

/* Puts 3 enemies in the 3 distinct paths and 
   puts the forth enemy randomly in one of the paths
*/
var randomCount = 0; 
var getRandomPosition = function() {
    if(randomCount<3) {
        return enemyPositions[randomCount++];
    }
    randomCount = 0;
    return enemyPositions[ Math.floor(Math.random()*3) ];
};
//creates four enemies and puts them in one of the four paths randomly
var createEnemies = function() {
    allEnemies.push(new Enemy(-100, getRandomPosition() ));
    allEnemies.push(new Enemy(-100, getRandomPosition() ));
    allEnemies.push(new Enemy(-100, getRandomPosition() ));
    allEnemies.push(new Enemy(-100, getRandomPosition() ));
};

// initializes enemy's location, speed and sprite
var Enemy = function(x,y) {

    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random()*200)+100;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //checks enemy is within screen and resets when enemy has crossed the screen.
    if(this.x <= 505) 
        this.x += this.speed * dt;
    else {
        this.x = -100;
        this.y = getRandomPosition(); //puts the enemy in one of the 3 paths randomly.
    }
    //checks collision between this enemy and player.
    if(player.x <= this.x+80 && player.x >= this.x-80 && player.y <= this.y+40 && player.y >= this.y-40 )
        reset(false);
};

// Draws the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//Initializes player's location, keyboard input and sprite image.
var Player = function() {
    this.x = 200;
    this.y = 400;
    this.input = null; // handles the input key pressed
    this.sprite = 'images/char-boy.png';
};

// Updates player position based upon keyboard input.
Player.prototype.update = function() {
    switch(this.input) {
        case "up":
                this.y-=50;
                break;
        case "down":
            if(this.y!=400)
                this.y+=50;
            break;
        case "right":
            if(this.x!=400)
                this.x+=50;
            break;
        case "left":
            if(this.x>0)
                this.x-=50;
            break;
    }
    this.input = null;
    if(this.y<20) //checks if played reached water
        reset(true); //calls reset with 'true' since the game has be won.
};

// Draws the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// a handleInput() method.
Player.prototype.handleInput = function(input) {
    this.input = input;
};

// Places the player object in a variable called player
var player = new Player();
// Places all enemy objects in an array called allEnemies
createEnemies();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
