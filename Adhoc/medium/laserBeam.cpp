#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  int numberOfBeams(vector<string> &bank) {
    int ans = 0;
    int preCount = 0;
    for (int i = 0; i < bank.size(); i++) {
      int count = 0;
      for (char c : bank[i]) {
        if (c == '1')
          count++;
      }
      if (count == 0)
        continue;
      if (preCount)
        ans += count * preCount;
      preCount = count;
    }

    return ans;
  }
};

int main() {
  Solution *s = new Solution();
  vector<string> bank = {"011001", "000000", "010100", "001000"};
  cout << s->numberOfBeams(bank) << endl;
}
