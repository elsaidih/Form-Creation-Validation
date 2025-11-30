document.addEventListener("DOMContentLoaded", function () {
  
  // ALL your JavaScript goes here
  const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
     let isvalid = true;
    const messages = [];

    // Username validation
    if (username.length < 3) {
        messages.push("error");
        isvalid = false;
    }
    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        messages.push("error");
        isvalid = false;
    }
    // Password validation
    if (password.length < 8) {
        messages.push("error");
        isvalid = false;
    }

    feedbackDiv.style.display="block"
    if(isvalid){
        feedbackDiv.textContent="registration successful!"
        feedbackDiv.style.color="#28a745";
        }else{
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545";
        }
    
  });
});
