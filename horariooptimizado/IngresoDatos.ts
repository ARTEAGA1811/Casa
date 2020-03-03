import * as prompts from 'prompts'

export async function EntradaDeDatos(){

    let DatosCompletosRecibidos = []; //Aqui se guarda todo
    let DesicionAgregar = false; //Para preguntar si se agregan mas materias
    
    do{
        const Questions = [
            {
                type: 'text',
                name: 'Materia',
                message: '\nIngresa el nombre de la materia: ',
            },
            {
                type: 'text',
                name: 'Curso',
                message: 'Ingresa el curso de la materia'
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
                min: 1,
                max: 3,
                hint: '-Space para seleccionar. Enter para enviar'
            }
        ];

        let Respuestas = await prompts(Questions);
        //Ingresan los horarios de cada dia 
        const Numero_dias = Respuestas.Dias.length;
        const ArrayHorarios = []; 

        for(let i = 0; i<Numero_dias; i++){
            console.log('\nIngresa el horario del dia ', Respuestas.Dias[i])
            const DosPreguntas = [
                {
                    type: 'number',
                    name: 'HoraInicio',
                    message: 'Hora de inicio',
                    initial: 7,
                    style: 'default',
                    min: 7,
                    max: 19
                },
                {
                    type: 'number',
                    name: 'HoraFin',
                    message: 'Hora de finalizacion',
                    initial: 8,
                    style: 'default',
                    min: 8,
                    max: 20
                }
            ];
            const DosRespuestas = await prompts(DosPreguntas);
            ArrayHorarios.push(`${DosRespuestas.HoraInicio}-${DosRespuestas.HoraFin}`);

        }
        
        Respuestas.Horas = ArrayHorarios; //Se agregan las horas a 'Respuestas'

        const ConfirmarLosDatosIngresados = await prompts(
            {
                type: 'toggle',
                name: 'Confirmacion',
                message: '\nConfirme sus datos: ',
                initial: true,
                active: 'Todo correcto',
                inactive: 'Puse mal un dato' // confirmar en caso que algo hayamos ingresado mal y toque repetir
            }
        );

        Respuestas.Materia = Respuestas.Materia.toUpperCase(); //Cambiar a mayusculas
        Respuestas.Curso = Respuestas.Curso.toUpperCase();

        if(ConfirmarLosDatosIngresados.Confirmacion == true){
            DatosCompletosRecibidos.push(Respuestas); //Se agregan al arreglo priincipal todos los datos
        }


        const AgregarOtraMateria = await prompts({ //Preguntamos si desea agregar otra materia
            type: 'toggle',                    //si este booleano es un true: se vuelve a repetir el ciclo por el do
            name: 'AgregaMateria',          //si es false: sale del bucle do
            message: '\nDeseas agregar otra materia?: ',
            initial: true,
            active: 'Si',
            inactive: 'No'
        }); 
        DesicionAgregar = AgregarOtraMateria.AgregaMateria; //booleano de lo que decidimos
    }while(DesicionAgregar == true);



    return DatosCompletosRecibidos;
}

