export function romanToInt(s: string): number {
	const symbols = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
		IV: 4,
		IX: 9,
		XL: 40,
		XC: 90,
		CD: 400,
		CM: 900,
	};
	const edgeCases = ['IV', 'IX', 'XC', 'XL', 'CD', 'CM'];
	let value = 0;
	let current = '';
	const stringArray = s.split('');
	while(stringArray.length > 0) {
		if(stringArray.length > 1 && edgeCases.includes(stringArray.slice(0,2).join(''))) {
			current = stringArray.shift() + stringArray.shift();
		} else {
			current = stringArray.shift();
		}
		value += symbols[current];
	}

	return value;
};