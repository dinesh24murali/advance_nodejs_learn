Here are some examples demonstrating how to **fetch and insert values** using **file input** in JavaScript:

---

### **1. Fetching the Selected File Name**
This example shows how to retrieve the name of the file selected using a file input.

#### **HTML:**
```html
<input type="file" id="fileInput">
<button onclick="getFileName()">Submit</button>
<p id="fileNameOutput"></p>
```

#### **JavaScript:**
```javascript
function getFileName() {
  // Get the file input element
  let fileInput = document.getElementById("fileInput");

  // Get the selected file's name (if any file is selected)
  if (fileInput.files.length > 0) {
    document.getElementById("fileNameOutput").textContent = "Selected File: " + fileInput.files[0].name;
  } else {
    document.getElementById("fileNameOutput").textContent = "No file selected.";
  }
}
```

---

### **2. Fetching the File Size**
This example retrieves and displays the size of the selected file.

#### **HTML:**
```html
<input type="file" id="fileInput">
<button onclick="getFileSize()">Submit</button>
<p id="fileSizeOutput"></p>
```

#### **JavaScript:**
```javascript
function getFileSize() {
  // Get the file input element
  let fileInput = document.getElementById("fileInput");

  // Get the selected file's size (in bytes)
  if (fileInput.files.length > 0) {
    let fileSize = fileInput.files[0].size;
    document.getElementById("fileSizeOutput").textContent = "File Size: " + fileSize + " bytes";
  } else {
    document.getElementById("fileSizeOutput").textContent = "No file selected.";
  }
}
```

---

### **3. Fetching File Type**
This example shows how to retrieve the MIME type of the selected file.

#### **HTML:**
```html
<input type="file" id="fileInput">
<button onclick="getFileType()">Submit</button>
<p id="fileTypeOutput"></p>
```

#### **JavaScript:**
```javascript
function getFileType() {
  // Get the file input element
  let fileInput = document.getElementById("fileInput");

  // Get the MIME type of the selected file
  if (fileInput.files.length > 0) {
    let fileType = fileInput.files[0].type;
    document.getElementById("fileTypeOutput").textContent = "File Type: " + fileType;
  } else {
    document.getElementById("fileTypeOutput").textContent = "No file selected.";
  }
}
```

---

### **4. Displaying an Image Preview**
This example shows how to preview an image file selected by the user.

#### **HTML:**
```html
<input type="file" id="fileInput" accept="image/*">
<button onclick="previewImage()">Preview</button>
<img id="imagePreview" src="" alt="Image Preview" style="max-width: 300px;">
```

#### **JavaScript:**
```javascript
function previewImage() {
  let fileInput = document.getElementById("fileInput");
  let imagePreview = document.getElementById("imagePreview");

  if (fileInput.files.length > 0) {
    let file = fileInput.files[0];
    let reader = new FileReader();

    // Set up the reader to display the image
    reader.onload = function(e) {
      imagePreview.src = e.target.result;
    };

    // Read the selected file as a Data URL
    reader.readAsDataURL(file);
  }
}
```

---

### **5. Handling Multiple Files**
This example allows the user to select multiple files and display the names of all selected files.

#### **HTML:**
```html
<input type="file" id="fileInput" multiple>
<button onclick="getMultipleFiles()">Submit</button>
<ul id="fileNamesList"></ul>
```

#### **JavaScript:**
```javascript
function getMultipleFiles() {
  let fileInput = document.getElementById("fileInput");
  let fileNamesList = document.getElementById("fileNamesList");
  fileNamesList.innerHTML = ""; // Clear any previous list

  if (fileInput.files.length > 0) {
    // Loop through all selected files and display their names
    for (let i = 0; i < fileInput.files.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = fileInput.files[i].name;
      fileNamesList.appendChild(listItem);
    }
  } else {
    fileNamesList.textContent = "No files selected.";
  }
}
```

---

### **6. Restricting File Type Using `accept` Attribute**
This example shows how to restrict the file type the user can select, such as allowing only `.txt` files.

#### **HTML:**
```html
<input type="file" id="fileInput" accept=".txt">
<button onclick="getFileType()">Submit</button>
<p id="fileTypeOutput"></p>
```

#### **JavaScript:**
```javascript
function getFileType() {
  let fileInput = document.getElementById("fileInput");

  if (fileInput.files.length > 0) {
    let fileType = fileInput.files[0].type;
    if (fileType === "text/plain") {
      document.getElementById("fileTypeOutput").textContent = "Valid file type: " + fileType;
    } else {
      document.getElementById("fileTypeOutput").textContent = "Invalid file type. Please select a .txt file.";
    }
  } else {
    document.getElementById("fileTypeOutput").textContent = "No file selected.";
  }
}
```

---

### **7. Using FileReader to Read Text Files**
This example shows how to read and display the content of a selected text file.

#### **HTML:**
```html
<input type="file" id="fileInput" accept=".txt">
<button onclick="readTextFile()">Read File</button>
<p id="fileContent"></p>
```

#### **JavaScript:**
```javascript
function readTextFile() {
  let fileInput = document.getElementById("fileInput");
  let fileContent = document.getElementById("fileContent");

  if (fileInput.files.length > 0) {
    let file = fileInput.files[0];
    let reader = new FileReader();

    // Read the file as text
    reader.onload = function(e) {
      fileContent.textContent = e.target.result;
    };

    reader.readAsText(file);
  }
}
```

---

### **8. Downloading a File**
This example shows how to create a file from JavaScript and allow the user to download it.

#### **HTML:**
```html
<button onclick="downloadFile()">Download File</button>
```

#### **JavaScript:**
```javascript
function downloadFile() {
  // Create a text file with some content
  let textContent = "This is a sample text file created using JavaScript.";
  let blob = new Blob([textContent], { type: "text/plain" });

  // Create a link element and trigger a click to download the file
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "sample.txt"; // Name of the file to be downloaded
  link.click();
}
```

---

### **9. File Upload with Progress**
This example shows how to upload a file and show a progress bar using JavaScript (assuming you have a server endpoint to handle the upload).

#### **HTML:**
```html
<input type="file" id="fileInput">
<button onclick="uploadFile()">Upload</button>
<progress id="uploadProgress" value="0" max="100"></progress>
```

#### **JavaScript:**
```javascript
function uploadFile() {
  let fileInput = document.getElementById("fileInput");
  let progressBar = document.getElementById("uploadProgress");

  if (fileInput.files.length > 0) {
    let file = fileInput.files[0];
    let formData = new FormData();
    formData.append("file", file);

    // Assuming we have a server endpoint "/upload" to handle the file
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/upload", true);

    // Update the progress bar while uploading
    xhr.upload.onprogress = function(e) {
      if (e.lengthComputable) {
        let progress = (e.loaded / e.total) * 100;
        progressBar.value = progress;
      }
    };

    // Send the form data to the server
    xhr.send(formData);
  }
}
```

---

These examples demonstrate how to handle **file inputs** in JavaScript, including **reading file content**, **uploading files**, and **previewing images**. Let me know if you need more examples or explanations!