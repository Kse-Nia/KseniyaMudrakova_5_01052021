// Variable ajout produit

let cartStorage = JSON.parse(localStorage.getItem("produit"));

if (cartStorage == null){
    cartStorage = [];
    cartStorage.push(cart)
    localStorage.setItem("produit", JSON.stringify(cartStorage))
}