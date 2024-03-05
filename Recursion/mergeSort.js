const merge = (arr, start, mid, end) => {
  const temp = new Array(end - start + 1);
  let i = start;
  let j = mid + 1;
  let k = 0;
  while (i < mid + 1 && j < end + 1) {
    if (arr[j] < arr[i]) {
      temp[k] = arr[j];
      k++, j++;
    } else {
      temp[k] = arr[i];
      k++, i++;
    }
  }
  while (i < mid + 1) {
    temp[k] = arr[i];
    k++, i++;
  }
  while (j < end + 1) {
    temp[k] = arr[j];
    k++, j++;
  }
  for (let x = 0; x < temp.length; x++) {
    arr[x + start] = temp[x];
  }
};

const mergeSort = (arr, start, end) => {
  if (start === end) {
    return;
  }
  const mid = Math.trunc(start + (end - start) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);

  merge(arr, start, mid, end);
};

const arr = [6, 5, 4, 3, 2, 1];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
