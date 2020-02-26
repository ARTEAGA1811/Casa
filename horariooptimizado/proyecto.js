"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompts = require("prompts");
// PROYECTO: Crear un horario con todas las posibles opciones que se cree a partir del
// ingreso de varias materias en diferentes horarios
//esta para compilarse con: npm run start
/*PSEUDOCODIGO
1. Iniciar creando la interfaz en donde se van a ubicar las horas, recomendable crear de cada hora.
2. Pedir los respectivos datos al usuario e ingresarlos a un array.
3. Luegogde que se hayan ingresado los respectivos datos al array deberia iniciar una comprobacion de cada tipo
4. DEberia empezar por prioridades, entonces inicia con ingresar la primera Materia
*/
function Principal() {
    return __awaiter(this, void 0, void 0, function () {
        var DatosCompletosRecibidos, AgregarOtraMateria, Preguntas, Respuestas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    DatosCompletosRecibidos = [] // Aqui voy a guardar los datos
                    ;
                    _a.label = 1;
                case 1:
                    Preguntas = [
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
                                { title: 'Lunes', value: 'Lunes' },
                                { title: 'Martes', value: 'Martes' },
                                { title: 'Miercoles', value: 'Miercoles' },
                                { title: 'Jueves', value: 'Jueves' },
                                { title: 'Viernes', value: 'Viernes' }
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
                            min: 7,
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
                    return [4 /*yield*/, prompts(Preguntas)];
                case 2:
                    Respuestas = _a.sent();
                    Respuestas.Materia = Respuestas.Materia.toUpperCase(); //Cambio las materias a mayusculas.
                    Respuestas.Paralelo = Respuestas.Paralelo.toUpperCase(); //Cambio el curso a mayusculas.
                    if (Respuestas.Confirmacion == true) { //Si lo que ingresamos es correcto, se guarda la info ingresada en el array
                        DatosCompletosRecibidos.push(Respuestas);
                        //DatosClave.push(Respuestas.Materia, Respuestas.Dia, Respuestas.HoraDeInicio, Respuestas.HoraDeFinalizacion);
                    }
                    return [4 /*yield*/, prompts({
                            type: 'toggle',
                            name: 'AgregaMateria',
                            message: 'Deseas agregar otra materia?: ',
                            initial: true,
                            active: 'Si',
                            inactive: 'No'
                        })];
                case 3:
                    AgregarOtraMateria = _a.sent();
                    _a.label = 4;
                case 4:
                    if (AgregarOtraMateria.AgregaMateria == true) return [3 /*break*/, 1];
                    _a.label = 5;
                case 5:
                    console.log('\nLas materias que has elegido son: \n', DatosCompletosRecibidos);
                    return [2 /*return*/];
            }
        });
    });
}
Principal();