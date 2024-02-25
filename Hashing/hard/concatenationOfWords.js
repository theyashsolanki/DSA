// link - [ https://leetcode.com/problems/substring-with-concatenation-of-all-words/ ]
const findSubstring = (s, words) => {
  const ans = [];
  const hashTable = new Map();
  for (const w of words) {
    if (hashTable.has(w)) hashTable.set(w, hashTable.get(w) + 1);
    else hashTable.set(w, 1);
  }
  const lengthOfwords = words[0].length;
  let maxLength = lengthOfwords * words.length;
  let start = 0;
  let end = start + (maxLength - 1);
  while (end < s.length) {
    if (isValid()) {
      ans.push(start);
    }
    start++;
    end++;
  }
  function isValid() {
    let tempHashTable = new Map(hashTable);
    let i = start;
    let j = i + (lengthOfwords - 1);
    while (j <= end) {
      let part = s.substring(i, j + 1);
      if (tempHashTable.has(part)) {
        tempHashTable.set(part, tempHashTable.get(part) - 1);
        if (tempHashTable.get(part) === 0) tempHashTable.delete(part);
        i += lengthOfwords;
        j += lengthOfwords;
      } else {
        return false;
      }
    }
    if (tempHashTable.size === 0) return true;
    return false;
  }
  return ans;
};

console.log(
  findSubstring("aaaaaaaaaaaaaa", ["aa", "aa"]),
);
