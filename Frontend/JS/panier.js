// Variable ajout produit

let recup = localStorage.getItem("camera");
let total = 0;

// Recupération des produits du localStorage

const totalCart = document.getElementsByClassName("total");
const quantity = document.getElementsByClassName("quantity");
const table = document.getElementsByClassName("table");
console.log(localStorage);

const camera = localStorage.getItem("camera");

// Ajout des produits

function displayProducts() {
  let product = getProducts();
  let cartItem = 1;

  for (let i = 0; i < camera.length; i++) {
    tableHtml.innerHTML += ` 
  
  <thead>
  <tr>
      <th colspan="2">Produit</th>
      <th colspan="2">Quantité</th>
      <th colspan="2">Prix Total</th>
  </tr>
</thead>
<tbody>
  <tr>
      <td colspan="2" class="product">${camera.length}</td>
      <td colspan="2" class="quantity"></td>
      <td colspan="2" class="total">€</td>
  </tr>
</tbody>  
  `;

  }
}

// Suppression du panier

document.getElementById("delate").addEventListener("click", () => {
  localStorage.clear("camera");
});

function getProducts() {
  return localStorage.getItem("camera")
    ? JSON.parse(localStorage.getItem("camera"))
    : [];
}

function loadingCart() {
  let product = getProducts();
  if (camera.length < 1) {
    cartItem = 1;
  }
}
