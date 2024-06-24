#include <iostream>

using namespace std;

class Node {
  static int length;
  static Node *tail;
  static Node *head;

public:
  int data;
  Node *next;
  Node() {
    this->next = NULL;
    length++;
    if (head == NULL) {
      head = this;
      tail = this;
    }
  }
  Node(int data) {
    this->next = NULL;
    this->data = data;
    if (head == NULL) {
      head = this;
      tail = this;
    }
    length++;
  }

  ~Node() {
    //
    cout << "dtor called for : " << this->data << endl;
  }

  int getHead() {
    if (head == NULL)
      return 0;
    return head->data;
  }

  int getTail() {
    if (tail == NULL)
      return 0;
    return tail->data;
  }

  int getLen() { return this->length; }

  static void deleteHead() {
    Node *temp = head;
    head = head->next;
    length--;
    if (temp == tail) {
      tail = NULL;
    }
    delete temp;
  }

  static void deleteAt(int pos) {
    if (pos == 1) {
      deleteHead();
      return;
    }
    if (pos > length || pos < 1) {
      cout << "invalid index" << endl;
      return;
    }
    Node *temp = head;
    int i = 1;
    while (i < pos - 1 && temp != NULL) {
      i++;
      temp = temp->next;
    }
    if (pos == length)
      tail = temp;
    Node *p = temp->next;
    temp->next = p->next;
    length--;
    delete p;
  }

  static void insertAtHead(int data) {
    Node *newHead = new Node(data);
    if (head != newHead) {
      newHead->next = head;
      head = newHead;
    }
  }

  static void insertAtTail(int data) {
    Node *newTail = new Node(data);
    if (tail != newTail) {
      tail->next = newTail;
      tail = newTail;
    }
  }

  static void insertAt(int pos, int data) {
    if (pos < 1 || pos > head->length) {
      cout << "index out of bound" << endl;
      return;
    }
    Node *temp = head;
    int i = 1;
    while (i < pos - 1 && temp != NULL) {
      i++;
      temp = temp->next;
    }
    if (temp == NULL)
      return;
    Node *newNode = new Node(data);
    newNode->next = temp->next;
    temp->next = newNode;
  }

  static void printLL() {
    Node *temp = head;
    while (temp != NULL) {
      cout << temp->data << "->";
      temp = temp->next;
    }
    cout << "\n";
  }
};
int Node::length = 0;
Node *Node::head = NULL;
Node *Node::tail = NULL;

int main() {
  Node *list = new Node(1);
  list->insertAt(2, 5);
  list->printLL();
  cout << "tail: " << list->getTail() << endl;
  cout << "head: " << list->getHead() << endl;
  cout << "length: " << list->getLen() << endl;
}
