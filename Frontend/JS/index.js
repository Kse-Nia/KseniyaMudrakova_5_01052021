// Définir les variables

const docHtml = document.getElementById("container");

fetch("http://localhost:3000/api/cameras")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      console.log(data);
      docHtml.innerHTML += `
      <div class="card  text-dark" style="background-color:#f0f1ff;">
      <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <a href="produit.html?id=${data[i]._id}" />
      <img src=${data[i].imageUrl} class="card-img-top img-thumbnail" alt="présentation de l'appareil photo">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
      <div class="card-body text-center">
        <h3 class="card-title">${data[i].name}</h3>
        <p class="card-text text-dark">${data[i].description}</p>
        <p class="card-text text-dark fw-bolder">${data[i].price} € </p>
      </div>
      </a>
      </div>
    </div>
      `;
    }
  });