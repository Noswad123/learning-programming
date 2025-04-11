def binary_search(target, arr):
    low = 0
    high = len(arr) - 1

    while low <= high:
        median = (low + high) // 2
        if arr[median] == target:
            return True  # Found the target
        elif arr[median] < target:
            low = median + 1  # Move to the right half
        else:
            high = median - 1  # Move to the left half

    return False  # Target not found
