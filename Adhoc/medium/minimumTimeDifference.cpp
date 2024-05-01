#include "vector"
#include <algorithm>
#include <climits>
#include <iostream>

using namespace std;

class Solution {
public:
  static int stringToInteger(string s) {
    int ans = 0;
    for (int i = 0; i < s.size(); i++) {
      ans = ans * 10 + (s[i] - '0');
    }
    return ans;
  }
  int findMinDifference(vector<string> &timePoints) {
    vector<int> minutes;
    for (int i = 0; i < timePoints.size(); i++) {
      int h = stringToInteger(timePoints[i].substr(0, 2));
      int m = stringToInteger(timePoints[i].substr(3));
      minutes.push_back(h * 60 + m);
    }
    sort(minutes.begin(), minutes.end());

    int min = INT_MAX;

    for (int i = 1; i < minutes.size(); i++) {
      if (minutes[i] - minutes[i - 1] < min) {
        min = minutes[i] - minutes[i - 1];
      }
    }

    int last = 24 * 60 + minutes[0] - minutes[minutes.size() - 1];

    if (last < min)
      min = last;

    return min;
  }
};

int main() {
  Solution s = Solution();
  vector<string> timePoints = {"05:31", "22:08", "00:35"};
  cout << s.findMinDifference(timePoints) << endl;
  return 0;
}
