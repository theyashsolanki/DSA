const indexTable = [];
let ans;
const merge = (arr, start, mid, end) => {
  const temp = [];
  let i = start;
  let j = mid + 1;
  let k = 0;
  let count = 0;
  while (i <= mid && j <= end) {
    if (arr[indexTable[i]] > arr[indexTable[j]]) {
      temp.push(indexTable[j]);
      count++;
      k++, j++;
    } else {
      temp.push(indexTable[i]);
      ans[indexTable[i]] += count;
      k++, i++;
    }
  }
  while (i <= mid) {
    temp.push(indexTable[i]);
    ans[indexTable[i]] += count;
    i++, k++;
  }
  while (j <= end) {
    temp.push(indexTable[j]);
    j++, k++;
  }
  for (let x = 0; x < temp.length; x++) {
    indexTable[x + start] = temp[x];
  }
};

const mergeSort = (arr, start, end) => {
  if (start === end) return;
  const mid = Math.trunc(start + (end - start) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
};

const countSmaller = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    indexTable[i] = i;
  }
  ans = new Array(nums.length).fill(0);
  mergeSort(nums, 0, nums.length - 1);
  return ans;
};

console.log(countSmaller([5, 1, 6, 2, 3]));
