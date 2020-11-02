const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const mistakesEl = document.querySelector('#incorrectLetters');
const userInput = document.querySelector('input');
let game;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game.makeGuess(guess);
    render();
});

const render = () => {
    puzzleEl.innerHTML = '';
    guessesEl.textContent = game.statusMessage;
    mistakesEl.innerHTML = `Missed: ${game.incorrectLetters.join(" ")} `;
    userInput.value = '';

    game.puzzle.split('').forEach((letter) => {
        puzzleEl.innerHTML += `<span>${letter}</span>`;
    });
};
const startGame = async () => {
    const puzzle = await getPuzzle();
    userInput.value = '';
    game = new Hangman(puzzle.word, 10);
    render();
};

document.querySelector('#reset').addEventListener('click', () => {
    startGame();
});

startGame();