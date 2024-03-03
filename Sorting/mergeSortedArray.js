// link - [ https://leetcode.com/problems/merge-sorted-array/description/ ]
const merge = (nums1, m, nums2, n) => {
  let k = nums1.length - 1;
  let i = m - 1;
  let j = n - 1;
  while (j >= 0 && i >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
};

let num1 = [1, 2, 3, 0, 0, 0];
let num2 = [2, 5, 6];
merge(num1, 3, num2, 3);
console.log(num1);
