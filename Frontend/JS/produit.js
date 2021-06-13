let params = new URL(document.location).searchParams;
let id = params.get("id");
console.log(id);

const docHtml = document.getElementsByClassName("produitContent");

fetch(`http://localhost:3000/api/cameras/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    docHtml[0].innerHTML += `
      <div class="article2">
        <a href="produit.html?id=${data._id}" />
       <h3 class="name">${data.name}</h3>
       <div class="information">
       <img src=${data.imageUrl} alt="" class="image2">
       <p class="info">${data.description}</p>
        <p class="prix">${data.price} €</p>
        </div>
        <label for="pet-select">Choisir votre lentille</label>
        <select name="pets" id="lense-select">
            <option value="lense" id="lensechoice">${data.lenses}</option>
        </select>
       </a>
      </div>
      `;
  });

// http://127.0.0.1:5501/Frontend/produit.html?id=12345
