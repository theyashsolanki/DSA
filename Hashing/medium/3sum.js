const threeSum = (nums) => {
  const hashTable = {};
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (!hashTable[nums[i]]) {
      hashTable[nums[i]] = {
        "id": i,
        "count": 1,
        "pairs": {},
      };
    } else {
      hashTable[nums[i]].count++;
    }
  }
  let c = 0;
  while (c < nums.length) {
    let b = c + 1;
    while (b < nums.length) {
      let a = -nums[c] - nums[b];
      hashTable[nums[b]].count--;
      hashTable[nums[c]].count--;
      let val = hashTable[a];
      if (val && val.count >= 1) {
        if (!val.pairs[nums[b]] || !val.pairs[nums[c]]) {
          val.pairs[nums[b]] = 1;
          val.pairs[nums[c]] = 1;

          hashTable[nums[b]].pairs[a] = 1;
          hashTable[nums[b]].pairs[nums[c]] = 1;
          hashTable[nums[c]].pairs[a] = 1;
          hashTable[nums[c]].pairs[nums[b]] = 1;

          ans.push([nums[val.id], nums[b], nums[c]]);
        }
        val.count--;
      } else {
        hashTable[nums[b]].count++;
        hashTable[nums[c]].count++;
      }
      b++;
    }
    c++;
  }
  return ans;
};

console.log(threeSum([0, 0, 0]));
