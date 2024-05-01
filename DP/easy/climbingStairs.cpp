#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  int solve(int n, vector<int> &dp) {
    if (n == 1 || n == 0)
      return 1;

    if (!dp[n]) {
      dp[n] = solve(n - 1, dp) + solve(n - 2, dp);
    }
    return dp[n];
  }
  int climbStairs(int n) {
    vector<int> dp(n + 1, 0);
    return solve(n, dp);
  }
};

int main() {
  Solution s = Solution();
  cout << s.climbStairs(10) << endl;
}
