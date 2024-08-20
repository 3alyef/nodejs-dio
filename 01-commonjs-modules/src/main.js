const products = require("./services/products");
(async function main() {
	products.getFullName("302", "keyboard");
	products.getFullName("402", "mousepad");
})()
