const isValidAllocation = (nums, mid, n) => {
  let pages = 0;
  let students = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + pages > mid) {
      students++;
      pages = 0;
    }
    pages += nums[i];
  }

  if (students <= n) return true;
  return false;
};
const allocateBooks = (nums, n) => {
  if (nums.length > n) return -1;
  let ans = -1;
  let max = -1;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (nums[i] > max) max = nums[i];
  }
  let start = max;
  let end = sum;
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (isValidAllocation(nums, mid, n)) {
      ans = mid;
      end = mid - 1;
    } else start = mid + 1;
  }
  return ans;
};

console.log(allocateBooks([31, 14, 19, 75], 12));
