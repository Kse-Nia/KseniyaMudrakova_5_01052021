let params = new URL(document.location).searchParams;
let id = params.get("id");

let docHtml = document.getElementsByClassName("produitContent");
let selecChoice = document.getElementById("lense");

fetch(`http://localhost:3000/api/cameras/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    docHtml[0].innerHTML += `
    <div class="card  text-dark" style="background-color:#f0f1ff;">
    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img src=${
      data.imageUrl
    } class="card-img-top img-thumbnail " alt="présentation de l'appareil photo">
    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
    <div class="card-body text-center">
      <h3 class="card-title">${data.name}</h3>
      <p class="card-text text-dark">${data.description}</p>
      <p class="card-text text-dark fw-bolder">${data.price} € </p>
      <div class="select-box d-flex flex-column ">
      <select name="selection" id="lense">
      ${data.lenses.map(
        (lense) => `<option value=${lense} id=${data.id}>${lense}</option>`
      )}
      <input id="addToCart" class="btn btn-primary mt-3" type="submit" value="Ajouter au panier">
      </select>
      </div>
    </div>
    </div>
  </div>`;

    // gestion du panier et localStorage

    document.getElementById("addToCart").addEventListener("click", () => {
      event.preventDefault();

      let produitStorage = JSON.parse(localStorage.getItem("camera"));
      console.log(produitStorage);

      // S'il y a déjà des produits dans le panier
      if (produitStorage) {
      }

      // Pas de produit
      else {
      }
    });

    function redirectCart(productName) {
      window.location.href = `${window.location.origin}/cart.html?lastAddedProductName=${productName}`;
    }
  });
