const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
};

let arr = [0, -1, 2, 1, 0];
bubbleSort(arr);
console.log(arr);
