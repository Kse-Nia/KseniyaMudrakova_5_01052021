const docHtml = document.getElementById("main");
fetch("http://localhost:3000/api/cameras")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data[0]);

    console.log(data[0].name);
    const camera = document.createElement("h2");
    camera.textContent = data[0].name;
    docHtml.appendChild(camera);

    console.log(data[0].price);
    const price = document.createElement("div");
    price.textContent = data[0].price;
    docHtml.appendChild(price);

    console.log(data[0].description);
    const description = document.createElement("div");
    description.textContent = data[0].description;
    docHtml.appendChild(description);

    console.log(data[0].imageUrl);
    const picture = document.createElement("img");
    picture.innerHTML = `<img src="http://localhost:3000/images/vcam_1.jpg"/>`;
    docHtml.appendChild(picture);
  });
