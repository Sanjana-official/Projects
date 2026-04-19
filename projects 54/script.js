const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const list = document.getElementById("list");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

// add bookmark
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const bookmark = {
    id: Date.now(),
    name: nameInput.value,
    url: urlInput.value
  };

  bookmarks.push(bookmark);
  updateStorage();
  render();

  nameInput.value = "";
  urlInput.value = "";
});

// render bookmarks
function render() {
  list.innerHTML = "";

  bookmarks.forEach(b => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div>
        <strong>${b.name}</strong><br>
        <a href="${b.url}" target="_blank">${b.url}</a>
      </div>
      <button class="delete-btn" onclick="deleteBookmark(${b.id})">X</button>
    `;

    list.appendChild(li);
  });
}

// delete bookmark
function deleteBookmark(id) {
  bookmarks = bookmarks.filter(b => b.id !== id);
  updateStorage();
  render();
}

// save
function updateStorage() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

// init
render();
