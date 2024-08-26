export default class Item {
	name;
	price;
	quantity;

	constructor(name, price, quantity) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}

	subTotal() {
		return this.price * this.quantity;
	}

}