import { EntradaDeDatos } from "./IngresoDatos";



// PROYECTO: Crear un horario con todas las posibles opciones que se cree a partir del
// ingreso de varias materias en diferentes horarios
//esta para compilarse con: npm run start

/*PSEUDOCODIGO
1. Iniciar creando la interfaz en donde se van a ubicar las horas, recomendable crear de cada hora.
2. Pedir los respectivos datos al usuario e ingresarlos a un array.
3. Luegogde que se hayan ingresado los respectivos datos al array deberia iniciar una comprobacion de cada tipo
4. DEberia empezar por prioridades, entonces inicia con ingresar la primera Materia
*/


async function Principal(){
    const Datos =  await EntradaDeDatos();
    console.log('\nLas materias que has elegido son: \n', Datos); 





}
Principal();