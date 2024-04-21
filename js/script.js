const addBtn = document.querySelector(".add");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const deleteBtns = document.getElementsByClassName(".delete-note");
const deleteAllBtn = document.querySelector(".delete-all");

const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const textarea = document.querySelector("#text");
const error = document.querySelector(".error");

let selectedValue;
let cardID = 0;

const openPanel = () => {
  notePanel.style.display = "flex";
};

const closePanel = () => {
  notePanel.style.display = "none";
  error.style.visibility = "hidden";
  textarea.value = "";
  category.selectedIndex = 0;
};

const addNote = () => {
  if (
    textarea.value !== "" &&
    category.options[category.selectedIndex].value !== "0"
  ) {
    createNote();
    error.style.visibility = "hidden";
  } else {
    error.style.visibility = "visible";
  }
};

const createNote = () => {
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.setAttribute("id", cardID);
  newNote.innerHTML = `
  <div class="note-header">
          <h3 class="note-title">${selectedValue}</h3>
          <button class="delete-note" onclick="deleteNote(${cardID})">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512">
              <path fill="#2b3b47"
                d="m325.297 256l134.148-134.148c19.136-19.136 19.136-50.161 0-69.297c-19.137-19.136-50.16-19.136-69.297 0L256 186.703L121.852 52.555c-19.136-19.136-50.161-19.136-69.297 0s-19.136 50.161 0 69.297L186.703 256L52.555 390.148c-19.136 19.136-19.136 50.161 0 69.297c9.568 9.567 22.108 14.352 34.648 14.352s25.081-4.784 34.648-14.352L256 325.297l134.148 134.148c9.568 9.567 22.108 14.352 34.648 14.352s25.08-4.784 34.648-14.352c19.136-19.136 19.136-50.161 0-69.297z"/>
            </svg>
          </button>
        </div>

        <div class="note-body">
          ${textarea.value}
        </div>
  `;

  noteArea.appendChild(newNote);
  cardID++;
  textarea.value = "";
  category.selectedIndex = 0;
  notePanel.style.display = "none";
  checkColor(newNote);
};

const selectValue = () => {
  selectedValue = category.options[category.selectedIndex].text;
  console.log(selectedValue);
};
const checkColor = (note) => {
  switch (selectedValue) {
    case "Zakupy":
      note.style.backgroundColor = "rgb(72,255,0)";
      break;
    case "Praca":
      note.style.backgroundColor = "rgb(255,243,0)";
      break;
    case "Inne":
      note.style.backgroundColor = "rgb(0,170,255)";
      break;
  }
};
const deleteNote = (id) => {
  const noteToDelete = document.getElementById(id);
  noteArea.removeChild(noteToDelete);
};
const deleteAllNotes = () => {
  noteArea.textContent = "";
};

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);
deleteAllBtn.addEventListener("click", deleteAllNotes);
