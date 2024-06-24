#include <algorithm>
#include <iostream>
#include <map>
#include <utility>
#include <vector>

using namespace std;

class Solution {
public:
  void solve(vector<int> &nums, vector<vector<int>> &ans, int index = 0) {
    if (index == nums.size() - 1) {
      ans.push_back(nums);
      return;
    }

    map<int, bool> visited;

    for (int i = index; i < nums.size(); i++) {
      if (visited[nums[i]])
        continue;
      visited[nums[i]] = true;
      swap(nums[i], nums[index]);

      solve(nums, ans, index + 1);

      swap(nums[i], nums[index]);
    }
  }
  vector<vector<int>> permute(vector<int> &nums) {
    vector<vector<int>> ans;
    vector<int> temp;
    solve(nums, ans);
    return ans;
  }
};

int main() {
  Solution s = Solution();
  vector<int> nums = {1, 1, 2};
  vector<vector<int>> ans = s.permute(nums);

  for (const auto v : ans) {
    for (const int i : v) {
      cout << i << " ";
    }
    cout << "\n";
  }
}
