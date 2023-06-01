function getComputerChoice() {
    fist = Math.floor(Math.random() * 3);
    if (fist === 0) {
        return 'Rock';
    } else if (fist === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

getComputerChoice()