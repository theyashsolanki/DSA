#include <climits>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  int solve(vector<int> &coins, int amount) {
    if (amount == 0)
      return 0;

    if (amount < 0)
      return INT_MAX;
    int min = INT_MAX;

    for (int i = 0; i < coins.size(); i++) {
      int ans = solve(coins, amount - coins[i]);
      if (ans != INT_MAX && ans < min)
        min = ans + 1;
    }
    return min;
  }
  int coinChange(vector<int> &coins, int amount) {
    int ans = solve(coins, amount);
    if (ans == INT_MAX)
      return -1;
    return ans;
  }
};

int main() {
  Solution s = Solution();
  vector<int> coins = {1, 2, 5};
  int amount = 11;
  cout << s.coinChange(coins, amount) << endl;
}
