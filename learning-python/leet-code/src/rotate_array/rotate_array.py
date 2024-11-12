def rotate(nums, k):
    temp = nums[0:k]
    del nums[0:k]
    nums.extend(temp)