#include<iostream>
#include<conio.h>
#include<string.h> //Para cadenas de caracteres
using namespace std;

int main(){
    char palabra[]="David";
    //char palabraDos[] = {'D','a','v','i','d'};
    char nombre[20];
    int longitudPalabra = 0; 

    cout<<palabra<<endl;
   // cout<<palabraDos<<endl;

cout<<"Digite su nombre: "<<endl;
cin.getline(nombre, 20, '\n');  
// EL get line define de que tama;o quiere que sea la secuencia
cout<< nombre<<endl;


    getch();
    return 0;
}