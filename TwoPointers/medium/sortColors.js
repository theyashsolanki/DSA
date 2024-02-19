// link - [ https://leetcode.com/problems/sort-colors/ ]
var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  const swap = (a, b, arr) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };
  while (nums[left] === 0) {
    left++;
  }
  while (nums[right] === 2) {
    right;
  }
  let index = left;
  while (index <= right) {
    if (nums[index] === 0) {
      swap(left, index, nums);
      left++;
      if (index < left) index = left + 1;
    } else if (nums[index] === 2) {
      swap(right, index, nums);
      right--;
    } else {
      index++;
    }
  }
};

const arr = [1, 2, 1, 0, 0];
sortColors(arr);
console.log(arr);
