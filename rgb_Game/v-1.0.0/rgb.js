var numSquares = 6;
var colors = generateColors(numSquares)
var boxes = document.querySelectorAll(".square")
var goal = pickColor();
var easyBtn = document.querySelector("#playEasy")
var hardBtn = document.querySelector("#playHard")
var targetColor = document.querySelector("#colorGoal")
//To display the color to be guessed by player.
targetColor.textContent = goal

var msg = document.querySelector("#msg")
var h1 = document.querySelector("h1")
var playButton = document.querySelector("#playButton")

easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected")
    easyBtn.classList.add("selected")
    h1.style.backgroundColor = "steelblue"
    playButton.textContent = "New Colors"
    msg.textContent = ""
    numSquares = 3;
    colors = generateColors(numSquares)
    goal = pickColor()
    targetColor.textContent = goal;
    for (let i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.backgroundColor = colors[i]
        }
        else {
            boxes[i].style.display = "none";
        }
    }
})
hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    h1.style.backgroundColor = "steelblue"
    playButton.textContent = "New Colors"
    msg.textContent = ""
    numSquares = 6
    colors = generateColors(numSquares)
    goal = pickColor()
    targetColor.textContent = goal;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colors[i]
        boxes[i].style.display = "block";

    }
})

playButton.addEventListener("click", function () {
    // generate new colors
    colors = generateColors(numSquares);
    // Pick a new target color
    goal = pickColor()
    //Change diplay color
    targetColor.textContent = goal
    msg.textContent = ""

    // Change color of squares.
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor = "steelblue"
    playButton.textContent = "New Colors"
})

for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[i]
    //Add click events 
    boxes[i].addEventListener("click", function () {
        //To check if the color guessed is correct
        if (this.style.backgroundColor === goal) {
            //loop to change color of all boxes
            for (let j = 0; j < boxes.length; j++) {
                boxes[j].style.backgroundColor = goal
                h1.style.backgroundColor = goal
                playButton.textContent = "Play again ?"
            }
            msg.textContent = "Correct!"
        } else {
            // If wrongly guessed boxes change color to background screen.
            this.style.backgroundColor = "#232323";
            msg.textContent = "Try Again."
        }
    })
}

function pickColor() {
    let num = Math.floor(Math.random() * (colors.length))
    return colors[num]
}

function generateColors(num) {
    //make an array
    var array = []
    //add num random colors to array
    for (let i = 0; i < num; i++) {
        //get random colors
        array.push(randomColor())
    }
    // return array
    return array;
}

function randomColor() {
    //"red" amount
    var r = Math.floor(Math.random() * 256)
    //"green" amount
    var g = Math.floor(Math.random() * 256)
    //"blue" amount
    var b = Math.floor(Math.random() * 256)
    //rgb(r, g, b)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
