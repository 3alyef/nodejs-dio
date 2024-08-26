import Item from "./services/item.js";
import Cart from "./services/cart.js";
const myCart = new Cart();

const item1 = new Item("hotwheels ferrari", 20.99, 2);
const item2 = new Item("hotwheels Porche", 50.99, 2);

myCart.addItem(item1);
myCart.addItem(item2);
console.log(myCart.getTotal());
myCart.addItem(item2);
console.log(myCart.getTotal());
myCart.removeItem(item1.name);
myCart.removeItem(item1.name);
console.log(myCart.getTotal());
myCart.deleteItem(item2.name);
myCart.deleteItem(item1.name);
console.log(myCart.getTotal());