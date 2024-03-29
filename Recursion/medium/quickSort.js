const quickSort = (nums, start, end) => {
  if (start >= end) return;
  let pivot = Math.floor(Math.random() * (end - start + 1)) + start;
  [nums[pivot], nums[start]] = [nums[start], nums[pivot]];
  let i = start + 1;
  let j = end;
  while (i <= j) {
    while (nums[i] < nums[start]) i++;
    while (nums[j] > nums[start]) j--;
    if (i <= j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }
  [nums[j], nums[start]] = [nums[start], nums[j]];
  quickSort(nums, start, j - 1);
  quickSort(nums, j + 1, end);
};

const sort = (nums) => {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

console.log(sort([5, 4, 3, 2, 1]));
