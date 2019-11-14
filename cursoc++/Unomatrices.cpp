/*
Hacer una matriz de tipo entrero de 2 por 2, rellenarla
y luego copiar toddo su contenido hacia otra matriz */

#include<iostream>
#include<conio.h>
using namespace std;

int main(){
    int numeros[2][2] = {{1,2},{3,4}};
    int matrizDos[2][2]; 

    for(int i=0; i<2; i++){
        for(int j=0; j<2; j++){
            matrizDos[i][j]=numeros[i][j];
        }
    }

    //Imprimir matriz
    for(int i=0; i<2; i++){
        for(int j=0; j<2; j++){
            cout<<matrizDos[i][j];
        }
    }


    getch();
    return 0;
}