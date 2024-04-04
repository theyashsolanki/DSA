var minimizeMax = function (nums, p) {
  if (p === 0 || nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  let diff = [];
  let i = 0;
  let j = 1;
  let k = 0;
  let pairFound = false;
  while (j < nums.length) {
    const d = nums[j] - nums[i];
    if (pairFound) {
      if (diff[k - 1] > d) diff[k - 1] = d;
      pairFound = false;
    } else {
      diff[k] = d;
      k++;
      pairFound = true;
    }
    i++, j++;
  }
  diff.sort((a, b) => a - b);
  let max = -1;
  let x = 0;
  while (p >= 1 && x < diff.length) {
    if (x > 0 && diff[x] === diff[x - 1]) {
      x++;
      p--;
    } else if (diff[x] > max) {
      max = diff[x];
      x++;
      p--;
    }
  }
  return max;
};

console.log(minimizeMax([3, 4, 2, 3, 2, 1, 2], 3));
