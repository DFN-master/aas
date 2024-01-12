import { messages as spanishMessages } from "./es";
import { messages as portugueseMessages } from "./pt";
import { messages as englishMessages } from "./en.js";

const messages = {
	...portugueseMessages,
	...englishMessages,
	...spanishMessages,
};

export { messages };
