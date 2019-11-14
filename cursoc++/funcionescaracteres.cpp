#include<iostream>
#include<conio.h>
#include<string.h>
using namespace std;

//FUNCIONES EN CADENAS DE CARACTERES

int main(){
    char Nombre[] = "David Arteaga";
    char otroNombre[] = "Bryan Satian"; 
    int longitudPalabra = strlen(Nombre); //MIDE LA LONGITUD DE UNA PALABRA incluyendo espacios






    cout<<longitudPalabra<<endl; 
    cout<<strcmp(Nombre, otroNombre)<<endl;
    //FUNCION STRCMP: COMPARA CADENAS, SI SON IGUALES MANDA 0, SI SON DIFERENTES MANDA UN 1.
    // IDEAL PARA INGRESAR EN CONDICIONALES


//FUNCION PARACONCATENAR CADENAS
char unirnombres[30];
 strcpy(unirnombres, Nombre); //unirNombres = "David Arteaga"
 strcat(unirnombres,otroNombre); //unirnombres = "David arteaga Bryan Satian"

 cout<<unirnombres<<endl;


//FUNCION QUE INVIERTE UNA CADENA


    getch();
    return 0;
}