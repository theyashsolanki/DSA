// link - [ https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/ ]

const strStr = function (haystack, needle) {
  const n = haystack.length;
  const m = needle.length;
  const fail = create_kmp_fail(needle);
  let j = 0;
  let k = 0;
  while (j < n) {
    if (haystack[j] === needle[k]) {
      if (k === m - 1) {
        return j - m + 1;
      }
      j++;
      k++;
    } else if (k > 0) {
      k = fail[k - 1];
    } else {
      j++;
    }
  }
  return -1;
};

function create_kmp_fail(p) {
  const m = p.length;
  const fail = new Array(m).fill(0);
  let k = 0;
  let j = 1;
  while (j < m) {
    if (p[k] === p[j]) {
      fail[j] = k + 1;
      j++;
      k++;
    } else if (k > 0) {
      k = fail[k - 1];
    } else {
      j++;
    }
  }
  return fail;
}

console.log(strStr("aaaaaaab", "ab"));
