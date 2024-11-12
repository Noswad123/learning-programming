import { assert } from "chai";
import { removeElement } from "../../src/remove-element/remove-element";

describe(removeElement.name, function() {
	it('should return a number', function() {
		const result = removeElement([], 2);
		assert.strictEqual(typeof result, 'number');
	});

	it('should return the number of elements that were not removed', function() {
		const arr = [2,4,2,4,2,4];
		const result = removeElement(arr, 4);
		const expected = 3;

		assert.strictEqual(result, expected);
	})
	it('should return the number of elements that were not removed 2', function() {
	const arr = [0,1,2,2,3,0,4,2];
	const result = removeElement(arr, 2);
	const expected = 5;

	assert.strictEqual(result, expected);
})
})