import prompt from 'prompt';
import qrcodePrompt from '../../prompts/prompt-qrcode.js';

import handleQRCode from "./handle-qr-code.js";

export default async function createQRCode() {
	prompt.get(qrcodePrompt[0], handleQRCode);
}