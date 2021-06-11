let params = new URL(document.location).searchParams;
let id = params.get("id");
console.log(id);

const docHtml = document.getElementsByClassName("produitContent");
fetch(`http://localhost:3000/api/cameras/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);


  });

// http://127.0.0.1:5501/Frontend/produit.html?id=12345
