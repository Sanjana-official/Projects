const tempInput = document.getElementById("temperature");

const unitFrom = document.getElementById("unitFrom");
const unitTo = document.getElementById("unitTo");

const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

// CONVERT BUTTON
convertBtn.addEventListener("click", () => {

  const temp = parseFloat(tempInput.value);

  // VALIDATION
  if(isNaN(temp)){
    result.innerHTML = "⚠️ Please enter a valid number.";
    return;
  }

  const from = unitFrom.value;
  const to = unitTo.value;

  // SAME UNIT
  if(from === to){
    result.innerHTML = `✅ ${temp}° stays the same.`;
    return;
  }

  let converted;

  // CELSIUS
  if(from === "celsius"){

    if(to === "fahrenheit"){
      converted = (temp * 9/5) + 32;
    }

    else if(to === "kelvin"){
      converted = temp + 273.15;
    }

  }

  // FAHRENHEIT
  else if(from === "fahrenheit"){

    if(to === "celsius"){
      converted = (temp - 32) * 5/9;
    }

    else if(to === "kelvin"){
      converted = ((temp - 32) * 5/9) + 273.15;
    }

  }

  // KELVIN
  else if(from === "kelvin"){

    if(to === "celsius"){
      converted = temp - 273.15;
    }

    else if(to === "fahrenheit"){
      converted = ((temp - 273.15) * 9/5) + 32;
    }

  }

  result.innerHTML = `
    🌡 Converted Temperature:
    <strong>${converted.toFixed(2)}</strong>°
  `;

});