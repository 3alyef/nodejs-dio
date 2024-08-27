import chalk from "chalk";
import handle from "./handle.js";

export default async function createPassword() {
	console.log(chalk.yellow("password"));
	const password = await handle();
	console.log(`${password}`);
	
}