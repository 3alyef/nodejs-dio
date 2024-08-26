import readline from "readline";

export default async function gets(question) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise((resolve) => {
		rl.question(question, (status)=>{
			rl.close();
			resolve(status);
		});
	})
}