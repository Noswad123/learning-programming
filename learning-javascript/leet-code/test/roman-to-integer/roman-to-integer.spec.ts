import {assert} from 'chai';
import { romanToInt } from '../../src/roman-to-integer/roman-to-integer';

describe(romanToInt.name, function() {
	[
		{input: 'MCMXCIV', expected: 1994},
		{input: 'IV', expected: 4}
	].forEach(({input, expected}) => {
		it(`should convert roman numeral ${input} to integer ${expected}`, function() {
			const result = romanToInt(input);
			assert.strictEqual(result, expected);
		});
	});
});
