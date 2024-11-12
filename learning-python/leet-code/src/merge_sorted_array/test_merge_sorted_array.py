import unittest
from merge_sorted_array import merge_sorted_array

class TestMergeSortedArray(unittest.TestCase):
    def test_mergeSortedArray(self):
        nums1 = [0]
        m = 0
        nums2 = [1]
        n = 1
        result = merge_sorted_array(nums1, m, nums2, n)
        expected = [1]
        self.assertEqual(result, expected)
    def test_mergeSortedArray(self):
        nums1 = [4,5,6,0,0,0]
        m = 3
        nums2 = [1,2,3]
        n = 3
        result = merge_sorted_array(nums1, m, nums2, n)
        expected = [1,2,3,4,5,6]
        self.assertEqual(result, expected) 

if __name__ == '__main__':
    unittest.main()