const insertionSort = (arr) => {
  let j = 1;
  while (j < arr.length) {
    if (arr[j] < arr[j - 1]) {
      insert(arr, j);
    }
    j++;
  }
};

function insert(arr, j) {
  let temp = arr[j];
  arr[j] = arr[j - 1];
  j--;
  while (arr[j - 1] > temp && j > 0) {
    arr[j] = arr[j - 1];
    j--;
  }
  arr[j] = temp;
}

const arr = [5, -1, 2, 2, 1];
insertionSort(arr);
console.log(arr);
