const timelineItems =
  document.querySelectorAll(".timeline-item");

function showTimelineItems(){

  const triggerBottom =
    window.innerHeight * 0.85;

  timelineItems.forEach(item => {

    const itemTop =
      item.getBoundingClientRect().top;

    if(itemTop < triggerBottom){
      item.classList.add("show");
    }

  });

}

window.addEventListener(
  "scroll",
  showTimelineItems
);

showTimelineItems();