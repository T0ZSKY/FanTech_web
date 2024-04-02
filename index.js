document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var alertBox = document.getElementById("alert");
    var alertMessage = document.getElementById("alert-message");

    if (username === "Tom" && password === "Admin") {
        window.location.href = "/src/main/main.html";
    } else {
        alertMessage.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
        alertBox.classList.add("show");
        setTimeout(function() {
            alertBox.classList.remove("show");
        }, 3000);

        // Ajout d'une animation de secousse
        document.querySelector(".login-container").style.animation = "shake 0.5s";
        setTimeout(function() {
            document.querySelector(".login-container").style.animation = "";
        }, 500);
    }
});
