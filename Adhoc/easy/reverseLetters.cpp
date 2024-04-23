#include "iostream"
using namespace std;
class Solution {
public:
  string reverseOnlyLetters(string s) {
    int i = 0;
    int j = s.size() - 1;
    // 65 -> 90 && 97 -> 122
    while (i < j) {
      int x = s[i];
      int y = s[j];
      if (!(x >= 65 && x <= 90) && !(x >= 97 && x <= 122))
        i++;
      else if (!(y >= 65 && y <= 90) && !(y >= 97 && y <= 122))
        j--;
      else {
        char temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
      }
    }
    return s;
  }
};

int main() {
  Solution *sol = new Solution();
  string s = "a-bC-dEf-ghIj";
  cout << sol->reverseOnlyLetters(s) << endl;
}
