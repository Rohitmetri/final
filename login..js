let isSignup = true;

// Toggle between Login and Signup forms
function toggleForm() {
  isSignup = !isSignup;
  document.getElementById("form-title").textContent = isSignup ? "Sign Up" : "Login";
  document.getElementById("submit-btn").textContent = isSignup ? "Sign Up" : "Login";
  document.getElementById("toggle-text").innerHTML = isSignup ?
    "Already have an account? <a href='#' onclick='toggleForm()'>Login</a>" :
    "Don't have an account? <a href='#' onclick='toggleForm()'>Sign Up</a>";
  document.getElementById("message").textContent = "";
}

// Handle form submission
document.getElementById("auth-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    document.getElementById("message").textContent = "Both fields are required!";
    return;
  }

  if (isSignup) {
    // Signup logic
    localStorage.setItem(username, password);
    document.getElementById("message").textContent = "Signup successful! Please login.";
    toggleForm(); // Switch to login form
  } else {
    // Login logic
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      document.getElementById("message").textContent = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "index.html"; // Redirect to main page
      }, 1000);
    } else {
      document.getElementById("message").textContent = "Invalid credentials!";
    }
  }
});