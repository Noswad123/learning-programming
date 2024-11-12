def maxProfit(prices):
	max_profit = 0
	dayBought = 0
	daySold = 1
	while daySold < len(prices): 
		if prices[dayBought] < prices[daySold]: 
			profit = prices[daySold] - prices[dayBought]
			max_profit = max(profit, max_profit)
		else:
			dayBought = daySold
		daySold += 1
	return max_profit

def maxProfit2(prices):
	max_profit = 0
	dayBought = 0
	daySold = 1
	while daySold < len(prices): 
		if prices[dayBought] < prices[daySold]: 
			profit = prices[daySold] - prices[dayBought]
			max_profit += profit
		dayBought = daySold
		daySold += 1
	return max_profit