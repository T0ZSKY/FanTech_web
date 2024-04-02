

function envoyerEmail() {
    var destinataire = 'tomlimon1508@gmail.com';
    var sujet = 'Demande de contact';
    var corps = 'Je voudrais une demo de votre application. Merci de me contacter au plus vite. Cordialement.';

    var mailtoURL = 'mailto:' + destinataire + '?subject=' + encodeURIComponent(sujet) + '&body=' + encodeURIComponent(corps);
    
    // Ouvrir l'application de messagerie par défaut avec les paramètres
    window.location.href = mailtoURL;
}


