#include <iostream>
#include <ctime>
#include <stdlib.h>

#define MAX_SIZE 500

using std::cout;
using std::cin;
using std::endl;

void qsort(int[], int, int);
int partition(int[], int, int);

int main() {
  int a[MAX_SIZE], i, n;
  clock_t start, end, time_taken;

  start = clock();

  cout << "Enter the value of n: ";
  cin >> n;

  for (i = 0; i < n; i++) {
    a[i] = rand() % 100;
  }

  cout << "\nThe array elements before:\n";
  for (i = 0; i < n; i++) {
    cout << a[i] << "\t";
  }

  qsort(a, 0, n - 1);

  cout << "\nElements of the array after quick sort are:\n";
  for (i = 0; i < n; i++) {
    cout << a[i] << "\t";
  }

  end = clock();
  time_taken = end - start;

  cout << "\nTime taken: " << time_taken / CLOCKS_PER_SEC << " seconds\n";

  return 0;
}

void qsort(int a[], int low, int high) {
  if (low < high) {
    int j = partition(a, low, high);
    qsort(a, low, j - 1);
    qsort(a, j + 1, high);
  }
}

int partition(int a[], int low, int high) {
  int pivot = a[high];
  int i = low - 1;

  for (int j = low; j < high; j++) {
    if (a[j] <= pivot) {4
      i++;
      std::swap(a[i], a[j]);
    }
  }

  std::swap(a[i + 1], a[high]);

  return i + 1;
}
