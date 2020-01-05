/*
14/4 = 7/2
Sea a/b entonces 
se inicia con un bucle do while
ingresa un condicional, si el modulo de a&contador y tambien b%contador es exacto entonces...
se cambia variables
a = a/contador
b = b/contador

*/

let numerador = 1587; //ejemplos
let verticeXDenominador = 36; //Ejemplos
let contador = 1;
do{
    contador+=1;
        if(numerador%contador==0 && verticeXDenominador%contador==0){
            numerador= (numerador/contador);
            verticeXDenominador= (verticeXDenominador/contador);
            contador = (contador-1); //Se regresa el contador para que vuelva a dividir por el mismo
        }

}while(contador!=verticeXDenominador);

console.log(`${numerador}/${verticeXDenominador}`);
//FUNCIONA!!!!