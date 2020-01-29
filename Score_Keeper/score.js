var p1 = document.querySelector("#p1")
var p2 = document.querySelector("#p2")
var score1 = document.querySelector("#score1")
var score2 = document.querySelector("#score2")
var reset = document.querySelector("#reset")
var winningScore = document.querySelector("p span")
var input = document.querySelector("input")
var p1score = 0
var p2score = 0
var gameOver = false
var maxScore = 5

p1.addEventListener("click", function(){
    if(!gameOver){
        p1score++
        if(p1score === maxScore){
            score1.classList.add("won")
            gameOver = true
        }
        score1.textContent = p1score         
    }

})

p2.addEventListener("click", function(){
    if(!gameOver){
        p2score++
        if(p2score === maxScore){
            score2.classList.add("won")
            gameOver = true
        }
        score2.textContent = p2score
    }
})

reset.addEventListener("click", function(){
    p1score =0
    p2score =0
    score1.textContent = 0
    score2.textContent = 0
    score2.classList.remove("won")
    score1.classList.remove("won")
    gameOver = false
})
function resetFunc(){
    p1score =0
    p2score =0
    score1.textContent = 0
    score2.textContent = 0
    score2.classList.remove("won")
    score1.classList.remove("won")
    gameOver = false
    input.reset();
}
input.addEventListener("change" , function(){
    maxScore = Number(input.value)
    winningScore.textContent = input.value
    resetFunc()
})