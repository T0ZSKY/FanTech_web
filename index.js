document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var alertBox = document.getElementById("alert");
    var alertMessage = document.getElementById("alert-message");

    // Vérifiez si les identifiants sont corrects
    if (username === "Tom" && password === "LeMdpDeTom") {
        // Stockez l'état de connexion dans localStorage
        localStorage.setItem("isLoggedIn", true);
        // Redirigez l'utilisateur vers la page principale
        window.location.href = "./src/main/main.html";
    } else {
        // Affichez un message d'erreur
        alertMessage.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
        alertBox.classList.add("show");
        setTimeout(function() {
            alertBox.classList.remove("show");
        }, 3000);
        // Ajoutez une animation de secousse
        document.querySelector(".login-container").style.animation = "shake 0.5s";
        setTimeout(function() {
            document.querySelector(".login-container").style.animation = "";
        }, 500);
    }
});
