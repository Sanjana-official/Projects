// subtle hover scale effect
const items = document.querySelectorAll(".footer-col li");

items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateX(5px)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateX(0)";
  });
});
