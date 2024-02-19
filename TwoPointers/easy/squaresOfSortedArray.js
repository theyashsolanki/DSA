// link - [ https://leetcode.com/problems/squares-of-a-sorted-array/ ]
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  const ans = [];
  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      ans.push(nums[left] ** 2);
      left++;
    } else {
      ans.push(nums[right] ** 2);
      right--;
    }
  }
  ans.reverse();
  return ans;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
