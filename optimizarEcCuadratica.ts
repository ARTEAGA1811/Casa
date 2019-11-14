console.log("\tBienvenido este programa calcula varios elementos de una ecuacion cuadratica\n");
console.log("A continuacion introduzca a, b y c\nDe la forma ax^2+bx+c.");
//Ingresan a,b,c
const aString = prompt("ax^2+bx+c.\nIntroduzca a:");
const bString = prompt("ax^2+bx+c.\nIntroduzca b:");
const cString = prompt("ax^2+bx+c.\nIntroduzca c:");
const a = Number(aString);
const b = Number(bString);
const c = Number(cString);

let verticeXNumerador = -b;
let verticeXDenominador= 2*a;
let contador1 = 1;

do{
    contador1+=1;
        if(verticeXNumerador%contador1==0 && verticeXDenominador%contador1==0){
            verticeXNumerador= (verticeXNumerador/contador1);
            verticeXDenominador= (verticeXDenominador/contador1);
            contador1 = (contador1-1); //Se regresa el contador para que vuelva a dividir por el mismo
        }

}while(contador1!=verticeXDenominador);

console.log(`El vertice en x es ${verticeXNumerador}/${verticeXDenominador}`);