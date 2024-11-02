document.addEventListener('DOMContentLoaded', () => {
    const diceContainer = document.getElementById('dice-container');
    const rollButton = document.getElementById('roll-button');
    const endTurnButton = document.getElementById('end-turn-button');
    const scoreElements = {
        ones: document.getElementById('score-ones'),
        twos: document.getElementById('score-twos'),
        threes: document.getElementById('score-threes'),
        total: document.getElementById('total-score')
    };

    let diceValues = [1, 2, 3, 4, 5]; // Initial dice values
    let rollCount = 0;

    function rollDice() {
        if (rollCount < 3) {
            for (let i = 0; i < diceValues.length; i++) {
                if (!diceContainer.children[i].classList.contains('keep')) {
                    diceValues[i] = Math.floor(Math.random() * 6) + 1;
                }
                diceContainer.children[i].textContent = diceValues[i];
            }
            rollCount++;
        } else {
            alert('You have used all your rolls for this turn.');
        }
    }

    function resetRollCount() {
        rollCount = 0;
    }

    rollButton.addEventListener('click', rollDice);

    endTurnButton.addEventListener('click', () => {
        resetRollCount();
        alert('End of turn. Your score has been updated.');
    });

    Array.from(diceContainer.children).forEach(die => {
        die.addEventListener('click', () => {
            die.classList.toggle('keep');
            die.style.backgroundColor = die.classList.contains('keep') ? '#d3d3d3' : '#fff';
        });
    });
});
