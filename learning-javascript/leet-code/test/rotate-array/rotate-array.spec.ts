import {assert} from 'chai';
import { rotate } from '../../src/rotate-array/roate-array';

describe(rotate.name, function() {
	it('should rotate the array k times', function() {
	const nums = [1,2,3,4,5,6,7];
	const k = 3;
	rotate(nums, k);
	
	const expected = [5,6,7,1,2,3,4];
	assert.deepStrictEqual(nums, expected);
	})
})