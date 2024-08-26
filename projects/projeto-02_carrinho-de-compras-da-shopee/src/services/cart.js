// // CASOS DE USO:

// // Add():
// function addItem(cart, item) {
// 	cart.push(item);
// }

// // Delete():
// function deleteItem(cart, itemName) {

// }

// // Remove(): Remove um item
// function removeItem(cart, itemName) {
	
// }

// // Total():
// function getTotal(cart) {
// 	let total = 0;
// 	cart.map(car => total += car.subTotal());
// 	return total;

// 	//return cart.reduce((previous, current) => previous + current.subTotal(), 0);
// }

// export {
// 	addItem,
// 	deleteItem,
// 	removeItem, 
// 	getTotal,
// };

export default class Cart {
	items;
	constructor() {
		this.items = [];
	}

	addItem(item) {
		let haveItem = this.items.filter(el => el.name === item.name);

		if(!haveItem.length > 0) return this.items.push(item);

		this.items.map(it => it.name == item.name && it.quantity++);
		
	}

	// Remove(): Remove um item
	removeItem(itemName) {
		this.items.filter((item) => {
			if(item.name == itemName) {
				return item.quantity > 1 ? item.quantity-- : this.deleteItem(item.name);
			}
		});

	}

	// Delete():
	deleteItem(itemName) {
		let index = this.items.findIndex(el => el.name == itemName);

		if(index != -1) {
			this.items.splice(index, 1);
		} else {
			console.log("Item inexistênte no carrinho");
		}
	}

	getTotal() {
		let total = 0;
		console.log(this.items);
		if(this.items.length > 0){
			this.items.map(car => total += car.subTotal());
			return total;
		} 
		
		return "Car empty";
	}
}
