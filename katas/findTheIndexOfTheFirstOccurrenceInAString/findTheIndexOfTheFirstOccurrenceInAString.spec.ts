import { assert } from "chai";
import { strStr } from "../../src/find-the-index-of-the-first-occurrence-in-a-string/find-the-index-of-the-first-occurrence-in-a-string";

describe(strStr.name, function() {
	it('should find the string', function() {
		const expected = 4;
		const result = strStr('mississippi', 'issip');
		assert.strictEqual(result, expected);
	})
});