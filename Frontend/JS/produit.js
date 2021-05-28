let params = (new URL(document.location)).searchParams;
let id = params.get('id');
console.log(id);

// http://127.0.0.1:5501/Frontend/produit.html?id=12345