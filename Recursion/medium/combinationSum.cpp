#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  void solve(vector<int> &candidates, vector<int> &temp,
             vector<vector<int>> &ans, int target, int index = 0) {
    if (target == 0) {
      ans.push_back(temp);
      return;
    }
    if (target < 0)
      return;

    for (int i = index; i < candidates.size(); i++) {
      temp.push_back(candidates[i]);
      solve(candidates, temp, ans, target - candidates[i], index);
      temp.pop_back();
      index++;
    }
  }
  vector<vector<int>> combinationSum(vector<int> &candidates, int target) {
    vector<int> temp;
    vector<vector<int>> ans;

    solve(candidates, temp, ans, target);

    return ans;
  }
};

int main() {
  Solution s = Solution();

  vector<int> candidates = {2, 3, 6, 7};
  vector<vector<int>> ans = s.combinationSum(candidates, 7);

  for (int i = 0; i < ans.size(); i++) {
    for (int j = 0; j < ans[i].size(); j++) {
      cout << ans[i][j] << " ";
    }
    cout << "\n";
  }
}
