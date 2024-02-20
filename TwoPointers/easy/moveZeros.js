// link - [ https://leetcode.com/problems/move-zeroes/ ]
var moveZeroes = function (nums) {
  const swap = (a, b, arr) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };
  let zero = 0;
  while (nums[zero] !== 0 && zero < nums.length) zero++;
  let nonZero = zero + 1;
  while (nonZero < nums.length) {
    if (nums[nonZero] === 0) {
      nonZero++;
    } else {
      swap(zero, nonZero, nums);
      zero++;
    }
  }
};
const arr = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
moveZeroes(arr);
console.log(arr);
