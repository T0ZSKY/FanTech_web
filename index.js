document.getElementById("login-form").addEventListener("submit", function(a) {
    a.preventDefault();
    var b = document.getElementById("username").value,
        c = document.getElementById("password").value,
        d = document.getElementById("alert"),
        e = document.getElementById("alert-message"),
        f = "546f6d", // "Tom" en hexadécimal
        g = "4c654d64704465546f6d"; // "Admin" en hexadécimal
    if (b === hexToString(f) && c === hexToString(g)) {
        window.location.href = "/src/main/main.html";
    } else {
        e.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
        d.classList.add("show");
        setTimeout(function() {
            d.classList.remove("show");
        }, 3e3);
        document.querySelector(".login-container").style.animation = "shake 0.5s";
        setTimeout(function() {
            document.querySelector(".login-container").style.animation = "";
        }, 500);
    }
});

function hexToString(hex) {
    var string = '';
    for (var i = 0; i < hex.length; i += 2) {
        string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return string;
}