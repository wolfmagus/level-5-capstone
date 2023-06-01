// Create a div in html to place a square 
// Define the square's properties in css 
// Use event listeners to listen for mouse and keyboard events 
// Use a function inside the event listeners to update the square's color in css

var square = document.getElementById('square') // Store the square element in a variable called square

square.addEventListener("mouseover", function(){ //
    square.style.backgroundColor = "blue"
}) 

square.addEventListener("mousedown", function(){
    square.style.backgroundColor = "red"
})

square.addEventListener("mouseup", function(){
    square.style.backgroundColor = "yellow"
})
square.addEventListener("dblclick", function(){
    square.style.backgroundColor = "green"
})
square.addEventListener("mousewheel", function(){
    square.style.backgroundColor = "orange"
})

window.addEventListener("keydown", function(event){
    let keyPressed = event.key
    if(keyPressed === "b"){
        square.style.backgroundColor = "blue"
    } else if(keyPressed === "r"){
        square.style.backgroundColor = "red"
    } else if(keyPressed === "y"){
        square.style.backgroundColor = "yellow"
    } else if(keyPressed === "g"){
        square.style.backgroundColor = "green"
    }else if(keyPressed === "o"){
        square.style.backgroundColor = "orange"
    }else if(keyPressed === "p"){
        square.style.backgroundColor = "purple"
    }else if(keyPressed === "w"){
        square.style.backgroundColor = "white"
    }else if(keyPressed === "t"){
        square.style.backgroundColor = "teal"
    }
    
})