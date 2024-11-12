import {assert} from 'chai';
import { mergeSortedArray } from '../../src/merge-sorted-array/merge-sorted-array';

describe(mergeSortedArray.name, function() {
	it('should work', function(){
		const nums1 = [1,2,3,0,0,0];
		const m = 3;
		const nums2 = [2,5,6];
		const n = 3;

		mergeSortedArray(nums1, m, nums2, n);

		const expected = [1,2,2,3,5,6];

		assert.deepStrictEqual(nums1, expected);
	});

	it('should work with a small array', function(){
		const nums1 = [2, 0];
		const m = 1;
		const nums2 = [1];
		const n = 1;

		mergeSortedArray(nums1, m, nums2, n);

		const expected = [1,2];

		assert.deepStrictEqual(nums1, expected);
	})
})