Here are examples for manipulating a `<form>` tag using JavaScript:

---

### **1. Accessing a Form Element**
```html
<!DOCTYPE html>
<html>
<body>
  <form id="myForm">
    <input type="text" name="username" placeholder="Enter your username">
    <input type="password" name="password" placeholder="Enter your password">
    <button type="submit">Submit</button>
  </form>

  <script>
    const form = document.getElementById("myForm");
    console.log(form); // Logs the form element
  </script>
</body>
</html>
```

---

### **2. Adding a New Input Field Dynamically**
```html
<!DOCTYPE html>
<html>
<body>
  <form id="dynamicForm">
    <input type="text" name="name" placeholder="Enter your name">
    <button type="button" onclick="addEmailField()">Add Email</button>
  </form>

  <script>
    function addEmailField() {
      const form = document.getElementById("dynamicForm");
      const emailField = document.createElement("input");
      emailField.type = "email";
      emailField.name = "email";
      emailField.placeholder = "Enter your email";
      form.appendChild(emailField);
    }
  </script>
</body>
</html>
```

---

### **3. Preventing Form Submission**
```html
<!DOCTYPE html>
<html>
<body>
  <form id="preventForm">
    <input type="text" name="username" placeholder="Enter your username">
    <button type="submit">Submit</button>
  </form>

  <script>
    const form = document.getElementById("preventForm");
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents the default submission
      alert("Form submission prevented!");
    });
  </script>
</body>
</html>
```

---

### **4. Validating Form Fields**
```html
<!DOCTYPE html>
<html>
<body>
  <form id="validateForm">
    <input type="email" id="email" placeholder="Enter your email">
    <button type="submit">Submit</button>
  </form>

  <script>
    const form = document.getElementById("validateForm");
    form.addEventListener("submit", function(event) {
      const email = document.getElementById("email").value;
      if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevents submission if invalid
      }
    });
  </script>
</body>
</html>
```

---

### **5. Resetting a Form**
```html
<!DOCTYPE html>
<html>
<body>
  <form id="resetForm">
    <input type="text" name="username" placeholder="Enter your username">
    <input type="password" name="password" placeholder="Enter your password">
    <button type="submit">Submit</button>
    <button type="button" onclick="resetForm()">Reset</button>
  </form>

  <script>
    function resetForm() {
      document.getElementById("resetForm").reset();
    }
  </script>
</body>
</html>
```

---

### **6. Getting All Form Values**
```html
<!DOCTYPE html>
<html>
<body>
  <form id="getValuesForm">
    <input type="text" name="username" value="JohnDoe">
    <input type="email" name="email" value="john@example.com">
    <button type="button" onclick="getFormValues()">Get Values</button>
  </form>

  <script>
    function getFormValues() {
      const form = document.getElementById("getValuesForm");
      const formData = new FormData(form);
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
    }
  </script>
</body>
</html>
```

---

### **7. Enabling/Disabling Form Fields**
```html
<!DOCTYPE html>
<html>
<body>
  <form id="toggleForm">
    <input type="text" id="username" name="username" placeholder="Enter your username">
    <button type="button" onclick="toggleFields()">Enable/Disable</button>
  </form>

  <script>
    function toggleFields() {
      const usernameField = document.getElementById("username");
      usernameField.disabled = !usernameField.disabled;
    }
  </script>
</body>
</html>
```

---

### **8. Changing Form Action Dynamically**
```html
<!DOCTYPE html>
<html>
<body>
  <form id="actionForm" action="/default-action">
    <input type="text" name="query" placeholder="Enter your query">
    <button type="submit">Submit</button>
    <button type="button" onclick="changeAction()">Change Action</button>
  </form>

  <script>
    function changeAction() {
      const form = document.getElementById("actionForm");
      form.action = "/new-action";
      alert(`Form action changed to: ${form.action}`);
    }
  </script>
</body>
</html>
```

---

### **9. Submit Form Programmatically**
```html
<!DOCTYPE html>
<html>
<body>
  <form id="programmaticForm" action="/submit-form">
    <input type="text" name="username" placeholder="Enter your username">
    <button type="button" onclick="submitForm()">Submit Programmatically</button>
  </form>

  <script>
    function submitForm() {
      const form = document.getElementById("programmaticForm");
      form.submit();
    }
  </script>
</body>
</html>
```

---

These examples cover a range of operations you can perform on `<form>` elements using JavaScript, from accessing and modifying elements to dynamically handling form behavior. Let me know if you need more examples!