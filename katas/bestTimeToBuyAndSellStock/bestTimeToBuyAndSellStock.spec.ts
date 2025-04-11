import {assert} from 'chai';
import { maxProfit } from '../../src/best-time-to-buy-and-sell-stock/best-time-to-buy-and-sell-stock';

describe(maxProfit.name, function() {
	[
		{prices:[7,6,4,3,1], expected: 0},
		{prices: [6,1,3,2,4,7], expected: 6}
	].forEach(({prices, expected})=>{
		it('should calculate max profits', function() {
			const result = maxProfit(prices);
			assert.strictEqual(result, expected);
		})
	});
});
