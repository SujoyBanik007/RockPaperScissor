const prompt = require("prompt-sync")();

let wins = 0
let losses = 0
let ties = 0

while (true){
    const choose = prompt('enter rock, paper, or scissors(or q to quit): ')
    if (choose === 'q'){
        break;
    }
    if (choose !== 'rock' && choose !== 'paper' && choose !== 'scissors' ){
        console.log('please enter a valid item');
        continue;
    }

    const choice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.round(Math.random() * 2)
    const computerChoice = choice[randomNumber];
    console.log('the computer choose', computerChoice);

    if (computerChoice === choose){
        console.log('Draw!');
        ties ++;
    }
    else if (
        (computerChoice === 'paper' && choose === 'rock') ||
        (computerChoice === 'rock' && choose === 'scissors') || 
        (computerChoice === 'scissors' && choose === 'paper')
        
    ) {    
        console.log('you win!');
        wins ++;
    } else{
        console.log('you lost!');
        losses ++;
    }
}

console.log('wins', wins, 'losses', losses, 'ties', ties )





