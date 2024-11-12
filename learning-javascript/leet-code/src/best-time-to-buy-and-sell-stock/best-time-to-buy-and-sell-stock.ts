export function maxProfit(prices: number[]): number {
	let max = 0;
	let dayBought = 0;
	let daySold = 1;
	 while(daySold < prices.length) {
		if(prices[dayBought] < prices[daySold]){
			const profit = prices[daySold] - prices[dayBought];
			max = Math.max(profit, max);		
		} else {
			dayBought = daySold;
		}
		daySold++;
	}
 return max;
}

export function maxProfit2(prices: number[]): number {
	let profits = 0; 
	let dayBought = 0;
	let daySold = 1;
	 while(daySold < prices.length) {
		if(prices[dayBought] < prices[daySold]){
			const profit = prices[daySold] - prices[dayBought];
			profits += profit;
		}
		dayBought = daySold;
		daySold++;
	}
 return profits;
}