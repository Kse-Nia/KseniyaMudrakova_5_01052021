// Variable ajout produit

let recup = localStorage.getItem("camera");
let total = 0;
let affichagePanier = document.getElementById('table');

// Ajout code HTML Panier

for (let i = 0; i < recup.length; i++){
    affichagePanier.innerHTML += `
    <tr>
        <th>Produit</th>
        <th>Quantité</th>
        <th>Prix</th>
        <th>Total</th>
    </tr>
        
    <tr>
        <td>Camera</td>
        <td>1</td>
        <td>€</td>
    </tr>
    `;
}
const camera = localStorage.getItem("camera");

// Ajout des produits
