# Cylindrical Tank Diameter Calculator

A simple web-based tool to calculate the diameter of a cylindrical tank based on user input for capacity (liters), height (meters), and optionally diameter (meters). The app also provides fabrication sheet dimensions and top/bottom plate sizes.

---

## Features

- Calculate tank diameter from capacity and height
- Optionally enter diameter to get fabrication details
- Responsive design for desktop and mobile
- Reset form and result views
- Easy to use interface

---

## How to Use

1. **Open `index.html` in your browser.**
2. Enter the tank capacity (in liters).
3. Enter the tank height (in meters).
4. Optionally, enter the diameter (in meters).
5. Click **"Calculate Diameter"**.
6. View the result with fabrication sheet and plate details.
7. Click **"Reset"** to calculate again.

---

## Project Structure

```
diamiter_Calculater/
├── index.html        # Main HTML file
├── index.css         # Stylesheet
├── index.js          # JavaScript logic
└── README.MD         # This documentation
```

---

## How It Works

- The calculator uses the formula for the volume of a cylinder:
  ```
  Volume = π × (Diameter/2)² × Height
  ```
- If diameter is not provided, it is calculated from capacity and height.
- The result includes:
  - Tank capacity in liters and cubic meters
  - Height and diameter in meters
  - Sheet length (circumference) and width (height)
  - Top & bottom plate diameter

---

## Mobile App Usage

To use this project as a mobile app:

- **Option 1:** Convert to a Progressive Web App (PWA) for offline use.
- **Option 2:** Use frameworks like [Ionic](https://ionicframework.com/), [Cordova](https://cordova.apache.org/), or [Capacitor](https://capacitorjs.com/) to package as a native app.
- **Option 3:** Rewrite the logic in Kotlin for Android (see instructions above).

---

## Development

- **HTML/CSS/JS:** Edit `index.html`, `index.css`, and `index.js` as needed.
- **Run locally:** Just open `index.html` in any modern browser.

---

## License

This project is open source and free to use.

---

## Author

Made by Maneesh.  
Feel free to contribute or suggest improvements!