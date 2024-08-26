export default class Dice {
	private sides = [1, 2, 3, 4, 5, 6];

	public rollDice(): number {
		let randomSide = Math.floor(Math.random() * 6);

		return this.sides[randomSide];
	}
}