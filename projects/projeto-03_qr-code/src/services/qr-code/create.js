import prompt from 'prompt';
import { qrcodePrompt, qrcodeType } from '../../prompts/prompt-qrcode.js';
import qrcode from 'qrcode-terminal';

function typeQRCode() {
	return new Promise((resolve) => {
		prompt.get(qrcodeType, (err, choose)=>{
			resolve(choose.select);
		})
	})
}

export default async function createQRCode() {
	prompt.get(qrcodePrompt, async (err, choose) => {
		let link = choose.select;
		if(link) {
			let typeQR = await typeQRCode();
			if(typeQR == 1) {
				// Normal
			} else if(typeQR == 2) {
				// Terminal
				console.log("\n");
				qrcode.generate(link);
				console.log("\n");
			}
		}
	});
}