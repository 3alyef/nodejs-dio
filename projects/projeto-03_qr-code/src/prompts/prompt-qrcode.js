import chalk from 'chalk';

const qrcodePrompt = [
	{
		name: "link",
		description: chalk.blue.bold("Digite o link para gerar o QR Code: "),
		pattern: /^[a-z/0-9/./-]+$/,
		message: chalk.red.italic("Digite um texto válido..."),
		required: true,
	},
	{
		name: "select",
		description: chalk.blue.bold("Escolha o tipo de QR Code (1 - Normal, 2 - Terminal) "),
		pattern: /^[1-2]+$/,
		message: chalk.red.italic("Escolha apenas entre 1 e 2"),
		required: true,
	}
]

export default qrcodePrompt;