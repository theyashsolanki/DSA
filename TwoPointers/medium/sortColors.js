// link - [ https://leetcode.com/problems/sort-colors/ ]
var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  const swap = (a, b, arr) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };
  let index = left;
  while (index <= right) {
    if (nums[index] === 0) {
      swap(left, index, nums);
      left++;
      index++;
    } else if (nums[index] === 2) {
      swap(right, index, nums);
      right--;
    } else {
      index++;
    }
  }
};

const arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);
console.log(arr);
