
const authCard = document.getElementById("authCard");

const showSignupBtn = document.getElementById("showSignup");
const showLoginBtn = document.getElementById("showLogin");

const mobileShowSignup = document.getElementById("mobileShowSignup");
const mobileShowLogin = document.getElementById("mobileShowLogin");

function showSignup() {
    authCard.classList.add("signup-active");
    history.replaceState(null, "", "#signup");
}

function showLogin() {
    authCard.classList.remove("signup-active");
    history.replaceState(null, "", "#login");
}

showSignupBtn.addEventListener("click", showSignup);
showLoginBtn.addEventListener("click", showLogin);

mobileShowSignup.addEventListener("click", showSignup);
mobileShowLogin.addEventListener("click", showLogin);

// Open the correct form if the URL has a hash.
if (window.location.hash === "#signup") {
    authCard.classList.add("signup-active");
}

// Show or hide passwords.
document.querySelectorAll(".toggle-password").forEach(function (button) {
    button.addEventListener("click", function () {
        const passwordInput = button.parentElement.querySelector("input");
        const icon = button.querySelector("i");

        const isHidden = passwordInput.type === "password";

        passwordInput.type = isHidden ? "text" : "password";
        icon.classList.toggle("fa-eye", !isHidden);
        icon.classList.toggle("fa-eye-slash", isHidden);

        button.setAttribute(
            "aria-label",
            isHidden ? "Hide password" : "Show password"
        );
    });
});

// Frontend-only login demonstration.
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    loginMessage.textContent =
        "Your form is valid! Real login will work after backend integration.";
    loginMessage.style.color = "#3563E9";
});

// Frontend-only registration demonstration.
const signupForm = document.getElementById("signupForm");
const signupMessage = document.getElementById("signupMessage");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const password = document.getElementById("signupPassword").value;

    if (name.length < 2) {
        signupMessage.textContent =
            "Please enter your full name.";
        signupMessage.style.color = "#D93025";
        return;
    }

    if (password.length < 8) {
        signupMessage.textContent =
            "Your password must contain at least 8 characters.";
        signupMessage.style.color = "#D93025";
        return;
    }

    signupMessage.textContent =
        "Your form is valid! Account creation will work after backend integration.";
    signupMessage.style.color = "#3563E9";
});

// Forgot-password placeholder.
const forgotPassword = document.getElementById("forgotPassword");

forgotPassword.addEventListener("click", function (event) {
    event.preventDefault();

    loginMessage.textContent =
        "Password recovery will be available after backend integration.";
    loginMessage.style.color = "#69758A";
});
