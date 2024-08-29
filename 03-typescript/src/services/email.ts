async function getBaseEmail(senderName: string): Promise<string> {
	let base: string = `Olá ${senderName}, gostaria de me inscrever para uma vaga`;
	
	base += `\n estou deixando o meu currículo.`;

	return base;
}

export {
	getBaseEmail,
};