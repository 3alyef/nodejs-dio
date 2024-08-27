import qrcode from 'qrcode-terminal';
import chalk from 'chalk';
import prompt from 'prompt';
import qrcodePrompt from '../../prompts/prompt-qrcode.js';

function typeQRCode() {
	return new Promise((resolve) => {
		prompt.get(qrcodePrompt[1], (err, choose)=>{
			resolve(choose.select);
		})
	})
}
export default async function handleQRCode(err, choose) {
	let link = choose.link;
	if(link) {
		let typeQR = await typeQRCode();
		if(typeQR == 1) {
			// Normal
		} else if(typeQR == 2) {
			// Terminal
			
			let isSmall = link.length == 2;
			qrcode.generate(link, {isSmall}, (qr) => {
				console.log("\n");
				console.log(qr);

				console.log(chalk.yellow.bold("\n QR Code gerado!\n"));
			});
			
		}
	}
}