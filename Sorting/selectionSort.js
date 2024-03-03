const selectionSort = (arr) => {
  let i = 0;
  while (i < arr.length - 1) {
    const smallest = findSmallest(arr, i);
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    i++;
  }
  return arr;
};

function findSmallest(arr, start) {
  let minIndex = start;
  let minElement = arr[start];
  for (let i = start; i < arr.length; i++) {
    if (arr[i] < minElement) {
      minIndex = i;
      minElement = arr[i];
    }
  }
  return minIndex;
}

const arr = [5, 4, 3, 2, 1];
console.log(selectionSort(arr));
