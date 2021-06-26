class Game{
    constructor(){
    }
getState(){
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value",function(data){
    gameState=data.val();
    })
}
updateState(gameState){
    database.ref("/").update({
        gameState:gameState
    })
}
start(){
    if(gameState===0){
        form = new Form();
        form.display();
        player = new Player();
        player.getCount();
    }
}
}