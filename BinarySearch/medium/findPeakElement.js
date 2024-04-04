const findPeakElement = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  let ans = -1;
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (mid === 0 || mid === nums.length - 1) ans = mid;
    if (
      mid > 0 && mid < nums.length - 1 && nums[mid] > nums[mid - 1] &&
      nums[mid] > nums[mid + 1]
    ) {
      ans = mid;
      break;
    } else if (nums[mid] > nums[mid + 1]) end = mid - 1;
    else start = mid + 1;
  }
  return ans;
};

console.log(findPeakElement([3, 4, 3, 2, 1]));
