#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  string decodeMessage(string key, string message) {
    char start = 'a';
    char hashMap[300] = {0};
    for (char c : key) {
      if (!hashMap[c] && c != ' ') {
        hashMap[c] = start;
        start++;
      }
    }
    for (int i = 0; i < message.size(); i++) {
      char c = message[i];
      if (c != ' ') {
        message[i] = hashMap[c];
      }
    }
    return message;
  }
};

int main() {
  Solution *s = new Solution();
  string key = "the quick brown fox jumps over the lazy dog";
  string message = "vkbs bs t suepuv";
  cout << s->decodeMessage(key, message) << endl;
}
