const decimalToBinary = (n) => {
  let b = "";
  while (n > 0) {
    b += n & 1; // same as n % 2 (gives the right most bit)
    n = n >> 1; // right shift same as n/2 (remove the right most bit)
  }
  return reverseString(b);
};
const reverseString = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};
console.log(decimalToBinary(10));
