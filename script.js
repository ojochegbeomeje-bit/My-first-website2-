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
// SIGN UP FORM
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const password = document.getElementById("su_password").value;
    const confirm = document.getElementById("su_confirm").value;
    if (password !== confirm) {
      alert("Passwords do not match!");
    } else {
      alert("Sign up successful! (Demo only)");
    }
  });
}
// SIGN IN FORM
const signinForm = document.getElementById("signinForm");
if (signinForm) {
  signinForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Signed in successfully! (Demo only)");
  });
}