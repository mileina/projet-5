// Je selectionne le formulaire
const form = document.querySelector('#zipcode-form');

// J'ajoute un écouteur d'événement pour le formulaire
form.addEventListener('submit', (event) => {
  // Empêchez le formulaire de soumettre les données
  event.preventDefault();

  // Sélectionne le champ de saisie
  const zipcodeInput = document.querySelector('#zipcode-input');

  // Récupére la valeur entrée dans le champ de saisie
const zipcode = zipcodeInput.value;

// Nouvelle instance de l'objet XMLHttpRequest
const xhr = new XMLHttpRequest();

// Configure la requête
xhr.open('GET', `https://api.zippopotam.us/FR/${zipcode}`, true);

// Envoi la requête
xhr.send();

// Ajoute un écouteur d'événement pour la réception de la réponse
xhr.addEventListener('load', () => {
// Vérifie que la réponse est OK
if (xhr.status === 200) {
// Récupére les données de réponse
const data = JSON.parse(xhr.responseText);
// Sélectionne la zone d'affichage
const result = document.querySelector('#zipcode-result');

// Met en forme les données de réponse et affiche la zone d'affichage
result.innerHTML = `
  <h2>${data.places[0]['place name']}</h2>
  <p>${data.places[0].state}</p>
`;
} else {
console.error('Error:', xhr.status);
}
});
});

