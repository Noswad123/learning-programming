import { assert } from "chai";
import { removeDuplicates, removeDuplicates2 } from "../../src/remove-duplicates-from-sorted-array/remove-duplicates-from-sorted-array";

describe(removeDuplicates.name, function() {
	it('should remove duplicates', function() {
		const nums = [];
		const results = removeDuplicates(nums);

		assert.strictEqual(results, 0);
	});
	context(removeDuplicates2.name, function() {
		it('should remove duplicates part 2', function() {
			const nums = [1,1,1,2,2,3];
			const results = removeDuplicates2(nums);
	
			assert.strictEqual(results, 5);	
		});
	})
});
