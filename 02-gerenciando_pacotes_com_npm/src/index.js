import chalk from "chalk";
import gets from "./utils/gets.js";

console.log(chalk.blueBright.bgGray("Hey there!"));
let year = await gets("Em que ano você nasceu? ");
let yearNow =  new Date().getFullYear();

console.log("Você tem " + (yearNow - year) + " anos.");