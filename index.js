function calculateDiameter() {
  const capacityLiters = document.getElementById("capacity").value;
  const height = document.getElementById("height").value;
  const resultDiv = document.getElementById("result");

  if (!capacityLiters || !height || capacityLiters <= 0 || height <= 0) {
    resultDiv.innerHTML = "⚠️ Please enter valid numbers!";
    return;
  }

  // Convert liters to cubic meters
  const volume = capacityLiters / 1000;

  // Formula: r = sqrt(V / (π * h))
  const radius = Math.sqrt(volume / (Math.PI * height));
  const diameter = (2 * radius).toFixed(3);

  resultDiv.innerHTML = `For ${capacityLiters} liters and height ${height} m:<br>
  ➡ Diameter = ${diameter} meters`;
}
