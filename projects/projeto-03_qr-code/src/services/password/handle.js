export default async function handle() {
	let chars = "abcdefghijklmnopqrstuvwxyz";
	let specialCharacters = "!@#$%^&*()_+[]{}|;:',.<>?/~`-=";
	let characters = [];
	let password = "";
	let length = process.env.PASSWORD_LENGTH;
	let isUpper = process.env.UPPERCASE_LETTERS;
	let isLower = process.env.LOWERCASE_LETTERS;
	let isNum = process.env.NUMBERS;
	let isSpecial = process.env.SPECIAL_CHARACTERS;

	if(isUpper == "true"){
		for(let i = 0; chars.length < i; i++) {
			characters.push(chars[i].toUpperCase());
		}
	} else if(isLower == "true") {
		characters.push(...chars);
	} else if(isNum == "true") {
		characters.push(..."0123456789");
	} else if(isSpecial == "true") {
		characters.push(...specialCharacters);
	}

	for(let i = 0; i < length; i++) {
		const index = Math.floor(Math.random() * characters.length);
		password += characters[index];
	}

	return password;
}