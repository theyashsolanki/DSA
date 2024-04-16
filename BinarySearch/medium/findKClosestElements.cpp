#include <cstdlib>
#include <iostream>
#include <vector>
using namespace std;
class Solution {
public:
  int lowerBound(vector<int> &nums, int target) {
    int ans = -1;
    int start = 0;
    int end = nums.size() - 1;
    while (start <= end) {
      int mid = start + (end - start) / 2;
      if (nums[mid] <= target) {
        ans = mid;
        start = mid + 1;
      } else
        end = mid - 1;
    }

    if (ans == -1)
      return start;
    return ans;
  }
  vector<int> findClosestElements(vector<int> &arr, int k, int x) {
    int start = lowerBound(arr, x);
    if (start + 1 < arr.size() && abs(arr[start] - x) > abs(arr[start + 1] - x))
      start++;
    int i = start;
    int j = start;
    while (j - i + 1 < k) {
      if (i == 0) {
        j++;
        continue;
      }
      if (j == arr.size() - 1) {
        i--;
        continue;
      }
      int rdiff = abs(arr[j + 1] - x);
      int ldiff = abs(arr[i - 1] - x);
      if (rdiff < ldiff)
        j++;
      else
        i--;
    }
    vector<int> ans(k);
    for (int a = 0; a < ans.size(); a++) {
      ans[a] = arr[i + a];
    }
    return ans;
  }
};

int main() {
  Solution *s = new Solution();
  vector<int> arr = {1, 2, 3, 4, 5};
  int k = 4;
  int x = 1;
  for (int x : s->findClosestElements(arr, k, x)) {
    cout << x << " ";
  }
  cout << "\n";
}
