// Variable ajout produit

let recup = localStorage.getItem("camera");
let total = 0;
let affichagePanier = document.getElementById('table');

// Ajout code HTML Panier

affichagePanier.innerHTML += `
<tr>
    <th>Produit</th>
    <th>Quantité</th>
    <th>Prix</th>
</tr>
    
<tr>
    <td>Camera</td>
    <td>1</td>
    <td>€</td>
</tr>
`;

// Recupération des produits du localStorage


const camera = localStorage.getItem("camera");

// Ajout des produits
