#include <iostream>

using namespace std;

void solve(string &s, int i, string temp) {
  if (i == s.size()) {
    cout << "-->" << temp << endl;
    return;
  }
  temp.push_back(s[i]);
  solve(s, i + 1, temp);
  temp.pop_back();
  solve(s, i + 1, temp);
}

int main() {
  string s = "abcd";
  int i = 0;
  string temp = "";
  solve(s, i, temp);
}
