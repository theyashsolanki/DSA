#include "iostream"
#include "vector"
#include <algorithm>
#include <string>

using namespace std;

class Solution {
public:
  static bool customSort(int a, int b) {
    string first = to_string(a) + to_string(b);
    string second = to_string(b) + to_string(a);
    // by default lexicographical comparision is done for strings
    return first > second;
  }
  string largestNumber(vector<int> &nums) {
    string ans = "";
    sort(nums.begin(), nums.end(), customSort);
    for (int x = 0; x < nums.size(); x++) {
      ans += to_string(nums[x]);
    }
    if (ans[0] == '0')
      return "0";
    return ans;
  }
};
int main() {
  Solution s = Solution();
  vector<int> nums = {22, 22, 3};
  cout << s.largestNumber(nums) << endl;
}
