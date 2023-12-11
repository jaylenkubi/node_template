import crypto from 'crypto';

const algorithm = 'aes256';
const inputEncoding = 'utf8';
const outputEncoding = 'hex';
const ivLength = 16; // AES blocksize

const key = Buffer.from('THE_CUBE_WE_ARE_THE_REALEST'); // key must be 32 bytes for aes256
const iv = crypto.randomBytes(ivLength);

export const encrypt = (text: string) => {
	const cipher = crypto.createCipheriv(algorithm, key, iv);
	let ciphered = cipher.update(text, inputEncoding, outputEncoding);
	ciphered += cipher.final(outputEncoding);
	return iv.toString(outputEncoding) + ':' + ciphered;
};

export const decrypt = (text: string): string => {
	const components: string[] = text.split(':');
	const iv_from_ciphertext = Buffer.from(components.shift() ?? components[0], outputEncoding);
	const decipher = crypto.createDecipheriv(algorithm, key, iv_from_ciphertext);
	let deciphered = decipher.update(components.join(':'), outputEncoding, inputEncoding);
	deciphered += decipher.final(inputEncoding);
	return deciphered;
};
