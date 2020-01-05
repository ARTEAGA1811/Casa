#include<iostream>
#include<conio.h>
using namespace std;

//BUSQUEDA SECUENCIAL
// a[5] = {3,4,2,1,5}; dato = 4

int main(){
    int a[] = {3,4,2,1,5};
    int i, dato;
    char bandera = 'F';

    dato = 4;
    //Busqueda Secuencial
    i = 0;
    while(bandera == 'F' && i<5){   
            if(a[i] == dato){
                bandera = 'V';
            }
        i++;

    }





    getch();
    return 0;
}