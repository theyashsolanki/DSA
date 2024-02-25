// link - [ https://leetcode.com/problems/find-pivot-index/ ]
const pivotIndex = (nums) => {
  const leftSum = new Array(nums.length).fill(0);
  const rightSum = new Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  while (left < nums.length - 1 && right > 0) {
    left++;
    right--;
    leftSum[left] = nums[left - 1] + leftSum[left - 1];
    rightSum[right] = nums[right + 1] + rightSum[right + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    if (leftSum[i] === rightSum[i]) return i;
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
