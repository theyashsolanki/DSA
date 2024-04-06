var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (nums[start] === nums[mid] && nums[end] === nums[mid]) {
      start++;
      end--;
    } else if (nums[start] < nums[0]) return nums[start];
    else if (mid + 1 < nums.length && nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    } else if (nums[mid] < nums[start]) {
      end = mid;
    } else start = mid + 1;
  }
  return nums[0];
};

console.log(findMin([2, 2, 2, 0, 1]));
