# DOM manipulation

methods

- [getElementById](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)
- [getElementsByClassName](https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp)
- [getElementsByTagName](https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp)
- [querySelectorAll](https://www.w3schools.com/jsref/met_document_queryselectorall.asp)


Here are examples of **getting and printing text or content to DOM elements** using JavaScript:

---

### **1. Get and Print Text Content**
#### **Example: Get the text content of a paragraph and print it in the console**
HTML:
```html
<p id="exampleText">Hello, World!</p>
```

JavaScript:
```javascript
// Get the element by its ID
let textContent = document.getElementById("exampleText").textContent;

// Print the text content in the console
console.log(textContent);
```

---

### **2. Update Text Content**
#### **Example: Change the text inside a `<div>`**
HTML:
```html
<div id="message">This is the original message.</div>
```

JavaScript:
```javascript
// Get the element by ID
let messageDiv = document.getElementById("message");

// Update its text content
messageDiv.textContent = "This is the updated message!";
```

---

### **3. Get and Print Inner HTML**
#### **Example: Get the inner HTML of a `<div>` and print it in the console**
HTML:
```html
<div id="htmlContent">
  <strong>Important:</strong> Please read this carefully.
</div>
```

JavaScript:
```javascript
// Get the element by ID
let innerHTML = document.getElementById("htmlContent").innerHTML;

// Print the inner HTML in the console
console.log(innerHTML);
```

---

### **4. Update Inner HTML**
#### **Example: Add an HTML structure inside a `<div>`**
HTML:
```html
<div id="contentBox"></div>
```

JavaScript:
```javascript
// Get the element by ID
let contentBox = document.getElementById("contentBox");

// Set new HTML content
contentBox.innerHTML = "<h2>Welcome!</h2><p>This is a dynamically added paragraph.</p>";
```

---

### **5. Get and Print Value from Input Field**
#### **Example: Get the value from an input field and print it in the console**
HTML:
```html
<input type="text" id="nameInput" value="John Doe">
```

JavaScript:
```javascript
// Get the input field element
let inputValue = document.getElementById("nameInput").value;

// Print the value in the console
console.log(inputValue);
```

---

### **6. Update Value in Input Field**
#### **Example: Set a new value for an input field**
HTML:
```html
<input type="text" id="emailInput">
```

JavaScript:
```javascript
// Get the input field element
let emailInput = document.getElementById("emailInput");

// Set a new value
emailInput.value = "user@example.com";
```

---

### **7. Append Content to an Element**
#### **Example: Append a new `<li>` to a `<ul>` list**
HTML:
```html
<ul id="itemList">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

JavaScript:
```javascript
// Get the unordered list
let itemList = document.getElementById("itemList");

// Create a new list item
let newItem = document.createElement("li");

// Set the text content for the new item
newItem.textContent = "Item 3";

// Append the new item to the list
itemList.appendChild(newItem);
```

---

### **8. Get and Print Attribute Values**
#### **Example: Get and print the `href` attribute of an anchor tag**
HTML:
```html
<a id="link" href="https://example.com">Go to Example</a>
```

JavaScript:
```javascript
// Get the anchor element
let link = document.getElementById("link");

// Get the href attribute value
let hrefValue = link.getAttribute("href");

// Print the href value
console.log(hrefValue);
```

---

### **9. Set Attributes Dynamically**
#### **Example: Update the `src` attribute of an image**
HTML:
```html
<img id="image" src="old-image.jpg" alt="Old Image">
```

JavaScript:
```javascript
// Get the image element
let image = document.getElementById("image");

// Update the src attribute
image.setAttribute("src", "new-image.jpg");
```

---

### **10. Handle Multiple Elements with `querySelectorAll`**
#### **Example: Print the text content of all `<p>` elements**
HTML:
```html
<p class="text">First paragraph</p>
<p class="text">Second paragraph</p>
<p class="text">Third paragraph</p>
```

JavaScript:
```javascript
// Get all paragraph elements with the class 'text'
let paragraphs = document.querySelectorAll(".text");

// Loop through the NodeList and print the text content
paragraphs.forEach((p) => {
  console.log(p.textContent);
});
```

---

These examples demonstrate how to interact with DOM elements effectively using JavaScript. Let me know if you need further clarification or additional examples!