

/*

first create funtion to calculate diameter 
then crate 4 input fields 
1. capacity in liters
2. height in meters
3. diameter in meters
4. result field to show the result

the  form container and result container should be in divs and the result container should be hidden by default
*/



function calculateDiameter() {
   const capacityLiters = parseFloat(document.getElementById("capacity").value);
  const inputHeight = parseFloat(document.getElementById("height").value);
  const inputDiameter = parseFloat(document.getElementById("diameter").value);
  const resultDiv = document.getElementById("result");
    document.getElementById("formContainer").classList.add("hidden");
  document.getElementById("resultContainer").classList.remove("hidden");



/* 
create if else conditions to check if the input values are valid 
if capacity is not a number or less than or equal to 0 show warning message
if height and diameter are not provided show waring message 
if both height and diameter are provided check if they match the capacity if not show warning message
 
yousing return to exit the function after showing the warning message

*/
  if (!capacityLiters || capacityLiters <= 0) {
    resultDiv.innerHTML = "⚠️ Please enter valid numbers!";
    return;
  }


  /*

  crate variable volume in cubic meters 

  1 cubic meter = 1000 liters
  so to convert liters to cubic meters divide by 1000
  equation is volume = capacityLiters / 1000
  exampie : if capacity is 500 liters then volume is 0.5 cubic meters

  */
  const volume = capacityLiters / 1000;


   /*

   than crate if else conditions to calculate height or diameter based on the input values
   why using  else if statements to check if height or diameter is provided
   if only height is provided calculate diameter using the formula 
   diameter = 2 * √(V/πh)
   if only diameter is provided calculate height using the formula 
   height = V/(π*(d/2)²)
   if both height and diameter are provided check if they match the capacity using the formula 
   V = π*(d/2)²*h
   if they don't match show warning message
   if neither height nor diameter is provided show warning message

   
   explane for biginners how to use this formula
   V = volume in cubic meters
   π = pi (3.14159)
   r = radius in meters (half of diameter)
   d = diameter in meters
   h = height in meters

   1. To calculate diameter from height:
      - Rearrange the volume formula to solve for radius: r = √(V/πh)
      - Then, diameter d = 2 * r




   2. To calculate height from diameter:
      - Rearrange the volume formula to solve for height: h = V/(π*(d/2)²)

   3. To check if given height and diameter match the volume:
      - Calculate the volume using the provided height and diameter: V = π*(d/2)²*h
      - Compare this calculated volume to the given volume. If they differ significantly, they don't match.

   */

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


/*
crating if else condition to check if height or diameter is less than or equal to 0
all ready using this top why use this in here?
if height or diameter is less than or equal to 0 show warning message

 */

  if (height <= 0 || diameter <= 0) {
    resultDiv.innerHTML = "⚠️ Please enter valid numbers!";
    return;
  }


/**
  create 3 variables to store the results
  1. sheetLength
  2. sheetWidth
  3. circleDiameter

  sheetLength = circumference of the tank = π * diameter
  sheetWidth = height of the tank
  circleDiameter = diameter of the tank
  
  use toFixed(3) to round the results to 3 decimal places
  1. circumference = Math.PI * diameter
  2. sheetLength = circumference.toFixed(3)
  3. sheetWidth = height.toFixed(3)
  4. circleDiameter = diameter.toFixed(3)
  5. show the results in the resultDiv using innerHTML
  6. use backticks to create a template string
  7. use <br> to create line breaks
  8. show the capacity in liters and cubic meters
  9. show the height and diameter in meters
  10. show the sheetLength, sheetWidth and circleDiameter with labels


 */
  const circumference = Math.PI * diameter;
  const sheetLength = circumference.toFixed(3);
  const sheetWidth = height.toFixed(3);
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



/**
create function to reset the form
1. show the form container
2. hide the result container
3. clear the input fields
4. clear the result div

why using getElementById instead of querySelector? 

because getElementById is faster and more efficient when selecting elements by their ID
why faser because IDs are unique and the browser can quickly locate the element without having to search through the entire DOM
what is DOM?
DOM stands for Document Object Model. It is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM provides a structured representation of the document as a tree of objects, allowing developers to manipulate elements, attributes, and text within the HTML or XML document dynamically.




 */


function resetForm() {
  document.getElementById("formContainer").classList.remove("hidden");
  document.getElementById("resultContainer").classList.add("hidden");
  document.getElementById("capacity").value = "";
  document.getElementById("height").value = "";
  document.getElementById("diameter").value = "";
  document.getElementById("result").innerHTML = "";
  
}

