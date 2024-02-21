// link - [ https://leetcode.com/problems/multiply-strings/ ]
var multiply = function (num1, num2) {
  if (num1.length > num2.length) {
    return multiplyString(num2, num1);
  }
  return multiplyString(num1, num2);
};
function multiplyString(num1, num2) {
  let ans = "";
  let carry = 0;
  let zeros = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    let currentLayer = "";
    for (let j = num2.length - 1; j >= 0; j--) {
      const product = (num1[i] - 0) * (num2[j] - 0) + carry;
      currentLayer += product % 10;
      carry = Math.trunc(product / 10);
    }
    while (carry) {
      currentLayer += carry % 10;
      carry = Math.trunc(carry / 10);
    }
    currentLayer = currentLayer.split("").reverse().join("");
    for (let i = 0; i < zeros; i++) {
      currentLayer += "0";
    }
    ans = addString(ans, currentLayer);
    zeros++;
  }
  if (ans[0] === "0") return "0";
  return ans;
}
function addString(str1, str2) {
  let carry = 0;
  let a = str1.length - 1;
  let b = str2.length - 1;
  let result = "";
  while (a >= 0 && b >= 0) {
    const sum = (str1[a] - 0) + (str2[b] - 0) + carry;
    result += sum % 10;
    carry = Math.trunc(sum / 10);
    a--, b--;
  }
  while (a >= 0) {
    const sum = (str1[a] - 0) + carry;
    result += sum % 10;
    carry = Math.trunc(sum / 10);
    a--;
  }
  while (b >= 0) {
    const sum = (str2[b] - 0) + carry;
    result += sum % 10;
    carry = Math.trunc(sum / 10);
    b--;
  }
  while (carry) {
    result += carry % 10;
    carry = Math.trunc(carry / 10);
  }
  return result.split("").reverse().join("");
}
console.log(multiply("123", "456"));
