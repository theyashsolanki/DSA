// link - [ https://leetcode.com/problems/move-zeroes/ ]
var moveZeroes = function (nums) {
  const swap = (a, b, arr) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    let i = start;
    let j = i + 1;
    let foundStart = false;
    while (j <= end) {
      if (nums[i] === 0) {
        if (nums[j] === 0 && !foundStart) {
          start = i;
          foundStart = true;
        }
        swap(i, j, nums);
      }
      i++, j++;
    }
    end--;
  }
};
const arr = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
moveZeroes(arr);
console.log(arr);
