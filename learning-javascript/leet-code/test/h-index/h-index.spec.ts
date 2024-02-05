import { assert } from "chai";
import { hIndex } from "../../src/h-index/h-index";

describe(hIndex.name, function() {
	[
		// { input: [1,1,3,6,7,10,7,1,8,5,9,1,4,4,3], expected: 6},
		{ input: [10,8,6,6,4,4,3,3], expected: 4},
	].forEach(({input, expected}) => {
		it('should calculate hIndex', function() {
			const result = hIndex(input);
			assert.strictEqual(result, expected);
		});
})
});