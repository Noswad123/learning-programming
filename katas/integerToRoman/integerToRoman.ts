function intToRoman(num: number): string {
	const roman = [
		["I", 1], ["IV", 4], ["V", 5], ["IX", 9], ["X", 10],
		["XL", 40], ["L", 50], ["XC", 90], ["C", 100], ["CD", 400],
		["D", 500], ["CM", 900], ["M", 1000]
	];

	let res = "";

	for (let item of roman.reverse()) {
	 	const sym = item[0] as string;
		const val = item[1] as number;
		if (Math.floor(num/val)) {
			const count = Math.floor(num / val);
			res = res + produceSymbols(count, sym);
			num = num%val;
		}
	}

	return res
}

function produceSymbols(count: number, sym: string) {
	let newSym = '';
	for (let i = 1; i<=count; i++) {
		newSym += sym;
	}
	return newSym
}