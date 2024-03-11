let count = 0;
const merge = (arr, start, mid, end) => {
  const temp = new Array(end - start + 1);
  let i = start;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= end) {
    if (arr[i] > arr[j]) {
      temp[k] = arr[j];
      k++, j++;
      count = count + (mid - i + 1);
    } else {
      temp[k] = arr[i];
      k++, i++;
    }
  }
  while (i <= mid) {
    temp[k++] = arr[i++];
  }
  while (j <= end) {
    temp[k++] = arr[j++];
  }
  for (let x = 0; x < temp.length; x++) {
    arr[x + start] = temp[x];
  }
};

const mergeSort = (arr, start, end) => {
  if (start === end) return;
  const mid = Math.trunc(start + (end - start) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
};

const countInversion = (arr) => {
  mergeSort(arr, 0, arr.length - 1);
  return count;
};

console.log(countInversion([2, 4, 1, 3, 5]));
