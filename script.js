// Typing Text Effect
const text = "Unlock the Cyber World";
const speed = 100;
let i = 0;

function typeWriter() {
  const target = document.getElementById("type-text");
  if (!target) return;
  if (i < text.length) {
    target.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Form Submission Handler
function handleFormSubmit() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "Thanks! Your message has been received.";
    form.reset();
  });
}

// Optional: You can use this to check login status globally
function checkUserSession() {
  const user = localStorage.getItem("hackerUser");
  if (!user && window.location.pathname.includes("index.html")) {
    // Redirect only on protected pages
    window.location.href = "login.html";
  }
}

// Run when page fully loads
window.onload = function () {
  checkUserSession();
  typeWriter();
  handleFormSubmit();
};
