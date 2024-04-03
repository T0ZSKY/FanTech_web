// Ajout d'un écouteur d'événement pour le formulaire de connexion
document.getElementById("login-form").addEventListener("submit", function(a) {
    a.preventDefault(); // Empêche le formulaire de se soumettre normalement

    // Récupération des valeurs du nom d'utilisateur et du mot de passe
    var b = document.getElementById("username").value;
    var c = document.getElementById("password").value;

    // Sélection des éléments d'alerte pour afficher les messages d'erreur
    var d = document.getElementById("alert");
    var e = document.getElementById("alert-message");

    // Vérification des identifiants
    if (b === hexToString("546f6d") && c === hexToString("4c654d64704465546f6d")) {
        // Si les identifiants sont corrects, stockez l'état de connexion dans localStorage
        localStorage.setItem("isLoggedIn", true);
        // Redirigez l'utilisateur vers la page principale
        window.location.href = "./src/main/main.html";
    } else {
        // Si les identifiants sont incorrects, affichez un message d'erreur
        e.textContent = hexToString("4e6f6d206475277573657275696f2071756520706173736520696e636f72726563742e");
        d.classList.add("show");
        setTimeout(function() {
            d.classList.remove("show");
        }, 3000);
        // Ajoutez une animation de secousse au conteneur de connexion
        document.querySelector(".login-container").style.animation = "shake 0.5s";
        setTimeout(function() {
            document.querySelector(".login-container").style.animation = "";
        }, 500);
    }
});

// Fonction pour convertir une chaîne hexadécimale en texte brut
function hexToString(hex) {
    var string = '';
    for (var i = 0; i < hex.length; i += 2) {
        string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return string;
}
