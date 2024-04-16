#include <iostream>
#include <map>
#include <string>

using namespace std;

class Solution {
public:
  map<char, int> hashDigit = {{'0', 0}, {'1', 1}, {'2', 2}, {'3', 3}, {'4', 4},
                              {'5', 5}, {'6', 6}, {'7', 7}, {'8', 8}, {'9', 9}};
  void reverseString(string &str) {
    int start = 0;
    int end = str.size() - 1;
    while (start <= end) {
      char temp = str[start];
      str[start] = str[end];
      str[end] = temp;
      start++;
      end--;
    }
  }
  string addStrings(string &num1, string &num2) {
    if (num1.size() == 0)
      return num2;
    if (num2.size() == 0)
      return num1;
    string ans = "";
    int i = num1.size() - 1;
    int j = num2.size() - 1;
    int carry = 0;

    while (i >= 0 && j >= 0) {
      int x = hashDigit[num1[i]] + hashDigit[num2[j]] + carry;
      ans += (x % 10 + '0');
      carry = x / 10;
      i--, j--;
    }

    while (i >= 0) {
      int x = hashDigit[num1[i]] + carry;
      ans += (x % 10 + '0');
      carry = x / 10;
      i--;
    }

    while (j >= 0) {
      int x = hashDigit[num2[j]] + carry;
      ans += (x % 10 + '0');
      carry = x / 10;
      j--;
    }

    while (carry) {
      ans += (carry % 10 + '0');
      carry /= 10;
    }
    reverseString(ans);
    return ans;
  }
  string multiply(string &num1, string &num2) {
    int n1 = num1.size();
    int n2 = num2.size();
    string ans = "";
    int zero = 0;
    for (int i = n1 - 1; i >= 0; i--) {
      int carry = 0;
      string temp = "";
      for (int j = n2 - 1; j >= 0; j--) {
        int x = hashDigit[num1[i]] * hashDigit[num2[j]] + carry;
        temp += (x % 10 + '0');
        carry = x / 10;
      }
      while (carry) {
        temp += (carry % 10 + '0');
        carry /= 10;
      }
      reverseString(temp);
      for (int k = 0; k < zero; k++) {
        temp += '0';
      }
      zero++;
      ans = addStrings(ans, temp);
    }
    if (ans[0] == '0')
      return "0";
    return ans;
  }
};

int main() {
  Solution *s = new Solution();
  string num1 = "100";
  string num2 = "10";
  cout << s->multiply(num1, num2) << endl;
}
