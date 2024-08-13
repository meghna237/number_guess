const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess(userGuess) {
    let msg = document.getElementById("msg")
    if (userGuess < randomNumber) {
        msg.style.color = 'red';
        msg.textContent = "Your guess is too low";
        return false;
    } else if (userGuess > randomNumber) {
        msg.style.color = 'red';
        msg.textContent = "Your guess is too high";
        return false;
    } else {
        msg.style.color = 'white';
        msg.textContent = "You got it!";
        //sleep(2000);
        return false;
    }
}

function numberGuess(){
    let userGuess = document.getElementById("guess").value;
    let result = checkGuess(userGuess);
    return result;
}
