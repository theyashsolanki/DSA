const secondIndex = (nums, target) => {
  let ans = -1;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (nums[mid] <= target) {
      ans = mid;
      start = mid + 1;
    } else end = mid - 1;
  }
  return ans;
};
const firstIndex = (nums, target) => {
  let ans = -1;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (nums[mid] >= target) {
      ans = mid;
      end = mid - 1;
    } else start = mid + 1;
  }
  return ans;
};
const countOccurence = (nums, target) => {
  return secondIndex(nums, target) - firstIndex(nums, target) + 1;
};

console.log(countOccurence([5, 7, 8, 8, 8, 10], 8));
