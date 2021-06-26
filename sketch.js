var database;
var position;
var form, game, player
var gameState =0
var playerCount

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
 game = new Game();
 game.getState()
 game.start()
}

function draw(){
  background("white");
  
  
}












//Database for Multi playerCar Racing Game { gameState: 0, playerCount: 0, player1: { name: "" }, player2: { name: "" } } Game : Read gameState from DB, Update gameState in DB. Start the game according to gameState if(gameState === 0){ create form object and Display form create player object and get player Count } Form: Title Input Button Greeting On button press{ Hide input and button Update playerCount Update playerName Display greeting Player: Get count() updateCount() update()