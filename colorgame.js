var colors = generateColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

// h1 rgb display
colorDisplay.textContent = pickedColor;


for (var i = 0; i < colors.length; i++) {
    // add inital colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    // add "click" listeners
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "CORRECT!"
            changeColors(clickedColor);
            document.querySelector("h1").style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!"
        }
    });
}


// change colors to picked color
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

// pick the color to be guessed
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// generate random rgb colors and push into array
function generateColors(num){
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}