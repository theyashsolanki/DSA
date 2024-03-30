const upperBound = (nums, target) => {
  let ans = nums.length;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.trunc(start + (end - start) / 2);
    if (target < nums[mid]) {
      ans = mid;
      end = mid - 1;
    } else start = mid + 1;
  }
  return ans;
};

console.log(upperBound([1, 1, 2, 3, 4, 4, 5, 6], 6));
