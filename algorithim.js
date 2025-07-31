def sum_of_distinct_elements(set1, set2):
    sum = 0
    # Step 1: Check elements in set1 not in set2
    for i in range(len(set1)):
        if set1[i] not in set2:
            sum += set1[i]

    # Step 2: Check elements in set2 not in set1
    for j in range(len(set2)):
        if set2[j] not in set1:
            sum += set2[j]

    return sum

# Example
set1 = [3, 1, 7, 9]
set2 = [2, 4, 1, 9, 3]
result = sum_of_distinct_elements(set1, set2)
print("Output:", result)  # Output: 13
