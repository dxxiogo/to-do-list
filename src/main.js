import './css/base.css'


//Cancela a criação de uma nova nota
const backgroundNewNote = document.querySelector(".background-new-note");

function clearInputs(){
  document.querySelector("#text-note").value = "";
  document.querySelector("#title-new-note").value = "";
}


document.querySelector(".cancel-note").addEventListener("click", () => {
  backgroundNewNote.style.display = "none";
  clearInputs();
});


document.querySelector(".form-note").addEventListener("click",
( ) => {
  backgroundNewNote.style.display = "flex";
});


const colorNote = document.querySelector(".color-note");
console.log(colorNote)

colorNote.addEventListener("click", (eve) => {
  console.log(eve);
});

const btnAddNote = document.querySelector("#add-note");

btnAddNote.addEventListener("click", () => {
  const notesCreated = document.querySelector(".created-notes-section");
  const newNoteAdded = document.createElement("div");
  newNoteAdded.className = "added-note";
  const newNoteAddedTitle = document.createElement("h2");
  newNoteAddedTitle.innerText = document.querySelector("#title-new-note").value;
  newNoteAddedTitle.className = "added-note-title";
  const newNoteAddedText = document.createElement("p");
  newNoteAddedText.innerText = document.querySelector("#text-note").value;
  newNoteAddedText.className = "added-note-text";
  newNoteAdded.append(newNoteAddedTitle, newNoteAddedText);
  notesCreated.append(newNoteAdded);
  backgroundNewNote.style.display = "none";
  clearInputs();
});