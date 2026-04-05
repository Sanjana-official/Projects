const card = document.getElementById("card");

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      // convert scroll to 0 → 180 degrees
      let rotation = (scrollY / maxScroll) * 180;

      card.style.transform = `rotateY(${rotation}deg)`;
    });