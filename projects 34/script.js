const picker = document.getElementById("picker");
const box = document.getElementById("box");
const hex = document.getElementById("hex");

picker.addEventListener("input", () => {
    const color = picker.value;

    box.style.background = color;
    hex.textContent = color;
});


function copyColor(){
    navigator.clipboard.writeText(hex.textContent);
    alert("Copied: " + hex.textContent);
}
