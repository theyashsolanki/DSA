#include "iostream"

using namespace std;

class Solution {
public:
  bool allocate(int A[], int N, int mid, int M) {
    int pages = 0;
    int students = 1;
    for (int i = 0; i < N; i++) {
      if (pages + A[i] > mid) {
        students++;
        pages = 0;
      }
      pages += A[i];
    }
    if (students <= M)
      return true;
    return false;
  }
  int findPages(int A[], int N, int M) {
    if (M > N)
      return -1;
    int sum = 0;
    int max = -1;
    for (int i = 0; i < N; i++) {
      sum += A[i];
      if (A[i] > max)
        max = A[i];
    }

    int &start = max;
    int &end = sum;
    int ans = -1;

    while (start <= end) {
      int mid = start + (end - start) / 2;
      if (allocate(A, N, mid, M)) {
        ans = mid;
        end = mid - 1;
      } else
        start = mid + 1;
    }
    return ans;
  }
};

int main() {
  Solution *s = new Solution();
  int A[] = {15, 17, 20};
  int N = sizeof(A) / sizeof(A[0]);
  int M = 2;
  cout << s->findPages(A, N, M) << endl;
}
