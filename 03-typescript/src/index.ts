import { getBaseEmail } from "./services/email";

(async () => {
	let msg = await getBaseEmail("Alef")
	console.log(msg);
})();