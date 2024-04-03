// Fonction pour envoyer un e-mail de demande de contact
function envoyerEmail() {
    var destinataire = 'tomlimon1508@gmail.com';
    var sujet = 'Demande de contact';
    var corps = 'Je voudrais une démo de votre application. Merci de me contacter au plus vite. Cordialement.';

    var mailtoURL = 'mailto:' + destinataire + '?subject=' + encodeURIComponent(sujet) + '&body=' + encodeURIComponent(corps);
    
    // Ouvrir l'application de messagerie par défaut avec les paramètres
    window.location.href = mailtoURL;
}

// Fonction pour envoyer un e-mail de demande de support
function support() {
    var destinataire = 'tomlimon1508@gmail.com';
    var sujet = 'Demande de Support';
    var corps = 'Je rencontre un problème avec votre application. Merci de me contacter au plus vite. Cordialement.';

    var mailtoURL = 'mailto:' + destinataire + '?subject=' + encodeURIComponent(sujet) + '&body=' + encodeURIComponent(corps);
    
    // Ouvrir l'application de messagerie par défaut avec les paramètres
    window.location.href = mailtoURL;
}

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