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
function EntradaDeDatos() {
    return __awaiter(this, void 0, void 0, function () {
        var DatosCompletosRecibidos, DesicionAgregar, Questions, Respuestas, Numero_dias, ArrayHorarios, i, DosPreguntas, DosRespuestas, ConfirmarLosDatosIngresados, AgregarOtraMateria;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    DatosCompletosRecibidos = [];
                    DesicionAgregar = false;
                    _a.label = 1;
                case 1:
                    Questions = [
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
                                { title: 'Lunes', value: 'Lunes' },
                                { title: 'Martes', value: 'Martes' },
                                { title: 'Miercoles', value: 'Miercoles' },
                                { title: 'Jueves', value: 'Jueves' },
                                { title: 'Viernes', value: 'Viernes' }
                            ],
                            min: 1,
                            max: 3,
                            hint: '-Space para seleccionar. Enter para enviar'
                        }
                    ];
                    return [4 /*yield*/, prompts(Questions)];
                case 2:
                    Respuestas = _a.sent();
                    Numero_dias = Respuestas.Dias.length;
                    ArrayHorarios = [];
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < Numero_dias)) return [3 /*break*/, 6];
                    console.log('\nIngresa el horario del dia ', Respuestas.Dias[i]);
                    DosPreguntas = [
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
                    return [4 /*yield*/, prompts(DosPreguntas)];
                case 4:
                    DosRespuestas = _a.sent();
                    ArrayHorarios.push(DosRespuestas.HoraInicio + "-" + DosRespuestas.HoraFin);
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 3];
                case 6:
                    Respuestas.Horas = ArrayHorarios; //Se agregan las horas a 'Respuestas'
                    return [4 /*yield*/, prompts({
                            type: 'toggle',
                            name: 'Confirmacion',
                            message: '\nConfirme sus datos: ',
                            initial: true,
                            active: 'Todo correcto',
                            inactive: 'Puse mal un dato' // confirmar en caso que algo hayamos ingresado mal y toque repetir
                        })];
                case 7:
                    ConfirmarLosDatosIngresados = _a.sent();
                    Respuestas.Materia = Respuestas.Materia.toUpperCase(); //Cambiar a mayusculas
                    Respuestas.Curso = Respuestas.Curso.toUpperCase();
                    if (ConfirmarLosDatosIngresados.Confirmacion == true) {
                        DatosCompletosRecibidos.push(Respuestas); //Se agregan al arreglo priincipal todos los datos
                    }
                    return [4 /*yield*/, prompts({
                            type: 'toggle',
                            name: 'AgregaMateria',
                            message: '\nDeseas agregar otra materia?: ',
                            initial: true,
                            active: 'Si',
                            inactive: 'No'
                        })];
                case 8:
                    AgregarOtraMateria = _a.sent();
                    DesicionAgregar = AgregarOtraMateria.AgregaMateria; //booleano de lo que decidimos
                    _a.label = 9;
                case 9:
                    if (DesicionAgregar == true) return [3 /*break*/, 1];
                    _a.label = 10;
                case 10: return [2 /*return*/, DatosCompletosRecibidos];
            }
        });
    });
}
exports.EntradaDeDatos = EntradaDeDatos;
