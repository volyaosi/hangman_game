const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game.makeGuess(guess);
    render();
});

const render = () => {
    puzzleEl.innerHTML = '';
    guessesEl.textContent = game.statusMessage;

    game.puzzle.split('').forEach((letter) => {
        puzzleEl.innerHTML += `<span>${letter}</span>`;
    });
};
const startGame = async () => {
    const puzzle = await getPuzzle();

    game = new Hangman(puzzle.word, 5);
    render();
};

document.querySelector('#reset').addEventListener('click', () => {
    startGame();
});

startGame();