const docHtml = document.getElementById("container");
fetch("http://localhost:3000/api/cameras")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      /* 
      const camera = document.createElement("h2");
      camera.textContent = data[i].name;
      docHtml.appendChild(camera);

      const price = document.createElement("div");
      price.textContent = data[i].price + " €";
      docHtml.appendChild(price);

      const description = document.createElement("div");
      description.textContent = data[i].description;
      docHtml.appendChild(description);

      const img = document.createElement("img");
      img.setAttribute("src", data[i].imageUrl);
      img.width = "300";
      img.setAttribute("alt", data[i].name);
      docHtml.appendChild(img);
*/

      docHtml.innerHTML += `
      <div class="card d-flex style="width: 18rem;">
      <a href="produit.html?id=${data[i]._id}" />
      <img src=${data[i].imageUrl} class="card-img-top img-thumbnail" alt="présentation de l'appareil photo">
      <div class="card-body text-center">
        <h3 class="card-title">${data[i].name}</h3>
        <p class="card-text text-dark">${data[i].description}</p>
        <p class="card-text text-dark">${data[i].price} € </p>
      </div>
      </a>
    </div>

      `;
    }
  });
