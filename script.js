script.js
// script.js

// Show alert when Get Started is clicked
function showAlert() {
  alert("Welcome! Let's get started.");
}

// Greet user by name
function greetUser() {
  const name = document.getElementById("nameInput").value;
  const greeting = document.getElementById("greeting");

  if (name.trim() === "") {
    greeting.textContent = "Please enter your name!";
    return;
  }

  greeting.textContent = `Hello, ${name}! Nice to meet you.`;
}

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
