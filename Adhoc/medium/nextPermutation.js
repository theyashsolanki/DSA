// link - [ https://leetcode.com/problems/next-permutation/description/ ]

const nextPermutation = function (nums) {
  const dip = findDip(nums);
  if (dip === -1) return reverse(nums, 0, nums.length - 1);
  let j = nums.length - 1;
  while (j > dip) {
    if (nums[j] > nums[dip]) {
      [nums[j], nums[dip]] = [nums[dip], nums[j]];
      reverse(nums, dip + 1, nums.length - 1);
      break;
    }
    j--;
  }
  return nums;
};

function findDip(nums) {
  let j = nums.length - 2;
  while (j >= 0) {
    if (nums[j] < nums[j + 1]) return j;
    j--;
  }
  return -1;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++, end--;
  }
  return arr;
}

console.log(nextPermutation([2, 3, 1]));
