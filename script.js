// Fonction pour changer la couleur de fond
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}

// Écouteur d'événement pour le clic sur le bouton
document.getElementById("changeColorBtn").addEventListener("click", changeBackgroundColor);

// Validation du formulaire
document.getElementById("submitBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
        alert("Veuillez remplir tous les champs requis.");
    } else {
        alert("Formulaire soumis avec succès!");
    }
});

// Effet au survol de l'image
var image = document.getElementById("image");

image.addEventListener("mouseover", function () {
    image.src = "new_image.jpg"; // Change l'image au survol
});

image.addEventListener("mouseout", function () {
    image.src = "image.jpg"; // Restaure l'image initiale lorsque le survol est terminé
});
