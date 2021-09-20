function orderConfirmation() {
  let data = JSON.parse(localStorage.getItem("sendOrder"));
  let orderContainer = document.getElementsByClassName("produitContent")[0];
  orderContainer.innerHTML += `
<div class="mx-auto text-center lh-lg">
    <p>Votre commande N° ${data.orderId} vient d'être prise en compte.</p>
    <p>Merci ${data.contact.firstName} d'avoir effectué votre achat sur notre site.</p>
</div>
`;

  console.log(data.orderId);
}
orderConfirmation();