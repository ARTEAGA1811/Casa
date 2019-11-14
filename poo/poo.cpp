#include<iostream>
#include<stdlib.h>
using namespace std;

// clases en c++ 

 class Persona{
     private: //Por encapsulamiento-- atributos
        int edad;
        string nombre;
    public:  //metodos
        Persona(int, string); //Constructor
        void leer();
        void correr();

   };
    //Constuctor, nos sirve para inicializar los atributos
   Persona::Persona(int _edad, string _nombre){
    edad = _edad;
    nombre = _nombre;
   }

   void Persona::leer(){
       cout<<"Soy "<<nombre<<" y estoy leyendo un libro\n";
   }

   void Persona::correr(){
       cout<<"Soy "<<nombre<<" y estoy corriendo una maraton\n";
   }
int main(){
    Persona p1 = Persona(20, "David");

    p1.leer();
    p1.correr();





    system("pause");
    return 0;
}