/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

html, body {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111; /* Dark background */
}

/* Styling for the intro container */
.intro-container {
  text-align: center;
}

/* Stylish "Continue" Button */
.continue-btn {
  background-color: red;
  color: white;
  padding: 20px 40px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.7);
}

.continue-btn:hover {
  background-color: darkred;
}
