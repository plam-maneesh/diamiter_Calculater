function calculateDiameter() {
   const capacityLiters = parseFloat(document.getElementById("capacity").value);
  const inputHeight = parseFloat(document.getElementById("height").value);
  const inputDiameter = parseFloat(document.getElementById("diameter").value);
  const resultDiv = document.getElementById("result");
    document.getElementById("formContainer").classList.add("hidden");
  document.getElementById("resultContainer").classList.remove("hidden");






  if (!capacityLiters || capacityLiters <= 0) {
    resultDiv.innerHTML = "⚠️ Please enter valid numbers!";
    return;
  }

  // Convert liters to cubic meters
  const volume = capacityLiters / 1000;

    if (inputHeight && !inputDiameter) {
    // calculate diameter from height
    const radius = Math.sqrt(volume / (Math.PI * inputHeight));
    diameter = 2 * radius;
    height = inputHeight;
  } else if (inputDiameter && !inputHeight) {
    // calculate height from diameter
    const radius = inputDiameter / 2;
    height = volume / (Math.PI * radius * radius);
    diameter = inputDiameter;
  } else if (inputDiameter && inputHeight) {
    // check if values match capacity
    const radius = inputDiameter / 2;
    const calcVolume = Math.PI * radius * radius * inputHeight;
    const diff = Math.abs(calcVolume - volume);
    if (diff > 0.05) {
      resultDiv.innerHTML = "⚠️ Height & Diameter don’t match given capacity.";
      return;
    }
    height = inputHeight;
    diameter = inputDiameter;
  } else {
    resultDiv.innerHTML = "⚠️ Enter at least height OR diameter.";
    return;
  }
  if (height <= 0 || diameter <= 0) {
    resultDiv.innerHTML = "⚠️ Please enter valid numbers!";
    return;
  }

  // Fabrication sheet (rectangle)
  // Sheet length = circumference of cylinder
  // Sheet width = height of cylinder
  // All dimensions rounded to 3 decimal places
  // Volume = πr²h  => r = √(V/πh) => d = 2√(V/πh)
  // Volume = πd²h/4 => h = 4V/πd²


  // Calculate sheet size for cylinder (rectangle before rolling)
  const circumference = Math.PI * diameter;
  const sheetLength = circumference.toFixed(3);
  const sheetWidth = height.toFixed(3);


  // Top & bottom plates (circles)
  const circleDiameter = diameter.toFixed(3);

  resultDiv.innerHTML = `
  ✅ Tank Details:<br>
  • Capacity: ${capacityLiters} L (${volume.toFixed(3)} m³)<br>
  • Height: ${height.toFixed(3)} m<br>
  • Diameter: ${diameter.toFixed(3)} m<br><br>

  🔹 Fabrication Sheet:<br>
  • Sheet Length = ${sheetLength} m<br>
  • Sheet Width = ${sheetWidth} m<br><br>

  🔹 Top & Bottom Plates:<br>
  • Cut 2 circles of Diameter = ${circleDiameter} m
  `;
}

function resetForm() {
  document.getElementById("formContainer").classList.remove("hidden");
  document.getElementById("resultContainer").classList.add("hidden");
  document.getElementById("capacity").value = "";
  document.getElementById("height").value = "";
  document.getElementById("diameter").value = "";
  document.getElementById("result").innerHTML = "";
 
}