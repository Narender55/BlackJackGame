let player = {
    name : "Alexander",
    chips : 200
}

let cards =[]
let sum = 0
let message = ""
isAlive = false
hasBlackjack = false
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent =player.name + ":  $" + 200




function randomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 10
    }else{
        return randomNumber
    }
}



function startGame(){

    let firstCard = randomCard()
    let secondCard = randomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    isAlive = true
    renderGame()
}



function renderGame(){

    cardsEl.textContent = "cards: "
    for( let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum; " + sum

    if(sum <= 20){

        message = "do you wana draw a new card?"

    }else if(sum === 21){

        message = "you'hv got blackjack! 🥳"
        hasBlackjack = true
    }else{

        message ="you' re out of the game 😢"
        isAlive = false
    }

   messageEl.textContent = message
}

function newCard(){

    if(isAlive === true && hasBlackjack === false){

        let card = randomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}