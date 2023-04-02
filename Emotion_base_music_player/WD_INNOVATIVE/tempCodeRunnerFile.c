#include<stdio.h>
using namespace std;
void f(void){
    printf("hello");
}
int main(){
    f();
    f(2);
    return 0;
}