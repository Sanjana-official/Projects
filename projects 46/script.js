const btn = document.getElementById("subscribe");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

btn.addEventListener("click", () => {

    const email = emailInput.value.trim();

    if(email === "" || !email.includes("@")){
        message.style.color = "#ef4444";
        message.textContent = "Please enter a valid email.";
        return;
    }

    message.style.color = "#22c55e";
    message.textContent = "Subscribed successfully 🎉";

    emailInput.value = "";
});
