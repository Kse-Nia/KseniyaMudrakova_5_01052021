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
    <a href="produit.html?id=${data._id}" />
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

      <input class="btn btn-primary mt-3" type="submit" value="Valider">
      </select>
      </div>
    </div>
    </a>
    </div>
  </div>
        `;
  
  });

// http://127.0.0.1:5501/Frontend/produit.html?id=12345
/*
this.lenses = data.lenses;
    for (let i = 0; i < lenses.lenght; i++) {
      selecChoice.innerHTML += `
            <option value = "lense">${data[i].lenses}</option>
            <option value = "lense">${data[i].lenses}</option>
            `;
    */