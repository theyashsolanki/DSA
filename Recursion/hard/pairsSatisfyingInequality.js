let count = 0;
let diff = 0;
let nums = [];
const countPairs = (start, mid, end) => {
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    if (nums[i] <= nums[j] + diff) {
      count += end - j + 1;
      i++;
    } else j++;
  }
};
const merge = (start, mid, end) => {
  countPairs(start, mid, end);
  const temp = new Array(end - start + 1);
  let i = start;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= end) {
    if (nums[i] > nums[j]) {
      temp[k] = nums[j];
      k++, j++;
    } else {
      temp[k] = nums[i];
      k++, i++;
    }
  }
  while (i <= mid) {
    temp[k] = nums[i];
    i++, k++;
  }
  while (j <= end) {
    temp[k] = nums[j];
    j++, k++;
  }
  for (let x = 0; x < temp.length; x++) {
    nums[x + start] = temp[x];
  }
};

const mergeSort = (start, end) => {
  if (start === end) return;
  const mid = Math.trunc(start + (end - start) / 2);
  mergeSort(start, mid);
  mergeSort(mid + 1, end);
  merge(start, mid, end);
};

const numberOfPairs = (num1, num2, x) => {
  count = 0;
  diff = x;
  nums = new Array(num1.length);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = num1[i] - num2[i];
  }
  mergeSort(0, nums.length - 1);
  return count;
};
console.log(numberOfPairs([3, -1], [-2, 2], -1));
