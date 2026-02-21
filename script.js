alert("Welcome to my website!");
function changeText() {
  document.getElementById("message").innerText = "JavaScript is working";
}
// CONTACT FORM
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully! (Demo only)");
  });
}
// SIGN UP
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("su_email").value;
    const password = document.getElementById("su_password").value;
    const confirm = document.getElementById("su_confirm").value;
    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }
    // Save to localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Account created successfully!");
    window.location.href = "signin.html";
  });
}
// SIGN IN
const signinForm = document.getElementById("signinForm");
if (signinForm) {
  signinForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("si_email").value;
    const password = document.getElementById("si_password").value;
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");
    if (email === savedEmail && password === savedPassword) {
      alert("Login successful!");
    } else {
      alert("Invalid email or password!");
    }
  });
}
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const hamburgerLines = document.querySelectorAll('.hamburger');
menuBtn.addEventListener('click', function() {
  navMenu.classList.toggle('open');
  // Animate the hamburger lines
  hamburgerLines.forEach(line => {
    line.style.backgroundColor = 'white';
  });
});
// When you click a link, close the menu
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navMenu.classList.remove('open');
  });
});