#include <iostream>
#include <stdlib.h>
#include <conio.h>
using namespace std;

 
   /************* ANALIZADOR SEMANTICO   *********************/
   

void CoincidirTipos();
void VariableNoDeclarada();
void IdentificadorReservado();
void VariablesMultiples();
void VariableFueraDelAlcance();



int main(){
  CoincidirTipos();
  VariableNoDeclarada();
  IdentificadorReservado();
  VariablesMultiples();
  VariableFueraDelAlcance();
  

  cout<<"\n\tCOMO PODEMOS OBSERVAR, AHORA EL ANALIZADOR SEMANTICO DE ESTE COMPILADOR NO MARCA NINGUN ERROR";
  
  return 0;
  system("pause");
}

void CoincidirTipos(){ 
 //Error #1: NO COINCIDEN LOS TIPOS

 /*
  //Ingreso Erroneo
  int NumeroEntero = "Soy una cadena de tipo string"; 
  string SecuenciaDeCaracteres = true;
  char Caracter = 243.5232;   
  */

  /*
  //Ingreso Correcto
  int NumeroEntero = 6;
  string SecuenciaDeCaracteres =  "Hola soy una secuencia de caracteres";
  bool Booleano = false;
  char Caracter = 'd';

  cout<<endl<<"--------------------------------"<<endl;
  cout<<endl<<NumeroEntero<<", "<<SecuenciaDeCaracteres<<", "<<Booleano<<", "<<Caracter<<"."<<endl;
  cout<<endl<<"--------------------------------"<<endl;
  */

}

void VariableNoDeclarada(){
  //Error #2: Usar una variable que no esta definida.

  /*
  //Ingreso Erroneo
  cout<<"Suma de dos numeros"<<endl;
  float numeroUno = 5.75;
        numeroDos = 3.2;
  cout<<numeroUno<<" + "<<numeroDos<<" = "<<numeroUno+numeroDos<<endl;
  */

  /*
  //Ingreso Correcto
  cout<<"Suma de dos numeros"<<endl;
  float numeroUno = 5.75;
  float numeroDos = 3.2;

  cout<<numeroUno<<" + "<<numeroDos<<" = "<<numeroUno+numeroDos<<endl;
  cout<<endl<<"--------------------------------"<<endl;
  */

}

void IdentificadorReservado(){
  //Error #3: Se le intenta dar como nombre a algun tipo con palabras reservadas.

  /*
  //Ingreso Erroneo
  string bool = "Compiladores";
  */

  /*
  //Ingreso Correcto
  string palabra = "Compiladores";
  cout<<endl<<palabra<<endl;
  cout<<endl<<"--------------------------------"<<endl;
  */

}

void VariablesMultiples(){
  //Error #4: Declaracion de variables multiples en un ambito.

  /*
  //Ingreso Erroneo
  int Expo = 100;
  Expo = "cien";
  */

  /*
  //Ingreso Correcto
  int Expo = 100;
  Expo = 255;

  cout<<endl<<Expo<<endl;
  cout<<endl<<"--------------------------------"<<endl;
  */


}

void VariableFueraDelAlcance(){
  //Error #5: Se toma un valor fuera del alcance.

  /*
  //Ingreso Erroneo
  for(int i = 0; i<10; i++){
    int contador = 0;
    contador += 1;
  }
  cout<<contador<<endl;
  */

  /*
  //Ingreso Correcto
  int contador = 0;
  for(int i = 0; i<10; i++){
    contador += 1;
  }
  cout<<contador<<endl;
  cout<<endl<<"--------------------------------"<<endl;
  */
  
}



