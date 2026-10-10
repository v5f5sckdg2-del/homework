function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let m = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[m]) m = j;
    }
    [arr[i], arr[m]] = [arr[m], arr[i]];
  }
  return arr;
}
console.log(selectionSort([4, 2, 5, 3, 5, 4, 3]));
