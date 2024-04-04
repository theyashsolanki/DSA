var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (nums[mid] === target) return true;
    else if (
      nums[mid] === nums[start] && nums[mid] === nums[end]
    ) {
      start++;
      end--;
    } else if (nums[mid] === nums[start]) start++;
    else if (nums[mid] < nums[start]) {
      if (target >= nums[mid] && target <= nums[end]) start = mid + 1;
      else end = mid - 1;
    } else if (nums[mid] > nums[start]) {
      if (target >= nums[start] && target <= nums[mid]) end = mid - 1;
      else start = mid + 1;
    }
  }
  return false;
};

console.log(
  search(
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    2,
  ),
);
