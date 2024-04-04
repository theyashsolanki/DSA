const isValidSubarray = (mid, nums, k) => {
  let sum = 0;
  let countK = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > mid) return false;
    if (nums[i] + sum > mid) {
      countK++;
      sum = 0;
    }
    sum += nums[i];
  }
  return countK <= k;
};

var splitArray = function (nums, k) {
  let totalSum = 0;
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
    if (nums[i] > max) max = nums[i];
  }
  let ans = totalSum;
  let start = max;
  let end = totalSum;
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (isValidSubarray(mid, nums, k)) {
      ans = mid;
      end = mid - 1;
    } else start = mid + 1;
  }
  return ans;
};

console.log(splitArray([1, 4, 4], 3));
