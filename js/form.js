class Form{
    constructor(){
    }
display(){
var title = createElement("h2")
title.html("car racing game")
title.position(150,20)

var input = createInput("name")
input.position(150,150)

var button = createButton("play")
button.position(150,190)

button.mousePressed(function(){
    input.hide()
    button.hide()
    var name = input.value()
    playerCount = playerCount+1
    player.updateCount(playerCount)
    player.updateName(name)

var greeting = createElement("h3")
greeting.html("hi "+ name)
greeting.position(150,200)
})
}
}