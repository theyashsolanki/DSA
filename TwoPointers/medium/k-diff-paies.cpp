#include <algorithm>
#include <cstdlib>
#include <iostream>
#include <vector>
using namespace std;
class Solution {
public:
  int findPairs(vector<int> &nums, int k) {
    int n = nums.size();
    int ans = 0;
    sort(nums.begin(), nums.end());
    int i = 0;
    int j = 1;

    while (i < n && j < n) {
      int diff = abs(nums[i] - nums[j]);
      if (diff == k) {
        ans++;
        i++, j++;
        while (i < n && nums[i] == nums[i - 1])
          i++;
        while (j < n && nums[j] == nums[j - 1])
          j++;
      } else if (diff < k)
        j++;
      else
        i++;

      if (i == j)
        j++;
    }
    return ans;
  }
};

int main() {
  Solution *s = new Solution();
  vector<int> nums = {1, 2, 3, 4, 5};
  int k = 1;
  cout << s->findPairs(nums, k) << endl;
}
