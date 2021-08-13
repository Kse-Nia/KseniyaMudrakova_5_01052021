// Variable ajout produit

let recup = JSON.parse(localStorage.getItem("camera"));
let total = 0;
//<<<<<<< HEAD
let affichagePanier = document.getElementById('table');

// Ajout code HTML Panier
affichagePanier.innerHTML += `
<tr>
    <th>Produit</th>
    <th>Quantité</th>
    <th>Prix</th>
    <th>Total</th>
</tr>`;

let resultTotal = 0;
let priceP = 1;


for (let i = 0; i < recup.length; i++){
    affichagePanier.innerHTML += `
    <tr>
        <td>${recup[i]}</td>
        <td>1</td>
        <td>€</td>
        <td></td>
    </tr>
    `;

    resultTotal = resultTotal + priceP;
}
console.log(resultTotal);

// Recupération des produits du localStorage
const camera = localStorage.getItem("camera");

// Ajout des produits
//