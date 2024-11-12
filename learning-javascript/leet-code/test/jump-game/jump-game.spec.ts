import {assert} from 'chai';
import { canJump, canJump2 } from '../../src/jump-game/jump-game';

describe(canJump.name, function() {
	[
		[2,3,1,1,4],
		[1,2],
		[1],
		[0]
	].forEach((input) => {
		it(`should determine can reach end ${JSON.stringify(input)}`, function() {
			const result = canJump(input);
			assert.isTrue(result);
		});
	});
	[
		[3,2,1,0,4],
		[0,2,3]
	].forEach((input) => {
		it(`should determine cannot reach end ${JSON.stringify(input)}`, function() {
			const result = canJump(input);
			assert.isFalse(result);
		});
	})
});


describe(canJump2.name, function() {
	[
		{arr: [1,2,1,1, 1], expected: 3},
		// {arr: [1,1,1,1], expected: 3}
	].forEach(({arr, expected}) => {
		it(`should determine can reach end ${JSON.stringify(arr)}`, function() {
			const result = canJump2(arr);
			assert.strictEqual(result, expected);
		});
	});

});