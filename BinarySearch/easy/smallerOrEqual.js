const smallerOrEqual = function (nums, target) {
  if (nums[0] > target) return -1;
  let start = 0;
  let end = nums.length;
  let ans = 0;
  while (start <= end) {
    const mid = Math.trunc(start + (end - start) / 2);
    if (target < nums[mid]) {
      end = mid - 1;
    } else {
      ans = mid;
      start = mid + 1;
    }
  }
  return ans + 1;
};

console.log(smallerOrEqual([1, 2, 5, 5], 3));
