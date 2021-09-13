function orderConfirmation() {
  let data = JSON.parse(localStorage.getItem("sendOrder"));
  let orderContainer = document.getElementById("orderContainer");
  orderContainer.innerHTML += `
<div>
    <p>Votre commande N° ${sendOrder.orderId} vient d'être prise en compte.</p>
    <p>Merci ${sendOrder.contact.firstName} d'avoir effectué votre achat sur notre site.</p>
</div>
`;
}