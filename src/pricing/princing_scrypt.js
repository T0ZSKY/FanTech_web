
// Vérification de l'état de connexion lorsque la page se charge
document.addEventListener("DOMContentLoaded", function() {
    if (!isLoggedIn()) {
        // Si l'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
        window.location.href = "../../index.html";
    }
});

// Fonction pour vérifier l'état de connexion
function isLoggedIn() {
    // Vérifiez si l'état de connexion est présent dans localStorage
    return localStorage.getItem("isLoggedIn") === "true";
}


document.addEventListener("DOMContentLoaded", function() {
    var cells = document.querySelectorAll('.plan, .price');
    cells.forEach(function(cell) {
        cell.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f2f2f2';
        });
        cell.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#92cddc';
        });
    });
});


