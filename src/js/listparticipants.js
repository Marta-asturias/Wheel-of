import { figureCarouselEl, printFiguresInHTML } from "./figures";
import { participants } from "./participants";


export function addUser() {
  let ul = document.getElementById("participants-list");

  let confirmUser = window.confirm("¿Agregar participante a la lista?");

  if (confirmUser === true) {
    let inputUser = document.getElementById("inputNewUser");
    if (inputUser.value!= "") {
      addNewUser(ul, inputUser.value);
<<<<<<< HEAD
       participants.push(`,{name: ${inputUser.value}}`);
=======
      let userValue = inputUser.value;
      participants.push({name: `${userValue}`});
      figureCarouselEl.innerHTML = "";
>>>>>>> d31fe9b41b06dc489c96de9724a77925a8e77930
      printFiguresInHTML (figureCarouselEl, participants);
      inputUser.value = "";
    }
  }
}
function printParticipantsDefault(array) {
  for (let i = 0; i < array.length; i++) {
    const participantListed = array[i];
    let li = document.createElement("li");
    li.append(document.innerHTML(participantListed[i].name));
    ul.appendChild(li);
    let span = document.createElement("span");
  }
}

printParticipantsDefault(participants)
// `{name: ${userValue}}`
export function addNewUser(ul, list) {
    let li = document.createElement("li");
    li.append(document.createTextNode(list));
    ul.appendChild(li);
    // let span = document.createElement("span");
    // span.onclick = remove;
    // span.className = "close";
    // span.appendChild(document.createTextNode("\u00D7"));
    // li.append(span);
  }
  
  // function removeUser() {
  //   this.parentElement.remove();
  // }