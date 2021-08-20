// Variables:

let recup = JSON.parse(localStorage.getItem("camera"));
let affichagePanier = document.getElementById("table");
let containerPanier = document.getElementById("containerCart");

let delateCart = document.getElementById("btnDelate");
let confirmCart = document.getElementById("btnConfirm");

console.log(recup);

// Injection code HTML Panier

affichagePanier.innerHTML += `
<tr>
    <th>Produit</th>
    <th>Quantité</th>
    <th>Prix</th>
    <th>Total</th>
</tr>`;

let resultTotal = 0;
//priceP = recup.price;

for (let i = 0; i < recup.length; i++) {
  let resultTotal = recup.price * recup.length;
  if (recup === null) {
    containerPanier.innerHTML = "Votre panier est vide";
  } else {
    affichagePanier.innerHTML += `
    <tr>
        <td>${recup[i].name}</td>
        <td>${recup.length}</td>
        <td>${recup[i].price} €</td>
        <td class="totalPrice">${resultTotal} €</td>
    </tr>
    `;
  }
  let priceP = recup.price;

  //resultTotal = resultTotal + priceP;
  resultTotal = priceP * recup.length;
}

console.log(resultTotal);

// Boutons suppression et validation panier

document.getElementById("btnDelate").addEventListener("click", () => {
  let questionCart = confirm("Voulez-vous vraiment supprimer le panier?");
  console.log(questionCart);
  localStorage.clear();
  location.reload(true);
});

// Partie Regex formulaire de validation

let form = document.querySelector("#submitForm");

// Ecouter modifs

// ** Partie mail
form.email.addEventListener("change", function () {
  validEmail(this);
});

const validEmail = function (inputEmail) {
  let emailRegex = new RegExp(
    "^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}.[a-z]{2,4}$",
    "g"
  );
  let testEmail = emailRegex.test(inputEmail.value);
  let small = inputEmail.nextElementSibling;
  if (testEmail) {
    small.innerHTML = "Adresse valide";
    small.classList.remove('Erreur');
    small.classList.add('Success');
  } else {
    small.innerHTML = "Adresse mail non valide";
    small.classList.remove('Success');
    small.classList.add('Erreur');

  }
};


// ** Partie nom


form.name.addEventListener("change", function () {
  validName(this);
});

const validName = function (inputName) {
  let nameRegex = new RegExp(
    '^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$', 'g'
  );
  let testName = nameRegex.test(inputName.value);
  let small = inputName.nextElementSibling;
  if (testEmail) {
    small.innerHTML = "Nom valide";
    small.classList.remove('Erreur');
    small.classList.add('Success');
  } else {
    small.innerHTML = "Nom non valide";
    small.classList.remove('Success');
    small.classList.add('Erreur');

  }
};

/*

const validName = function(inputName){
  let validName = new nameRegex(
'^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$', 'g'
  );
  let testName = validName.test(inputName.value);
};
const validCity = function(inputCity){
  let validationCity = new cityRegex(
    '^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$', 'g'
  );
};
const validAdress = function (inputAdress){
  let validationAdress = new adressRegex(
    '^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$'
  );
};

*/
