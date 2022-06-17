import { inputUser, namesListEl } from "./elements";
import { figureCarouselEl, fontSizeAdjustment, printFiguresInHTML, widthAdjustment } from "./figures";
import { participants } from "./participants";

export function printParticipantsList(){
  for (let i = 0; i < participants.length; i++) {
    const userId = participants[i].id
    const element = participants[i].name;
    addNewUser(namesListEl, element, userId)

  }
}

export function addUser() {
  if (inputUser.value != "") {
    let participantsTotal = participants.length
    addNewUser(namesListEl, inputUser.value);
    let userValue = inputUser.value;
    participants.push({ name: `${userValue}`, id: `${participantsTotal}`});
    figureCarouselEl.innerHTML = "";
    namesListEl.innerHTML = ""
    fontSizeAdjustment(figureCarouselEl, participants);
    widthAdjustment(figureCarouselEl, participants);
    printFiguresInHTML(figureCarouselEl, participants);
    printParticipantsList();
    inputUser.value = "";
  }
} 

// function printParticipantsDefault(array) {
//   for (let i = 0; i < array.length; i++) {
//     const participantListed = array[i];
//     let li = document.createElement("li");
//     li.append(document.innerHTML(participantListed[i].name));
//     ul.appendChild(li);
//     let span = document.createElement("span");
//   }
// }
// printParticipantsDefault(participants)
// `{name: ${userValue}}`
export function addNewUser(element, userName, userId) {
  let userNameContainerEl = document.createElement("div");
  userNameContainerEl.setAttribute("id", `${userId}`);
  let userNameEl = document.createElement("p");
  userNameEl.append(document.createTextNode(userName));
  userNameContainerEl.appendChild(userNameEl);
  let editNameFigureEl = document.createElement("figure");
  editNameFigureEl.className = "edit-user";
  userNameContainerEl.appendChild(editNameFigureEl);
   
  let deleteUserFigureEl = document.createElement("figure");
  deleteUserFigureEl.className = "delete-user";
  userNameContainerEl.appendChild(deleteUserFigureEl);
  
  element.appendChild(userNameContainerEl);
  // let span = document.createElement("span");
  // span.onclick = remove;
  // span.className = "close";
  // span.appendChild(document.createTextNode("\u00D7"));
  // li.append(span);
}
export function setIdToDiv (){

}
{/* <div>
   <p></p>
   <figure class="delete-user">
      <img></img>
   </figure>
   <figure class="edit-user">
      <img></img>
   </figure>
</div> */}

  // function removeUser() {
  //   this.parentElement.remove();
  // }
export function inputKeyPress(event){
  if (event.key == "Enter"){
    addUser()
  }
}
