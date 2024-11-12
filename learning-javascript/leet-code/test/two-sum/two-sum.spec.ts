import {assert} from 'chai';
import {twoSum, twoSumHash} from '../../src/two-sum/two-sum';

describe(twoSum.name, function() {
	it('it works', function() {
		const numbers = [2,7,11,15];
		const target = 9;
		const result = twoSum(numbers, target);

		assert.deepStrictEqual(result, [0,1]);
	})
	it('should be solved using two sum hash', function() {
		const numbers = [2,7,11,15];
		const target = 9;
		const result = twoSumHash(numbers, target);

		assert.deepStrictEqual(result, [0,1]);	
	})
})