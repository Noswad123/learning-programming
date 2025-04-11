import unittest
from rotate_array import rotate

class TestRotateArray(unittest.TestCase):
	def test_rotate_array2(self):
		nums= [-1, -100, 3, 99]
		k = 2
		expected = [3, 99, -1, -100]
		rotate(nums, k)
		self.assertListEqual(nums, expected)
	
	def test_rotate_array(self):
		nums= [1,2,3,4,5,6,7]
		k = 3
		expected = [5,6,7,1,2,3,4]
		rotate(nums, k)
		self.assertListEqual(nums, expected)

if __name__ == '__main__':
		unittest.main()