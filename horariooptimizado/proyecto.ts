import * as prompts from 'prompts'
import { HorarioDeClases } from './EstructuraHorario';

// PROYECTO: Crear un horario con todas las posibles opciones que se cree a partir del
// ingreso de varias materias en diferentes horarios
//esta para compilarse con: npm run start

/*PSEUDOCODIGO
1. Iniciar creando la interfaz en donde se van a ubicar las horas, recomendable crear de cada hora.
2. Pedir los respectivos datos al usuario e ingresarlos a un array.
3. 

*/


async function Principal(){

    //Crear una funcion que me itere las veces que yo decida, se guardara en un array.
    const  DatosCompletosRecibidos = [] // Aqui voy a guardar los datos
   // const DatosClave = [];
    let AgregarOtraMateria; //Iniciamos fuera del bucle while
    do{ // Uso el do para volver a ingresar mas materias en caso que se necesite
        const Preguntas = [
            {
                type: 'text',
                name: 'Materia',
                message: '\nIngresa el nombre de la materia: '
            },
            {
                type: 'autocomplete',
                name: 'Dia',
                message: 'Ingresa el dia: ',
                choices: [
                    {title: 'Lunes'},
                    {title: 'Martes'},
                    {title: 'Miercoles'},
                    {title: 'Jueves'},
                    {title: 'Viernes'}
                ]
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
                message: 'confirme sus datos: ',
                initial: true,
                active: 'Todo correcto',
                inactive: 'Puse mal un dato' // confirmar en caso que algo hayamos ingresado mal y toque repetir
            }
        ];

        const Respuestas = await prompts(Preguntas); // Se agregan las respuestas

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
    //console.log('\nLos datos unidos son los siguientes: \n', DatosClave);

    
    





    
}

Principal();

