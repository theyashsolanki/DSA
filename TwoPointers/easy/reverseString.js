// link - [ https://leetcode.com/problems/reverse-string/description/ ]
const main = (s) => {
  let left = 0;
  let right = s.length - 1;
  const swap = (a, b, arr) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };
  while (left <= right) {
    swap(left++, right--, s);
  }
};

const s = ["h", "e", "l", "l", "o"];
main(s);
console.log(s);
