Here are some examples demonstrating how to **fetch and insert values** using **radio buttons** in JavaScript:

---

### **1. Fetching Selected Radio Button Value**
This example shows how to retrieve the selected value from a group of radio buttons.

#### **HTML:**
```html
<input type="radio" id="option1" name="choice" value="Option 1"> Option 1<br>
<input type="radio" id="option2" name="choice" value="Option 2"> Option 2<br>
<input type="radio" id="option3" name="choice" value="Option 3"> Option 3<br>
<button onclick="fetchSelectedRadio()">Submit</button>
<p id="output"></p>
```

#### **JavaScript:**
```javascript
function fetchSelectedRadio() {
  // Get all radio buttons with the name 'choice'
  let radios = document.getElementsByName("choice");

  // Loop through the radio buttons to check which one is selected
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      // Print the selected value
      document.getElementById("output").textContent = "Selected Option: " + radios[i].value;
      break;
    }
  }
}
```

---

### **2. Inserting a Value into a Radio Button (Programmatically Selecting a Radio Button)**
This example shows how to set a specific radio button as selected.

#### **HTML:**
```html
<input type="radio" id="radio1" name="color" value="Red"> Red<br>
<input type="radio" id="radio2" name="color" value="Green"> Green<br>
<input type="radio" id="radio3" name="color" value="Blue"> Blue<br>
<button onclick="selectRadio()">Select Blue</button>
```

#### **JavaScript:**
```javascript
function selectRadio() {
  // Set the radio button with value 'Blue' as checked
  document.getElementById("radio3").checked = true;
}
```

---

### **3. Fetching Text of the Selected Radio Button**
This example shows how to retrieve the text (label) associated with the selected radio button.

#### **HTML:**
```html
<label><input type="radio" id="apple" name="fruit" value="Apple"> Apple</label><br>
<label><input type="radio" id="banana" name="fruit" value="Banana"> Banana</label><br>
<label><input type="radio" id="cherry" name="fruit" value="Cherry"> Cherry</label><br>
<button onclick="fetchSelectedFruit()">Submit</button>
<p id="fruitOutput"></p>
```

#### **JavaScript:**
```javascript
function fetchSelectedFruit() {
  // Get the selected radio button's value
  let selectedFruit = document.querySelector('input[name="fruit"]:checked');

  // Display the selected fruit's value (or show a message if none selected)
  if (selectedFruit) {
    document.getElementById("fruitOutput").textContent = "You selected: " + selectedFruit.value;
  } else {
    document.getElementById("fruitOutput").textContent = "No fruit selected!";
  }
}
```

---

### **4. Handling Radio Button Selection Change with Event Listener**
This example shows how to detect changes in the selected radio button using an event listener.

#### **HTML:**
```html
<label><input type="radio" name="size" value="Small"> Small</label><br>
<label><input type="radio" name="size" value="Medium"> Medium</label><br>
<label><input type="radio" name="size" value="Large"> Large</label><br>
<p id="sizeOutput"></p>
```

#### **JavaScript:**
```javascript
// Add an event listener to detect changes in the radio buttons
document.querySelectorAll('input[name="size"]').forEach((radio) => {
  radio.addEventListener('change', function() {
    // Display the selected value
    document.getElementById("sizeOutput").textContent = "Selected Size: " + this.value;
  });
});
```

---

### **5. Setting Radio Button Based on User Input**
This example allows the user to enter a value and automatically selects the corresponding radio button.

#### **HTML:**
```html
<input type="text" id="sizeInput" placeholder="Enter size (Small, Medium, Large)">
<button onclick="setRadioBasedOnInput()">Set Size</button><br>
<label><input type="radio" name="size" value="Small"> Small</label><br>
<label><input type="radio" name="size" value="Medium"> Medium</label><br>
<label><input type="radio" name="size" value="Large"> Large</label><br>
```

#### **JavaScript:**
```javascript
function setRadioBasedOnInput() {
  let sizeInput = document.getElementById("sizeInput").value.toLowerCase();

  // Reset all radio buttons
  let radios = document.getElementsByName("size");
  radios.forEach((radio) => radio.checked = false);

  // Select the radio button that matches the input
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].value.toLowerCase() === sizeInput) {
      radios[i].checked = true;
      break;
    }
  }
}
```

---

### **6. Handling Multiple Radio Button Groups**
This example shows how to manage multiple groups of radio buttons and fetch the selected value from each group.

#### **HTML:**
```html
<p>Choose a fruit:</p>
<label><input type="radio" name="fruit" value="Apple"> Apple</label><br>
<label><input type="radio" name="fruit" value="Banana"> Banana</label><br>

<p>Choose a color:</p>
<label><input type="radio" name="color" value="Red"> Red</label><br>
<label><input type="radio" name="color" value="Blue"> Blue</label><br>

<button onclick="fetchAllSelections()">Submit</button>
<p id="output"></p>
```

#### **JavaScript:**
```javascript
function fetchAllSelections() {
  let fruit = document.querySelector('input[name="fruit"]:checked');
  let color = document.querySelector('input[name="color"]:checked');

  let result = "Selected Fruit: " + (fruit ? fruit.value : "None") + ", " +
               "Selected Color: " + (color ? color.value : "None");

  document.getElementById("output").textContent = result;
}
```

---

### **7. Checking if a Radio Button is Selected**
This example demonstrates how to check if any radio button has been selected and show an alert if none is selected.

#### **HTML:**
```html
<label><input type="radio" name="plan" value="Basic"> Basic</label><br>
<label><input type="radio" name="plan" value="Premium"> Premium</label><br>
<label><input type="radio" name="plan" value="VIP"> VIP</label><br>
<button onclick="checkRadioSelection()">Submit</button>
```

#### **JavaScript:**
```javascript
function checkRadioSelection() {
  let selectedPlan = document.querySelector('input[name="plan"]:checked');

  if (selectedPlan) {
    alert("You selected the " + selectedPlan.value + " plan.");
  } else {
    alert("Please select a plan.");
  }
}
```

---

### **8. Grouping Radio Buttons Dynamically**
This example dynamically generates radio buttons based on an array and allows the user to select one.

#### **HTML:**
```html
<div id="radioContainer"></div>
<button onclick="generateRadios()">Generate Options</button>
<p id="radioOutput"></p>
```

#### **JavaScript:**
```javascript
function generateRadios() {
  let options = ["Option 1", "Option 2", "Option 3"];
  let container = document.getElementById("radioContainer");

  // Clear previous options
  container.innerHTML = "";

  // Create radio buttons dynamically
  options.forEach((option, index) => {
    let label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="dynamicOption" value="${option}"> ${option}`;
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
  });

  // Add a listener for radio selection
  document.querySelectorAll('input[name="dynamicOption"]').forEach((radio) => {
    radio.addEventListener('change', function() {
      document.getElementById("radioOutput").textContent = "You selected: " + this.value;
    });
  });
}
```

---

These examples demonstrate how to **fetch and insert values** with radio buttons in JavaScript. You can handle single and multiple selections, dynamically generate options, and work with various events. Let me know if you need more examples or details!