// Variables:

let recup = JSON.parse(localStorage.getItem("camera"));
let affichagePanier = document.getElementById("table");
let containerPanier = document.getElementById("containerCart");

let delateCart = document.getElementById("btnDelate");
let confirmCart = document.getElementById("btnConfirm");

// Injection code HTML Panier

affichagePanier.innerHTML += `
<tr>
    <th>Produit</th>
    <th>Quantité</th>
    <th>Prix</th>
    <th>Total</th>
</tr>`;

let resultTotal = 0;
let totalCommand = 0;

for (let i = 0; i < recup.length; i++) {
  resultTotal = recup[i].price * recup[i].quantity;
  totalCommand = totalCommand + resultTotal;

  if (recup === null) {
    affichagePanier.innerHTML += `
    <tr>
        <td>Votre panier est vide</td>
    </tr>
    `;
  } else {
    affichagePanier.innerHTML += `
    <tr>
        <td>${recup[i].name}</td>
        <td>${recup[i].quantity}</td>
        <td>${recup[i].price} €</td>
        <td class="totalPrice d-flex justify-content-end">${resultTotal} € <i class="delateItem fas fa-trash-alt"></i></td>
        </tr>    
        `;
  }
}
let affichageTotalPanier = document.getElementById("tableTotalPanier");

affichageTotalPanier.innerHTML += `
<tr>
    <th>Total de la commande: </th>
    <td>${totalCommand} €</td>
</tr>
`;

console.log(totalCommand);

// Supprimer tout le panier

document.getElementById("btnDelate").addEventListener("click", () => {
  let questionCart = confirm("Voulez-vous vraiment supprimer le panier?");
  if (questionCart) {
    console.log(questionCart);
    localStorage.clear();
    location.reload(true);
  } else {
    //false
  }
});

// Partie Regex formulaire de validation

let form = document.querySelector("#submitForm");

// Ecouter modifs

// ** Partie nom

form.firstname.addEventListener("change", function () {
  validFirstName(this);
});

const validFirstName = function (inputfirstname) {
  let firstNameRegex = new RegExp(
    "^(([a-zA-ZÀ-ÿ]+[s-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$",
    "g"
  );
  let testFirstName = firstNameRegex.test(inputfirstname.value);
  let small1 = inputfirstname.nextElementSibling;
  if (testFirstName) {
    small1.innerHTML = "Prénom valide";
    small1.classList.remove("Erreur");
    small1.classList.add("Prénom valide");
    return true;
  } else {
    small1.innerHTML = "Prénom non valide";
    small1.classList.remove("Success");
    small1.classList.add("Prénom valide");
    return false;
  }
};

// ** Partie nom

form.name.addEventListener("change", function () {
  validName(this);
});

const validName = function (inputName) {
  let nameRegex = new RegExp(
    "^(([a-zA-ZÀ-ÿ]+[s-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$",
    "g"
  );
  let testName = nameRegex.test(inputName.value);
  let small2 = inputName.nextElementSibling;
  if (testName) {
    small2.innerHTML = "Nom valide";
    small2.classList.remove("Erreur");
    small2.classList.add("Success");
    return true;
  } else {
    small2.innerHTML = "Nom non valide";
    small2.classList.remove("Success");
    small2.classList.add("Erreur");
    return false;
  }
};

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
    small.innerHTML = "Mail valide";
    small.classList.remove("Erreur - veillez entrer une adresse mail valide");
    small.classList.add("Success");
    return true;
  } else {
    small.innerHTML = "Erreur - veillez entrer une adresse mail valide";
    small.classList.remove("Mail valide");
    small.classList.add("Erreur - veillez entrer une adresse mail valide");
    return false;
  }
};

// ** Partie ville

form.city.addEventListener("change", function () {
  validCity(this);
});

const validCity = function (inputCity) {
  let cityRegex = new RegExp("^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$", "g");
  let testCity = cityRegex.test(inputCity.value);
  let small3 = inputCity.nextElementSibling;
  if (testCity) {
    small3.innerHTML = "Ville valide";
    small3.classList.remove("Erreur");
    small3.classList.add("Success");
    return true;
  } else {
    small3.innerHTML = "Ville non valide";
    small3.classList.remove("Success");
    small3.classList.add("Erreur");
    return false;
  }
};

// ** Partie Adresse

form.adress.addEventListener("change", function () {
  validAdress(this);
});

const validAdress = function (inputAdress) {
  let adressRegex = new RegExp("^.{6,}$", "g");
  let testAdress = adressRegex.test(inputAdress.value);
  let small4 = inputAdress.nextElementSibling;
  if (testAdress) {
    small4.innerHTML = "Adresse valide";
    small4.classList.remove("Veillez entrer votre adresse");
    small4.classList.add("Adresse valide");
    return true;
  } else {
    small4.innerHTML = "Veillez entrer votre adresse";
    small4.classList.remove("Adresse valide");
    small4.classList.add("Veillez entrer votre adresse");
    return false;
  }
};

//Envoie des info
document
  .getElementById("btnConfirm")
  .addEventListener("click", function (event) {
    class Contact {
      constructor(firstname, name, address, city, email) {
        this.firstName = firstName;
        this.address = address;
        this.city = city;
        this.email = email;
      }
    }
  });

const order = {
  contact: {
    name: document.querySelector("#nom").value,
    address: document.querySelector("#adress").value,
    city: document.querySelector("#city").value,
    email: document.querySelector("#email").value,
  },
  products: recup,
};

// Envoie du formulaire dans localStorage
