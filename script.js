function surprise() {
  const input = document.getElementById('prenom');
  const nom = input.value.trim();
  if(nom) {
    localStorage.setItem('ursula', nom);
    window.location.href = "index2.html";
  } else {
    alert("ecris ton prénom 😄");
  }
}
// deuxième page

let ursula = localStorage.getItem('ursula');
let message = document.getElementById('message');

message.textContent = `${ursula}, veux-tu être ma Valentine ?`;


const buttonNon = document.getElementById('non');
const textes = [
  "Non",
  "S'il te plaît 🥺",
  "Réfléchis encore",
  "Tu es sûre ?",
  "Dernière chance 😭",
  "Allez dis oui ❤️"
];
let index = 0;

buttonNon.addEventListener('mouseover', () => {
  index = (index + 1) % textes.length;
  buttonNon.textContent = textes[index];

  const largeur = window.innerWidth - buttonNon.offsetWidth;
  const hauteur = window.innerHeight - buttonNon.offsetHeight;
  buttonNon.style.position = 'absolute';
  buttonNon.style.left = Math.random() * largeur + 'px';
  buttonNon.style.top = Math.random() * hauteur + 'px';
});


const boutonOui = document.getElementById('oui');
let taille = 16;
setInterval(() => {
  taille += 1;
  boutonOui.style.fontSize = taille + "px";
}, 500);



  