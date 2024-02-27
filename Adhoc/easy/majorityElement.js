const majorityelement = function (nums) {
  let count = 0;
  let el = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      el = nums[i];
      count++;
    } else if (nums[i] === el) {
      count++;
    } else {
      count--;
    }
  }
  return el;
};

console.log(majorityelement([3, 3, 4]));
