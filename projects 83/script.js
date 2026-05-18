const addNoteBtn = document.getElementById("addNoteBtn");

const notesContainer =
  document.getElementById("notesContainer");

// LOAD SAVED NOTES
document.addEventListener("DOMContentLoaded", loadNotes);

// ADD NOTE
addNoteBtn.addEventListener("click", () => {
  createNote();
});

// CREATE NOTE FUNCTION
function createNote(text = ""){

  const note = document.createElement("div");

  note.classList.add("note");

  note.innerHTML = `
  
    <div class="note-top">

      <span>Sticky Note</span>

      <button class="delete-btn">
        🗑
      </button>

    </div>

    <textarea placeholder="Write something...">${text}</textarea>

  `;

  // DELETE NOTE
  note.querySelector(".delete-btn")
  .addEventListener("click", () => {

    note.remove();

    saveNotes();

  });

  // SAVE ON INPUT
  note.querySelector("textarea")
  .addEventListener("input", saveNotes);

  notesContainer.appendChild(note);

  saveNotes();

}

// SAVE NOTES
function saveNotes(){

  const notes = [];

  document
    .querySelectorAll("textarea")
    .forEach(note => {

      notes.push(note.value);

    });

  localStorage.setItem(
    "stickyNotes",
    JSON.stringify(notes)
  );

}

// LOAD NOTES
function loadNotes(){

  const savedNotes =
    JSON.parse(
      localStorage.getItem("stickyNotes")
    ) || [];

  savedNotes.forEach(noteText => {
    createNote(noteText);
  });

}