const uploadBox = document.getElementById("uploadBox");
const fileInput = document.getElementById("fileInput");
const browseBtn = document.getElementById("browseBtn");
const fileList = document.getElementById("fileList");

// open file picker
browseBtn.addEventListener("click", () => {
  fileInput.click();
});

// handle selected files
fileInput.addEventListener("change", (e) => {
  displayFiles(e.target.files);
});

// drag events
uploadBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadBox.classList.add("dragover");
});

uploadBox.addEventListener("dragleave", () => {
  uploadBox.classList.remove("dragover");
});

uploadBox.addEventListener("drop", (e) => {
  e.preventDefault();

  uploadBox.classList.remove("dragover");

  const files = e.dataTransfer.files;

  displayFiles(files);
});

// display uploaded files
function displayFiles(files){

  [...files].forEach(file => {

    const item = document.createElement("div");
    item.classList.add("file-item");

    const sizeKB = (file.size / 1024).toFixed(1);

    item.innerHTML = `
      <div class="file-info">
        <div class="file-icon">📄</div>

        <div>
          <p>${file.name}</p>
          <span class="file-size">${sizeKB} KB</span>
        </div>
      </div>

      <div>✅</div>
    `;

    fileList.appendChild(item);

  });

}