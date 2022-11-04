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


const btnAddNote = document.querySelector("#add-note");

btnAddNote.addEventListener("click", () => {
  const newNote = document.querySelector(".new-note");
  const colorCardChosen = getComputedStyle(newNote).backgroundColor;
  const notesCreated = document.querySelector(".created-notes-section");
  const newNoteAdded = document.createElement("div");
  newNoteAdded.className = "added-note";
  newNoteAdded.style.backgroundColor = colorCardChosen;
  const newNoteAddedTitle = document.createElement("h2");
  newNoteAddedTitle.innerText = document.querySelector("#title-new-note").value;
  newNoteAddedTitle.className = "added-note-title";
  const newNoteAddedText = document.createElement("p");
  newNoteAddedText.innerText = document.querySelector("#text-note").value;
  const additionalSettingsBox = document.createElement("footer");
  additionalSettingsBox.className = "additional-settings";
  const newButtonToDelete = document.createElement("button");
  newButtonToDelete.innerText = "X";
  newButtonToDelete.className = "delete-btn";
  newButtonToDelete.addEventListener('click', () => {
      notesCreated.removeChild(newNoteAdded);
  });
  
  function viewAdditionalSettings(){
    newButtonToDelete.style.display = "block";
    console.log("Deus ajuda ");
  
  }
  newNoteAdded.addEventListener('click', viewAdditionalSettings);

  additionalSettingsBox.append(newButtonToDelete);
  newNoteAddedText.className = "added-note-text";
  newNoteAdded.append(newNoteAddedTitle, newNoteAddedText, additionalSettingsBox);
  notesCreated.append(newNoteAdded);
  backgroundNewNote.style.display = "none";
  clearInputs();
});

let currentBtn;

document.querySelector("#color-1").addEventListener("click", (eve) => {
  currentBtn = eve.currentTarget
  const btnParent = document.querySelector(".new-note");
  btnParent.style.backgroundColor = currentBtn.dataset.color;

});
document.querySelector("#color-2").addEventListener("click", (eve) => {
  currentBtn = eve.currentTarget
 const btnParent = document.querySelector(".new-note");
 btnParent.style.backgroundColor = currentBtn.dataset.color;

});
document.querySelector("#color-3").addEventListener("click", (eve) => {
  currentBtn = eve.currentTarget
 const btnParent = document.querySelector(".new-note");
 btnParent.style.backgroundColor = currentBtn.dataset.color;

});
document.querySelector("#color-4").addEventListener("click", (eve) => {
  currentBtn = eve.currentTarget
 const btnParent = document.querySelector(".new-note");
 btnParent.style.backgroundColor = currentBtn.dataset.color;

});

