#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  string removeDuplicates(string s, int k) {
    vector<int> count(s.size(), 1);

    int i = 0;
    int j = 0;
    while (j < s.size()) {
      s[i] = s[j];
      count[i] = 1;
      if (i > 0 && s[i] == s[i - 1]) {
        count[i] += count[i - 1];
      }
      if (count[i] == k) {
        i -= k;
      }
      i++, j++;
    }

    return s.substr(0, i);
  }
};

int main() {
  Solution s = Solution();
  cout << s.removeDuplicates("deeedbbcccbdaa", 3) << endl;
}
