const lowerBound = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let ans = nums.length;
  while (start <= end) {
    const mid = Math.trunc(start + (end - start) / 2);
    if (target <= nums[mid]) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
};

console.log(lowerBound([1, 1, 2, 3], 2));
