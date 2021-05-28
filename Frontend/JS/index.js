const docHtml = document.getElementById("main");
fetch("http://localhost:3000/api/cameras")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
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
    }
  });
