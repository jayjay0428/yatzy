async function rollDice() {
    try {
        const response = await fetch('http://localhost:3000/roll-dices');
        if (!response.ok) {
            throw new Error('Error fetching dice values');
        }
        const diceValues = await response.json();
        updateDiceUI(diceValues);
    } catch (error) {
        console.error(error);
        alert('Failed to roll dice. Please try again.');
    }
}

function updateDiceUI(diceValues) {
    const diceContainer = document.getElementById('dice-container');
    diceValues.forEach((value, index) => {
        diceContainer.children[index].textContent = value;
    });
}
