#include <iostream>
#include <limits.h>
#include <map>

using namespace std;

class Solution {
public:
  int myAtoi(string s) {
    map<char, int> digits = {{'0', 0}, {'1', 1}, {'2', 2}, {'3', 3}, {'4', 4},
                             {'5', 5}, {'6', 6}, {'7', 7}, {'8', 8}, {'9', 9}};
    int ans = 0;
    bool isPositive = true;
    int i = 0;
    while (i < s.size() && s[i] == ' ')
      i++;
    if (s[i] == '-') {
      isPositive = false;
      i++;
    } else if (s[i] == '+')
      i++;
    for (; i < s.size(); i++) {
      if (!digits[s[i]] && s[i] != '0')
        break;
      if (ans > INT_MAX / 10) {
        if (!isPositive)
          return INT_MIN;
        return INT_MAX;
      } else if (ans == INT_MAX / 10) {
        if (!isPositive && digits[s[i]] >= 8)
          return INT_MIN;
        else if (isPositive && digits[s[i]] >= 7)
          return INT_MAX;
      }
      ans = ans * 10 + digits[s[i]];
    }
    if (!isPositive)
      ans *= -1;
    return ans;
  }
};

int main() {
  Solution *s = new Solution();
  cout << s->myAtoi("-+2") << endl;
  // cout << INT_MIN << endl;
}
