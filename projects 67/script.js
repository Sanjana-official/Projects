const list = document.getElementById("list");
const pagination = document.getElementById("pagination");

// sample data
const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

const itemsPerPage = 5;
let currentPage = 1;

// render list
function renderList() {
  list.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const paginatedItems = data.slice(start, start + itemsPerPage);

  paginatedItems.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

// render buttons
function renderPagination() {
  pagination.innerHTML = "";

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // prev button
  const prev = document.createElement("button");
  prev.innerText = "Prev";
  prev.disabled = currentPage === 1;
  prev.onclick = () => {
    currentPage--;
    update();
  };
  pagination.appendChild(prev);

  // page numbers
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;

    if (i === currentPage) {
      btn.classList.add("active");
    }

    btn.onclick = () => {
      currentPage = i;
      update();
    };

    pagination.appendChild(btn);
  }

  // next button
  const next = document.createElement("button");
  next.innerText = "Next";
  next.disabled = currentPage === totalPages;
  next.onclick = () => {
    currentPage++;
    update();
  };
  pagination.appendChild(next);
}

// update UI
function update() {
  renderList();
  renderPagination();
}

// init
update();
