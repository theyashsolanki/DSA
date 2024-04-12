#include "iostream"
#include "vector"
class Solution {
public:
  std::vector<int> rearrangeArray(std::vector<int> &nums) {
    std::vector<int> ans;
    int i = 0;
    int j = 0;

    while (j < nums.size() && i < nums.size()) {
      if (nums[i] < 0)
        i++;
      else if (nums[j] > 0)
        j++;
      else {
        ans.push_back(nums[i]);
        ans.push_back(nums[j]);
        i++, j++;
      }
    }
    return ans;
  }
};

int main() {
  Solution *s = new Solution();
  std::vector<int> nums = {3, 1, -2, -5, 2, -4};
  for (int x : s->rearrangeArray(nums)) {
    std::cout << x << " ";
  }
  std::cout << "\n";
}
