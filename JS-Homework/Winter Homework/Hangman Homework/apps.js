console.log("It's working!");

document.addEventListener("DOMContentLoaded", function() {
    const films = ["avatar", "inception", "titanic", "jaws", "matrix", "casablanka"];

    const maxLives = 10;

    let word = "";
    let lives = 0;
    let guessedLetters = [];

    const alphabetButtons = document.querySelectorAll(".alphabet");
    const hintButton = document.querySelector(".hint");
    const playAgainButton = document.querySelector(".play-again");
    const textArea = document.querySelector(".text");

    function initializeGame() {
        word = getRandomWord();
        lives = maxLives;
        guessedLetters = [];

        updateUI();

        alphabetButtons.forEach((button) => {
            button.disabled = false;
        });
    }

    function getRandomWord() {
        const randomIndex = Math.floor(Math.random() * films.length);
        return films[randomIndex];
    }

    function updateUI() {
        const displayWord = word.split("").map(letter => guessedLetters.includes(letter) ? letter : "_").join(" ");
        textArea.value = displayWord;

        document.querySelector("p").textContent = `You have ${lives} lives`;

        if (displayWord === word) {
            alert("Congratulations! You guessed the word.");
            initializeGame();
        } else if (lives === 0) {
            alert(`Game over! The correct word was "${word}".`);
            initializeGame();
        }
    }

    alphabetButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const letter = button.textContent.toLowerCase();

            if (word.includes(letter)) {
                guessedLetters.push(letter);
            } else {
                lives--;
            }

            button.disabled = true;
            updateUI();
        });
    });

    hintButton.addEventListener("click", function() {
        alert(`Hint: The word is related to films.`);
    })

    playAgainButton.addEventListener("click", initializeGame);
    
    initializeGame();
});