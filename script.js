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