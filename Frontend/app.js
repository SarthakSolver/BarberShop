const apiUrl = "http://localhost:4000/user";

// Show Signup form
function showSignup() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("signup-container").style.display = "block";
}

// Show Login form
function showLogin() {
    document.getElementById("signup-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
}

// Signup Function
document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const role = document.getElementById("role").value;

    const userData = { name, email, password, role };

    try {
        const response = await fetch(`${apiUrl}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (response.ok) {
            alert("Signup successful! Please log in.");
            showLogin();
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert("Error during signup.");
    }
});

// Login Function
document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const loginData = { email, password };

    try {
        const response = await fetch(`${apiUrl}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData),
        });
        const data = await response.json();
        if (response.ok) {
            alert("Login successful! Welcome.");
            localStorage.setItem("token", data.token);
            localStorage.setItem("userName", data.user.name);
            localStorage.setItem("userRole", data.user.role);
            // Redirect to profile or dashboard
            window.location.href = "home.html";
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert("Error during login.");
    }
});
