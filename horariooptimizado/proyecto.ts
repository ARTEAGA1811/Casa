import * as prompts from 'prompts'
import { HorarioDeClases } from './EstructuraHorario';

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

    //Crear una funcion que me itere las veces que yo decida, se guardara en un array.
    const  DatosCompletosRecibidos = [] // Aqui voy a guardar los datos
   
    let AgregarOtraMateria; //Iniciamos fuera del bucle do while
    do{ // Uso el do para volver a ingresar mas materias en caso que se necesite
        let Preguntas = [
            {
                type: 'text',
                name: 'Materia',
                message: '\nIngresa el nombre de la materia: '
            },
            {
                type: 'text',
                name: 'Paralelo',
                message: 'Ingresa el paralelo: '
            },
            {
                type: 'autocompleteMultiselect',
                name: 'Dias',
                message: 'Ingresa los dias que tienes la materia: ',
                choices: [
                    { title: 'Lunes', value: 'Lunes'},
                    { title: 'Martes', value: 'Martes'},
                    { title: 'Miercoles', value: 'Miercoles'},
                    { title: 'Jueves', value: 'Jueves'},
                    { title: 'Viernes', value: 'Viernes'}
                ],
                max: 3,
                hint: '-Space para seleccionar. Enter para enviar'
            },
            {
                type: 'number',
                name: 'HoraDeInicio',
                message: 'Hora de inicio: ',
                initial: 7,
                style: 'default',
                min: 7, //siete de la manana es lo minimo para ingresar
                max: 20 
            },
            {
                type: 'number',
                name: 'HoraDeFinalizacion',
                message: 'Hora de finalizaacion: ',
                initial: 8,
                style: 'default',
                min: 8,
                max: 20 //maximo tengo clases hasta las 8 de la noche 
            },
            {
                type: 'toggle',
                name: 'Confirmacion',
                message: 'Confirme sus datos: ',
                initial: true,
                active: 'Todo correcto',
                inactive: 'Puse mal un dato' // confirmar en caso que algo hayamos ingresado mal y toque repetir
            }
        ];
        
        const Respuestas = await prompts(Preguntas); // Se agregan las respuestas
        
        Respuestas.Materia = Respuestas.Materia.toUpperCase(); //Cambio las materias a mayusculas.
        Respuestas.Paralelo = Respuestas.Paralelo.toUpperCase(); //Cambio el curso a mayusculas.

        if(Respuestas.Confirmacion == true){ //Si lo que ingresamos es correcto, se guarda la info ingresada en el array
            DatosCompletosRecibidos.push(Respuestas);
            //DatosClave.push(Respuestas.Materia, Respuestas.Dia, Respuestas.HoraDeInicio, Respuestas.HoraDeFinalizacion);
        }

        AgregarOtraMateria = await prompts({ //Preguntamos si desea agregar otra materia
            type: 'toggle',                    //si este booleano es un true: se vuelve a repetir el ciclo por el do
            name: 'AgregaMateria',          //si es false: sale del bucle do
            message: 'Deseas agregar otra materia?: ',
            initial: true,
            active: 'Si',
            inactive: 'No'
        });  
        
    }while(AgregarOtraMateria.AgregaMateria == true ); //Se ejecutara mientras que se elija que se agregue otra materia

    console.log('\nLas materias que has elegido son: \n', DatosCompletosRecibidos);
   

    
}

Principal();

