import * as prompts from 'prompts'

//ESTO NO ES PARTE DEL CODIGO, AQUI PRUEBO COSAS QUE NO ESTOY SEGURO
//Si quieren correr falso.ts para probar cualquier cosa es con: npm run falso


   /* const LunesPreguntas = [
        {
            type: 'text',
            name: 'sieteAocho',
            message: 'Lunes 07-08'
        },
        {
            type: 'text',
            name: 'ochoAnueve',
            message: 'Lunes 08-09'
        },
        {
            type: 'text',
            name: 'nueveAdiez',
            message: 'Lunes 09-10'
        },
        {
            type: 'text',
            name: 'diezAonce',
            message: 'Lunes 10-11'
        }
    ]

    const LunesRespuestas = await prompts(LunesPreguntas);
    console.log(LunesRespuestas);
    console.log(LunesRespuestas.ochoAnueve);
    console.log(LunesPreguntas[1]); //undefined


    const lista = await prompts({
        type: 'list',
        name: 'value',
        message:'Ingresa la lista por favor',
        initial: '',
        separator: ','
    })
    console.log(lista.value) 
  const arregloPrueba = [1,2,3,,5];
  //const miau = arregloPrueba.
  console.log(arregloPrueba)
  


  /*





async function main(){
    const LunesPreguntas = [
        {
            type: 'text',
            name: 'sieteAocho',
            message: 'Lunes 07-08'
        },
        {
            type: 'text',
            name: 'ochoAnueve',
            message: 'Lunes 08-09'
        },
        {
            type: 'text',
            name: 'nueveAdiez',
            message: 'Lunes 09-10'
        },
        {
            type: 'text',
            name: 'diezAonce',
            message: 'Lunes 10-11'
        },
        {
            type: 'text',
            name: 'onceAdoce',
            message: 'Lunes 11-12'
        },
        {
            type: 'text',
            name: 'doceAtrece',
            message: 'Lunes 12-13'
        },
        {
            type: 'text',
            name: 'catorceAquince',
            message: 'Lunes 14-15'
        },
        {
            type: 'text',
            name: 'quinceAdieciseis',
            message: 'Lunes 15-16'
        },
        {
            type: 'text',
            name: 'dieciseisAdiecisiete',
            message: 'Lunes 16-17'
        },
        {
            type: 'text',
            name: 'diecisieteAdieciocho',
            message: 'Lunes 17-18'
        },
        {
            type: 'text',
            name: 'dieciochoAdiecinueve',
            message: 'Lunes 18-19'
        },
        {
            type: 'text',
            name: 'diecinueveAveinte',
            message: 'Lunes 19-20'
        }
    ]

    const LunesRespuestas = await prompts(LunesPreguntas)
    console.log(LunesRespuestas)

    const LunesArreglo: any[] = LunesRespuestas.function()

   







}
main();*/


async function hola2(){

    let AgregarOtraMateria: any

    

        AgregarOtraMateria = await prompts(
            {
            type: 'toggle',
            name: 'AgregaMateria',
            message: 'Deseas agregar otra materia?: ',
            initial: true,
            active: 'Si',
            inactive: 'No'
            }
        );
            console.log(typeof(AgregarOtraMateria.AgregaMateria));
            console.log(AgregarOtraMateria)
            console.log(AgregarOtraMateria.AgregaMateria)
    





}
hola2();