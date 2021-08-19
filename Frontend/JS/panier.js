// Variables:

let recup = JSON.parse(localStorage.getItem("camera"));
let affichagePanier = document.getElementById("table");
let containerPanier = document.getElementById("containerCart");

let delateCart = document.getElementById("btnDelate");
let confirmCart = document.getElementById("btnConfirm");

console.log(recup);

// Injection code HTML Panier

affichagePanier.innerHTML += `
<tr>
    <th>Produit</th>
    <th>Quantité</th>
    <th>Prix</th>
    <th>Total</th>
</tr>`;

let resultTotal = 0;
//priceP = recup.price;

for (let i = 0; i < recup.length; i++) {
  if (recup === null) {
    containerPanier.innerHTML = "Votre panier est vide";
  } else {
    affichagePanier.innerHTML += `
    <tr>
        <td>${recup[i].name}</td>
        <td>${recup.length}</td>
        <td>${recup[i].price} €</td>
        <td>${resultTotal} €</td>
    </tr>
    `;
  }
  let priceP = recup.price;
  //resultTotal = resultTotal + priceP;
  resultTotal = priceP * recup.length;
}

console.log(resultTotal);

// Boutons suppression et validation panier

document.getElementById("btnDelate").addEventListener("click", () => {
  let questionCart = confirm("Voulez-vous vraiment supprimer le panier?");
  console.log(questionCart);
  localStorage.clear();
  location.reload(true);
});


// Partie Regex formulaire de validation

const order = document.getElementById("formOrder");
const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;
const regexCity =
  /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;


