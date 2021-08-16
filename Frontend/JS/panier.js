// Variables:

let recup = JSON.parse(localStorage.getItem("camera"));
let total = 0;
let affichagePanier = document.getElementById("table");

let delateCart = document.getElementById("btnDelate");
let confirmCart = document.getElementById("btnConfirm");

// Injection code HTML Panier

affichagePanier.innerHTML += `
<tr>
    <th>Produit</th>
    <th>Quantité</th>
    <th>Prix</th>
    <th>Total</th>
</tr>`;

let resultTotal = 0;
let priceP = 1;

for (let i = 0; i < recup.length; i++) {
if(recup === null){
   alert("votre panier est vide");
} else{
    affichagePanier.innerHTML += `
    <tr>
        <td>${recup[i].name}</td>
        <td>1</td>
        <td>${recup[i].price} €</td>
        <td></td>
    </tr>
    `;
}

  resultTotal = resultTotal + priceP;

}
console.log(resultTotal);


// Compteur nombre de produits

let nmbArticles = document.getElementsByClassName("itemNumber");

// Boutons suppression et validation panier

document.getElementById("btnDelate").addEventListener("click", () => {
  let questionCart = confirm("Voulez-vous vraiment supprimer le panier?");
  console.log(questionCart);
  localStorage.clear();
  location.reload(true);
});
