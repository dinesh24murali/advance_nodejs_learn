Here are some examples that demonstrate how to **fetch** (retrieve) and **insert** (set) **text input values** using JavaScript:

---

### **1. Fetching Text from an Input Field and Printing It**
This example shows how to retrieve the value of a text input field and print it to the console.

#### **HTML:**
```html
<input type="text" id="username" placeholder="Enter your username">
<button onclick="fetchInput()">Submit</button>
<p id="output"></p>
```

#### **JavaScript:**
```javascript
function fetchInput() {
  // Get the value of the input field
  let inputValue = document.getElementById("username").value;

  // Print the value to the console
  console.log("Entered Username:", inputValue);

  // Display the value in a paragraph element
  document.getElementById("output").textContent = "Entered Username: " + inputValue;
}
```

---

### **2. Inserting Text into an Input Field**
This example shows how to set a new value in a text input field programmatically.

#### **HTML:**
```html
<input type="text" id="emailInput" placeholder="Enter your email">
<button onclick="setInput()">Set Email</button>
```

#### **JavaScript:**
```javascript
function setInput() {
  // Set a new value for the input field
  document.getElementById("emailInput").value = "user@example.com";
}
```

---

### **3. Fetching Text from Multiple Input Fields**
In this example, we retrieve and display the values from multiple input fields.

#### **HTML:**
```html
<input type="text" id="firstName" placeholder="Enter first name">
<input type="text" id="lastName" placeholder="Enter last name">
<button onclick="fetchFullName()">Submit</button>
<p id="fullNameOutput"></p>
```

#### **JavaScript:**
```javascript
function fetchFullName() {
  // Get the values of both input fields
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;

  // Display the full name in the paragraph
  document.getElementById("fullNameOutput").textContent = "Full Name: " + firstName + " " + lastName;
}
```

---

### **4. Inserting Text Based on User Input**
In this example, we use a text input to allow the user to enter some text, and then insert it into a div when a button is clicked.

#### **HTML:**
```html
<input type="text" id="userInput" placeholder="Type something here">
<button onclick="insertText()">Insert Text</button>
<div id="displayText"></div>
```

#### **JavaScript:**
```javascript
function insertText() {
  // Get the value from the input field
  let text = document.getElementById("userInput").value;

  // Insert the text into the div
  document.getElementById("displayText").textContent = text;
}
```

---

### **5. Setting Text Value in a Textarea**
This example shows how to set a default value for a `textarea` element.

#### **HTML:**
```html
<textarea id="commentBox" placeholder="Write your comment here"></textarea>
<button onclick="setComment()">Set Comment</button>
```

#### **JavaScript:**
```javascript
function setComment() {
  // Set the default text in the textarea
  document.getElementById("commentBox").value = "This is a default comment.";
}
```

---

### **6. Fetching Text from an Input and Inserting It in Another Element**
This example fetches the text from an input field and dynamically inserts it into a div when the button is clicked.

#### **HTML:**
```html
<input type="text" id="inputText" placeholder="Enter your name">
<button onclick="updateDiv()">Submit</button>
<div id="nameOutput"></div>
```

#### **JavaScript:**
```javascript
function updateDiv() {
  // Fetch the value from the input field
  let name = document.getElementById("inputText").value;

  // Insert the name into the div
  document.getElementById("nameOutput").textContent = "Hello, " + name + "!";
}
```

---

### **7. Using Event Listeners to Fetch Input**
This example uses an event listener to fetch the value of the input when the user presses the "Enter" key.

#### **HTML:**
```html
<input type="text" id="cityInput" placeholder="Enter your city">
<p id="cityOutput"></p>
```

#### **JavaScript:**
```javascript
// Add an event listener to detect when the Enter key is pressed
document.getElementById("cityInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    // Get the value from the input
    let city = document.getElementById("cityInput").value;

    // Display the city name
    document.getElementById("cityOutput").textContent = "You live in: " + city;
  }
});
```

---

### **8. Fetching Input Value and Validating It**
In this example, we fetch the input value, validate whether the user entered a value, and display a message accordingly.

#### **HTML:**
```html
<input type="text" id="username" placeholder="Enter your username">
<button onclick="validateUsername()">Submit</button>
<p id="validationMessage"></p>
```

#### **JavaScript:**
```javascript
function validateUsername() {
  // Fetch the input value
  let username = document.getElementById("username").value;

  // Check if the username is empty and display a message
  if (username === "") {
    document.getElementById("validationMessage").textContent = "Username cannot be empty.";
  } else {
    document.getElementById("validationMessage").textContent = "Hello, " + username + "!";
  }
}
```

---

These examples demonstrate common tasks of **fetching and inserting text input** in JavaScript, such as capturing user input, displaying it, and modifying input fields dynamically.