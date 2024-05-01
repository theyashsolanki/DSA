#include <iostream>
#include <utility>

using namespace std;

void solve(string &s, int index = 0) {
  if (index == s.size() - 1) {
    cout << s << endl;
    return;
  }

  for (int i = index; i < s.size(); i++) {
    swap(s[i], s[index]);

    solve(s, index + 1);

    swap(s[i], s[index]);
  }
}

int main() {
  string s = "xyz";
  solve(s);
}
