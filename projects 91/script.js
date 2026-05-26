const progressBar =
  document.getElementById("progressBar");

// SCROLL EVENT
window.addEventListener("scroll", () => {

  // TOTAL SCROLLABLE HEIGHT
  const scrollTop =
    document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  // CALCULATE %
  const progress =
    (scrollTop / scrollHeight) * 100;

  // UPDATE BAR
  progressBar.style.width =
    `${progress}%`;

});