function verification() {
    // Validation du matricule
    var matricule = document.getElementsByName("matricule")[0].value;

     if (matricule.length !== 6) {
        alert("Erreur : le matricule doit contenir exactement 6 caractères.");
         return false;
    } else if (matricule.charAt(0) !== "M") {
        alert("Erreur : le matricule doit commencer par la lettre 'M'.");
         return false;
    } else {
        for (var i = 1; i < matricule.length; i++) {
            var caractere = matricule.charAt(i);
            if (caractere !== "0" && caractere !== "1" && caractere !== "2" && caractere !== "3" && caractere !== "4" && caractere !== "5" && caractere !== "6" && caractere !== "7" && caractere !== "8" && caractere !== "9") {
                alert("Erreur : le matricule ne doit contenir que des chiffres après le 'M'.");
                 return false;
            }
        }
    }

    // Validation de l'adresse e-mail
    var email = document.getElementsByName("adresseMail")[0].value;
    if (!email.includes("@") || !email.includes(".")) {
        alert('Erreur : veuillez entrer une adresse e-mail valide.');
         return false;
    }

    // Validation du sexe
    var sexe = document.getElementsByName("sexe");
    var homme = sexe[0].checked;
    var femme = sexe[1].checked;

    if (homme && femme) {
        alert('Erreur : vous devez choisir un seul sexe.');
         return false;
    }

    // Validation des couleurs choisies
    var limiteCouleurChoix = 2;
    var casesCochesCouleurs = document.querySelectorAll('input[name="couleur"]:checked');
    if (casesCochesCouleurs.length > limiteCouleurChoix) {
        alert("Vous ne pouvez choisir que " + limiteCouleurChoix + " couleurs au maximum.");
        return false;
    }

    // Validation des modules choisis
    var limiteModuleChoix = 2;
    var casesCochesModules = document.querySelectorAll('input[name="modules"]:checked');
    if (casesCochesModules.length > limiteModuleChoix) {
        alert("Vous ne pouvez choisir que " + limiteModuleChoix + " modules au maximum.");
        return false;
    }
    else 
    alert('incription achevée!!!!!!');
 

    // Si toutes les validations passent, le formulaire peut être soumis
    return true;
}
