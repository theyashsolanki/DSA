#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  int maxProfit(vector<int> &prices) {
    int buy = prices[0];
    int ans = 0;
    for (int i = 0; i < prices.size(); i++) {
      int profit = prices[i] - buy;
      if (profit > ans) {
        ans = profit;
      }
      if (prices[i] < buy)
        buy = prices[i];
    }
    return ans;
  }
};

int main() {
  Solution s = Solution();
  vector<int> prices = {7, 1, 5, 3, 6, 4};
  cout << s.maxProfit(prices) << endl;
}
