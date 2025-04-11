def merge_sorted_array(nums1, m, nums2, n):
    merge_pointer = m + n - 1
    num1_pointer = m - 1
    num2_pointer = n - 1

    while num1_pointer >= 0 and num2_pointer >=0:
        if nums2[num2_pointer] > nums1[num1_pointer]:
            nums1[merge_pointer] = nums2[num2_pointer]
            merge_pointer -= 1
            num2_pointer -= 1
        else:
            nums1[merge_pointer] = nums1[num1_pointer]
            merge_pointer -= 1
            num1_pointer -= 1 
    
    while num2_pointer >= 0:
        nums1[merge_pointer] = nums2[num2_pointer]
        merge_pointer -= 1
        num2_pointer -= 1


