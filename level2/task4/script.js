// REGISTER
function register() {
    let username = document.getElementById("regUser").value;
    let password = document.getElementById("regPass").value;

    if (username === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);

    alert("Registration successful!");
    window.location.href = "index.html";
}

// LOGIN
function login() {
    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    let storedUser = localStorage.getItem("user");
    let storedPass = localStorage.getItem("pass");

    if (username === storedUser && password === storedPass) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials!");
    }
}

// CHECK AUTH (Protected Page)
function checkAuth() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "index.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}