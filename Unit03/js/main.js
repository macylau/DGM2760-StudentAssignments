document.querySelector('#title').innerText = "Guessing Game"
document.querySelector('#slogan').innerText = "Hi or Low?"
//Pick a random number between 0 and 16

let correctNumber = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

function evalGuess() {
    totalGuesses += 1 //Incrementing --> total guesses = total guesses + 1
    gamerGuess = document.querySelector('#guess').value
    console.log(correctNumber, gamerGuess)
    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
        feedback.innerText = 'You are a winner!!!'
        giveAward()
    }
    else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'Too high, try again.'
    }
    else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Too low, try again.'
    }
    else {
        feedback.innerText = 'Please Choose a number between 1 & 15 and try again.'
        totalGuesses -= 1
    }
    //End of if else statement

    const attempts = document.querySelector('#attempts')
    attempts.innerText = `${totalGuesses}`
}// End of evalGuess() Function

function giveAward() {
    let imgPath = 'images/yellowribbon.png'
    switch(totalGuesses) {
        case 1:
        case 2:
        case 3: 
            imgPath = 'images/blueribbon.png'
            console.log('Blue Ribbon for you')
            break;
        case 4:
        case 5:
        case 6: 
            imgPath = 'images/redribbon.png'
            console.log('Red Ribbon for you')
            break;
        case 7:
            console.log('Yellow Ribbon for you')
            break;
    }

    let awardImage = document.createElement('img') //Creates a <img> element in the 
    awardImage.setAttribute('src', imgPath)

    const ribbon = document.querySelector('#ribbon') //assigns ribbon to #ribbon div in DOM
    ribbon.appendChild(awardImage)

    
    
}