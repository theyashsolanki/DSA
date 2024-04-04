const findPivot = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (nums[mid] < nums[0]) {
      end = mid - 1;
    } else if (nums[mid] < nums[mid + 1]) start = mid + 1;
    else return mid;
  }
};

const bs = (nums, start, end, target) => {
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else return mid;
  }
  return -1;
};
var search = function (nums, target) {
  const pivot = findPivot(nums);
  let ans = bs(nums, 0, pivot, target);
  if (ans === -1) {
    ans = bs(nums, pivot + 1, nums.length - 1, target);
  }
  return ans;
};

console.log(search([5, 1, 3], 5));
