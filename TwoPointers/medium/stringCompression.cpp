#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
  int compress(vector<char> &chars) {
    int index = 0;
    int count = 1;
    char curr = chars[0];

    int i = 1;
    while (i < chars.size()) {
      if (chars[i] == curr) {
        count++;
      } else {
        chars[index++] = curr;
        if (count > 1) {
          string num = to_string(count);
          for (char x : num) {
            chars[index++] = x;
          }
        }
        curr = chars[i];
      }
      i++;
    }

    chars[index++] = curr;
    if (count > 1) {
      string num = to_string(count);
      for (char x : num) {
        chars[index++] = x;
      }
    }
    return index;
  }
};

int main() {
  Solution *s = new Solution();
  vector<char> chars = {'a', 'b', 'b', 'b', 'b', 'b', 'b',
                        'b', 'b', 'b', 'b', 'b', 'b'};
  cout << s->compress(chars) << endl;
  for (char c : chars)
    cout << c << " ";
}
