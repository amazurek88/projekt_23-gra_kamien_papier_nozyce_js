function playGame(yourMove){
// console.log(`${yourMove} clicked`)
    let moves = ['paper', 'rock', 'shears']
    // losuje od 0 do 1
    // 0-0,33 -> 0-1
    // 0,33-0,66 -> 1,2
    // 0,66-1 -> 2,3

    let computerMove = moves[Math.floor(Math.random()*(moves.length))]
    //printMessage(`Twój ruch: ${yourMove} Ruch komputera: ${computerMove}`)

    if(computerMove == 'rock' && yourMove == 'paper'){
        printMessage(`Wygrałeś! Ruch komputera: ${computerMove}, Twój ruch: ${yourMove}`)
    } else if (computerMove == 'rock' && yourMove =='shears'){
        printMessage(`Przegrałeś! Ruch komputera: ${computerMove}, Twój ruch: ${yourMove}`)
    } else if (computerMove == 'rock' && yourMove =='rock'){
        printMessage(`Remis! Ruch komputera: ${computerMove}, Twój ruch: ${yourMove}`)
    } else if(computerMove == 'paper' && yourMove == 'rock'){
        printMessage(`Przegrałeś! Ruch komputera: ${computerMove}, Twój ruch: ${yourMove}`)
    } else if (computerMove == 'paper' && yourMove =='shears'){
        printMessage(`Wygrałeś! Ruch komputera: ${computerMove}, Twój ruch: ${yourMove}`)
    } else if (computerMove == 'paper' && yourMove =='paper'){
        printMessage(`Remis! Ruch komputera: ${computerMove}, Twój ruch: ${yourMove}`)
    } else if(computerMove == 'shears' && yourMove == 'rock'){
        printMessage(`Wygrałeś! Ruch komputera: ${computerMove}, Twój ruch: ${yourMove}`)
    } else if (computerMove == 'shears' && yourMove =='paper'){
        printMessage(`Przegrałeś! Ruch komputera: ${computerMove}, Twój ruch: ${yourMove}`)
    } else if (computerMove == 'shears' && yourMove =='shears'){
        printMessage(`Remis! Ruch komputera: ${computerMove}, Twój ruch: ${yourMove}`)
    }
}

document.getElementById('buttons').addEventListener('click',function(event){
    playGame(event.target.id)
    // rock-btn -> [rock, btn]
    const arrayOfWords = event.target.id.split("-")
   playGame(arrayOfWords[0])
});