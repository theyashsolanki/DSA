// link - [ https://leetcode.com/problems/container-with-most-water/description/ ]
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let maxArea = 0;
  while (start < end) {
    let area;
    let width = Math.abs(start - end);
    if (height[start] < height[end]) {
      area = height[start] * width;
      start++;
    } else {
      area = height[end] * width;
      end--;
    }
    if (area > maxArea) maxArea = area;
  }
  return maxArea;
};
