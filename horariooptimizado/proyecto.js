"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// PROYECTO: Crear un horario con todas las posibles opciones que se cree a partir del
// ingreso de varias materias en diferentes horarios
//esta para compilarse con: npm run start
/*PSEUDOCODIGO
1. Iniciar creando la interfaz en donde se van a ubicar las horas, recomendable crear de cada hora.
2. Pedir los respectivos datos al usuario e ingresarlos a un array.
3. Luegogde que se hayan ingresado los respectivos datos al array deberia iniciar una comprobacion de cada tipo
4. DEberia empezar por prioridades, entonces inicia con ingresar la primera Materia,
se empieza organizando cada materia, es decir, se deberia guardar en una array cada materia, luego se arreglaria lo
de las horas, finalmente empieza el algoritmo de optimizacion // pendiente.
*/
function OrdenarPorMaterias() {
    // const Datos =  await EntradaDeDatos();
    var Datos = [{ Materia: 'PROBABILIDAD',
            Curso: 'GR3',
            Dias: ['Martes', 'Jueves'],
            Horas: ['14-16', '14-16'] },
        { Materia: 'PROBABILIDAD',
            Curso: 'GR4',
            Dias: ['Martes', 'Jueves'],
            Horas: ['7-9', '7-9'] },
        { Materia: 'PROBABILIDAD',
            Curso: 'GR6',
            Dias: ['Lunes', 'Miercoles'],
            Horas: ['7-9', '7-9'] },
        { Materia: 'CP-PROBABILIDAD',
            Curso: 'GR3',
            Dias: ['Viernes'],
            Horas: ['14-16'] },
        { Materia: 'CP-PROBABILIDAD',
            Curso: 'GR4',
            Dias: ['Lunes'],
            Horas: ['9-11'] },
        { Materia: 'CP-PROBABILIDAD',
            Curso: 'GR5',
            Dias: ['Lunes'],
            Horas: ['16-18'] },
        { Materia: 'CP-PROBABILIDAD',
            Curso: 'GR6',
            Dias: ['Viernes'],
            Horas: ['9-11'] },
        { Materia: 'CP-PROBABILIDAD',
            Curso: 'GR9',
            Dias: ['Jueves'],
            Horas: ['9-11'] },
        { Materia: 'PROGRAMACION ORIENTADA A OBJETOS',
            Curso: 'GR1COM',
            Dias: ['Lunes', 'Martes', 'Miercoles'],
            Horas: ['9-11', '11-13', '9-11'] },
        { Materia: 'PROGRAMACION ORIENTADA A OBJETOS',
            Curso: 'GR2COM',
            Dias: ['Lunes'],
            Horas: ['14-16'] },
        { Materia: 'PROGRAMACION ORIENTADA A OBJETOS',
            Curso: 'GR2COM',
            Dias: ['Martes'],
            Horas: ['14-16'] },
        { Materia: 'PROGRAMACION ORIENTADA A OBJETOS',
            Curso: 'GR2COM',
            Dias: ['Viernes'],
            Horas: ['14-16'] },
        { Materia: 'BASES DE DATOS',
            Curso: 'GR1COM',
            Dias: ['Martes', 'Viernes'],
            Horas: ['9-11', '9-11'] },
        { Materia: 'BASES DE DATOS',
            Curso: 'GR2COM',
            Dias: ['Lunes'],
            Horas: ['16-18'] },
        { Materia: 'BASES DE DATOS',
            Curso: 'GR2COM',
            Dias: ['Miercoles'],
            Horas: ['16-18'] },
        { Materia: 'CP-BASES DE DATOS',
            Curso: 'GR1COM',
            Dias: ['Lunes'],
            Horas: ['11-13'] },
        { Materia: 'CP-BASES DE DATOS',
            Curso: 'GR2COM',
            Dias: ['Martes'],
            Horas: ['16-18'] },
        { Materia: 'CP-SISTEMAS OPERATIVOS',
            Curso: 'GR1COM',
            Dias: ['Jueves'],
            Horas: ['7-9'] },
        { Materia: 'CP-SISTEMAS OPERATIVOS',
            Curso: 'GR1COM',
            Dias: ['Miercoles'],
            Horas: ['8-9'] },
        { Materia: 'CP-SISTEMAS OPERATIVOS',
            Curso: 'GR2COM',
            Dias: ['Jueves'],
            Horas: ['17-20'] },
        { Materia: 'SISTEMAS OPERATIVOS',
            Curso: 'GR1COM',
            Dias: ['Lunes'],
            Horas: ['7-9'] },
        { Materia: 'SISTEMAS OPERATIVOS',
            Curso: 'GR1COM',
            Dias: ['Miercoles'],
            Horas: ['7-8'] },
        { Materia: 'SISTEMAS OPERATIVOS',
            Curso: 'GR2COM',
            Dias: ['Lunes', 'Jueves'],
            Horas: ['18-20', '16-17'] }
    ];
    //console.log('\nLas materias que has elegido son: \n')
    var SoloLasMateriasCasi = Datos
        .map(function (ValorActualUno) {
        var nuevoObjetoUno = {
            Materia: ValorActualUno.Materia
        };
        return nuevoObjetoUno.Materia;
    });
    var SoloLasMaterias = [];
    for (var i = 0; i < SoloLasMateriasCasi.length; i++) {
        if (SoloLasMateriasCasi[i] != SoloLasMateriasCasi[i - 1]) {
            SoloLasMaterias.push(SoloLasMateriasCasi[i]);
        }
    }
    console.log('\nsolo las materias: ', SoloLasMaterias);
    console.log('\ndatos:', Datos);
}
OrdenarPorMaterias();
