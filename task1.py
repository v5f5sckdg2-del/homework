def selection_sort(arr):
    for i in range(len(arr)):
        m = i
        for j in range(i + 1, len(arr)):
            if arr[j] > arr[m]:
                m = j
        arr[i], arr[m] = arr[m], arr[i]
    return arr

print(selection_sort([4, 2, 5, 3, 5, 4, 3]))
