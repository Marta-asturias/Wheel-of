// import participants from "./participants.js";


// var participantes = ['Marta','Nerea','Viviana',''],
//         random = (max, min, inclusive) => inclusive === true ? 
//         Math.floor(Math.random() * (max - min + 1) + min) :
//         Math.floor(Math.random() * (max - min) + min),
//         nameSelected = participantes[random(participantes.length, 0, "false")];
//         console.log(nameSelected);

// //Sugerencia: use el método insertRow() para crear una nueva fila o un nuevo participante(<tr>).
// //funcion que imprima los participantes agregados en el input en las cartas, 
import {participants} from './participants';
function app () {
      console.log(participants);
}

app()
