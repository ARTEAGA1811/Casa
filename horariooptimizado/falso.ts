import * as prompts from 'prompts'

//ESTO NO ES PARTE DEL CODIGO, AQUI PRUEBO COSAS QUE NO ESTOY SEGURO
//Si quieren correr falso.ts para probar cualquier cosa es con: npm run falso


 

async function hola2(){

   const probandoUno = [
        /*{
            type: 'number',
            name: 'horas',
            message: 'Selecciona las horas que tienes la materia:',
            initial: 7,
            style: 'default',
            min: 7,
            max: 10,
            onRender: 

            
        } */
        /*
        {
            type: 'confirm',
            name: 'confirmed',
            message: 'Can you confirm?: '
        },
        {
            type: prev => prev == false && 'toggle',
            name: 'confimaDeNuevo',
            message: 'CAn you confirm again?: ',
            active: 'yes',
            inactive: 'no'
        } */
        /*
        {
            type: 'text',
            name: 'dish',
            message: 'Do you like pizza?'
          },
          {
            type: prev => prev == 'pizza' ? 'text' : null,
            name: 'topping',
            message: 'Name a topping' 
        } */

        {
            type: 'multiselect',
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
            type: prev => prev.length == 2 && 'text',
            name: 'aquiprobandoesto',
            message: 'hola amigo'
        }
    ];

    const ProbandoRespuesta = await prompts(probandoUno);
    console.log(ProbandoRespuesta); 

    


}

hola2();
