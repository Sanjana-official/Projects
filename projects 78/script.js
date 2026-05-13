const birthDate = document.getElementById("birthDate");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {

  const birthValue = birthDate.value;

  // CHECK EMPTY
  if(!birthValue){
    result.innerHTML = "⚠️ Please select your birth date.";
    return;
  }

  const birth = new Date(birthValue);
  const today = new Date();

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  // ADJUST DAYS
  if(days < 0){

    months--;

    const prevMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();

    days += prevMonth;
  }

  // ADJUST MONTHS
  if(months < 0){
    years--;
    months += 12;
  }

  result.innerHTML = `
    🎉 You are <strong>${years}</strong> years,
    <strong>${months}</strong> months,
    and <strong>${days}</strong> days old.
  `;

});