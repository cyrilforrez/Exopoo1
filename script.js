var homme = {
    prenom: "Goerge",
    nom: "Martin",
    pays: "France",
    age: 29,
    paiement: ["visa", "mastercard", "CB"],
    getName: function() {
        alert(this.prenom);
        alert(this.nom);
        alert(this.age);
    }
};
homme.getName();

var verification = {
    paysautoriser: ["France", "Belgique", "Espagne"],
    paiementautoriser: ["visa", "mastercard", "CB", "Paypal", "Cheque"],
    agemin: 18,
    VeriAge: function(personne) {
        if (personne.age >= (this.agemin)) {
            alert("Vous pouvez Entrez!");
        } else {
            alert("Vous n'êtes pas autoriser a entrez!");
        }
    },
    VeriPays: function(personne) {
        if (this.paysautoriser.includes(personne.pays)) {
            alert("Votre pays est autoriser!");
        } else {
            alert("Votre pays n'est pas autoriser!");
        }
    },
    VeriPaiement: function(personne) {
        for (var i = 0; i < personne.paiement.length; i++) break; {
            if (this.paiementautoriser.includes(personne.paiement[i])) {
                alert("Vous pouvez payer!");
            } else {
                alert("Vous ne pouvez pas payer!");
            }
        }
    }
};
verification.VeriAge(homme);
verification.VeriPays(homme);
verification.VeriPaiement(homme);