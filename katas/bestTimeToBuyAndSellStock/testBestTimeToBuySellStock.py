import unittest
from best_time_to_buy_and_sell_stock import maxProfit2

class TestMaxProfit(unittest.TestCase):
    def test_mergeSortedArray(self):
        input = [6,1,3,2,4,7]
        result = maxProfit2(input)
        expected = 6
        self.assertEqual(result, expected)

if __name__ == '__main__':
    unittest.main()