
document.addEventListener("DOMContentLoaded", function () {
    const authCard = document.getElementById("authCard");

    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    const loginMessage = document.getElementById("loginMessage");
    const signupMessage = document.getElementById("signupMessage");

    if (!authCard) return;

    // Switch to sign-up mode.
    function showSignup() {
        authCard.classList.add("signup-active");
        document.title = "Sign Up | CareerNest";
        history.replaceState(null, "", "#signup");

        if (loginMessage) loginMessage.textContent = "";
        if (signupMessage) signupMessage.textContent = "";
    }

    // Switch to login mode.
    function showLogin() {
        authCard.classList.remove("signup-active");
        document.title = "Login | CareerNest";
        history.replaceState(null, "", "#login");

        if (loginMessage) loginMessage.textContent = "";
        if (signupMessage) signupMessage.textContent = "";
    }

    // Connect every switch button.
    document.querySelectorAll('[data-show="signup"]').forEach(function (button) {
        button.addEventListener("click", showSignup);
    });

    document.querySelectorAll('[data-show="login"]').forEach(function (button) {
        button.addEventListener("click", showLogin);
    });

    // Open the form requested by the URL.
    if (window.location.hash === "#signup") {
        showSignup();
    }

    // Toggle password visibility.
    document.querySelectorAll(".password-toggle").forEach(function (button) {
        button.addEventListener("click", function () {
            const input = button.parentElement.querySelector("input");
            const icon = button.querySelector("i");

            if (!input || !icon) return;

            const shouldShow = input.type === "password";

            input.type = shouldShow ? "text" : "password";

            icon.classList.toggle("fa-eye", !shouldShow);
            icon.classList.toggle("fa-eye-slash", shouldShow);

            button.setAttribute(
                "aria-label",
                shouldShow ? "Hide password" : "Show password"
            );
        });
    });

    // Login form demonstration.
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!loginForm.checkValidity()) {
                loginForm.reportValidity();
                return;
            }

            loginMessage.textContent =
                "Your form is valid. Backend authentication is still needed.";

            loginMessage.style.color = "#3563E9";
        });
    }

    // Sign-up form demonstration.
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!signupForm.checkValidity()) {
                signupForm.reportValidity();
                return;
            }

            const name = document
                .getElementById("signupName")
                .value.trim();

            if (name.length < 2) {
                signupMessage.textContent =
                    "Please enter your full name.";

                signupMessage.style.color = "#D93025";
                return;
            }

            signupMessage.textContent =
                "Your form is valid. Backend account creation is still needed.";

            signupMessage.style.color = "#3563E9";
        });
    }

    // Forgot-password placeholder.
    const forgotPassword = document.getElementById("forgotPassword");

    if (forgotPassword) {
        forgotPassword.addEventListener("click", function (event) {
            event.preventDefault();

            loginMessage.textContent =
                "Password recovery will be available after backend integration.";

            loginMessage.style.color = "#69758A";
        });
    }
});
