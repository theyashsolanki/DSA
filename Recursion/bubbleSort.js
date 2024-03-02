const sort = (arr, n, j = 1, isSwapped = false) => {
  if (j === n) {
    n--;
    if (!isSwapped) return;
    j = 1;
    isSwapped = false;
  }
  if (n === 1) return;
  if (arr[j - 1] > arr[j]) {
    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    isSwapped = true;
  }
  sort(arr, n, j + 1, isSwapped);
};

let arr = [5, 4, 3, 2, 1];
sort(arr, arr.length);
console.log(arr);
