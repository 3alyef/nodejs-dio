export default class Dice {
    sides = [1, 2, 3, 4, 5, 6];
    rollDice() {
        let randomSide = Math.floor(Math.random() * 6);
        return this.sides[randomSide];
    }
}
