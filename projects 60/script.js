const gallery = document.getElementById("gallery");
const btn = document.getElementById("shuffleBtn");

btn.addEventListener("click", () => {
  const images = Array.from(gallery.children);

  // shuffle array (Fisher-Yates)
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  // re-append shuffled images
  images.forEach(img => gallery.appendChild(img));
});
