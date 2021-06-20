const valueMap = {
    "A": 12,
    "K": 11,
    "Q": 10,
    "J": 9,
    "10": 8,
    "9": 7,
    "8": 6,
    "7": 5,
    "6": 4,
    "5": 3,
    "4": 2,
    "3": 1,
    "2": 0,
};

const cards = ["twos", "threes", "fours", "fives", "sixes", "sevens", "eights", "nines", "tens", "jacks", "queens", "kings", "aces"];

export default class MoveController
{
    constructor(state) {
        this.state = state;
    }

    getBestMove()
    {
        const piles = [this.state.pile0, this.state.pile1, this.state.pile2, this.state.pile3, this.state.pile4, this.state.pile5, this.state.pile6, this.state.pile7, this.state.pile8];
        if (piles.includes("")) {
            return {
                pile: "",
                action: "",
                probability: ""
            }
        }

        const totalCards = this.calculateTotalCards();

        if (totalCards === 0) {
            return {
                pile: "",
                action: "",
                probability: ""
            }
        }

        let bestProbability = 0.0;
        let pile = 0;
        let action = "";

        for (let i = 0; i < piles.length; i++) {
            const highProbability = this.getHigherProbability(piles, i, totalCards);
            const lowerProbability = this.getLowerProbability(piles, i, totalCards);
            const sameProbability = this.getSameProbability(piles, i, totalCards);

            if (highProbability > bestProbability) {
                bestProbability = highProbability;
                pile = i;
                action = "High";
            }

            if (lowerProbability > bestProbability) {
                bestProbability = lowerProbability;
                pile = i;
                action = "Low";
            }

            if (sameProbability > bestProbability) {
                bestProbability = sameProbability;
                pile = i;
                action = "Same";
            }
        }

        return {
            pile: pile,
            action: action,
            probability: bestProbability
        }
    }

    getHigherProbability(piles, index, totalCards)
    {
        const pileCard = piles[index];
        if (pileCard === "closed") {
            return 0.0;
        }
        const cardIndex = valueMap[pileCard];
        if (cardIndex === 12) {
            return 0.0;
        }
        let totalHigher = 0
        for (let i = cardIndex + 1; i < cards.length; i++) {
            totalHigher += this.state[cards[i]];
        }
        return totalHigher/totalCards;
    }

    getLowerProbability(piles, index, totalCards)
    {
        const pileCard = piles[index];
        if (pileCard === "closed") {
            return 0.0;
        }
        const cardIndex = valueMap[pileCard];
        if (cardIndex === 0) {
            return 0.0;
        }
        let totalLower = 0;
        for (let i = 0; i < cardIndex; i++) {
            totalLower += this.state[cards[i]];
        }
        return totalLower/totalCards;
    }

    getSameProbability(piles, index, totalCards)
    {
        const pileCard = piles[index];
        if (pileCard === "closed") {
            return 0.0;
        }
        const cardIndex = valueMap[pileCard];
        return this.state[cards[cardIndex]]/totalCards
    }

    calculateTotalCards()
    {
        let total = 0;
        for (let i = 0; i < cards.length; i++) {
            total += this.state[cards[i]];
        }
        return total;
    }
}