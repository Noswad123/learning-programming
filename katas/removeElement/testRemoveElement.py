import unittest
from remove_element import removeElement

class TestRemoveElement(unittest.TestCase):
		def test_remove_element(self):
			nums = [3,2,2,3]
			val = 3
			result = removeElement(nums, val)
			expected = 2
			self.assertEqual(result, expected)

if __name__ == '__main__':
		unittest.main()