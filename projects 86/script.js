const highlightBtn =
  document.getElementById("highlightBtn");

const removeBtn =
  document.getElementById("removeBtn");

const fontSize =
  document.getElementById("fontSize");

const editableText =
  document.getElementById("editableText");

// HIGHLIGHT TEXT
highlightBtn.addEventListener("click", () => {

  document.execCommand(
    "backColor",
    false,
    "pink"
  );

});

// REMOVE HIGHLIGHT
removeBtn.addEventListener("click", () => {

  document.execCommand(
    "removeFormat",
    false,
    null
  );

});

// CHANGE FONT SIZE
fontSize.addEventListener("input", () => {

  editableText.style.fontSize =
    `${fontSize.value}px`;

});