// link - [ https://leetcode.com/problems/trapping-rain-water/ ]
const trap = (height) => {
  let water = 0;
  let maxIndex = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[maxIndex] <= height[i]) maxIndex = i;
  }
  let start = 0;
  while (height[start] < height[start + 1]) start++;
  for (let i = start + 1; i < maxIndex; i++) {
    if (height[i] < height[start]) {
      water += height[start] - height[i];
    } else {
      start = i;
    }
  }
  start = height.length - 1;
  while (height[start] < height[start - 1]) start--;
  for (let i = start - 1; i > maxIndex; i--) {
    if (height[i] < height[start]) {
      water += height[start] - height[i];
    } else {
      start = i;
    }
  }
  return water;
};

console.log(main([4, 2, 0, 3, 2, 5]));
