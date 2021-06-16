let params = new URL(document.location).searchParams;
let id = params.get("id");

let docHtml = document.getElementsByClassName("produitContent");
let selecChoice = document.getElementsByClassName("select-box");

fetch(`http://localhost:3000/api/cameras/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    docHtml[0].innerHTML += `
      <div class=" container article2">
      <div class="card d-flex text-center" style="width: 30rem;">
        <a href="produit.html?id=${data._id}" />
        <h3 class="card-title">${data.name}</h3>
       <div class="information">
       <img src=${data.imageUrl} class="card-img-top img-thumbnail mx-auto" alt="présentation de l'appareil photo">
       <div class="card-body  ">
       <p class="info">${data.description}</p>
        <p class="price">${data.price} €</p>
        </div>
        <div class="select-box">
        <option value = "lense"></option>
        <input class="btn btn-primary" type="submit" value="Valider">
        </div>
       </a>
      </div>
        `; 
          })
// http://127.0.0.1:5501/Frontend/produit.html?id=12345

