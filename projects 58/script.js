const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept");
const rejectBtn = document.getElementById("reject");

// check if already decided
if (!localStorage.getItem("cookieConsent")) {
  setTimeout(() => {
    banner.classList.add("show");
  }, 500);
}

// accept
acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "accepted");
  banner.classList.remove("show");
});

// reject
rejectBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "rejected");
  banner.classList.remove("show");
});
