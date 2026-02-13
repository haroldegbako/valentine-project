// Messages pour le bouton NON
const noMessages = [
  'NON',
  'Tu es sûr(e) ? 🥺',
  'S\'il te plaît... 💕',
  'Je t\'en supplie 🙏',
  'Allez, dis oui ! 😊',
  'Dernière chance... 💝',
  'De toute façon tu peux pas dire non 😏'
];

let noClickCount = 0;
let noButtonTimeout;

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Gestion du bouton NON
noBtn.addEventListener('click', function(e) {
  e.preventDefault();
  
  noClickCount++;
  
  // Changer le texte du bouton NON
  if (noClickCount < noMessages.length) {
      noBtn.textContent = noMessages[noClickCount];
      
      // Déplacer le bouton aléatoirement
      moveNoButton();
      
      // Agrandir le bouton OUI
      updateYesButtonSize();
  }
  
  // Au 6ème clic, masquer le bouton NON après 1 minute
  if (noClickCount === 6) {
      clearTimeout(noButtonTimeout);
      noButtonTimeout = setTimeout(() => {
          noBtn.classList.add('hidden');
      }, 6000); // 600ms = 1 minute
  }
});

// Déplacer le bouton NON de manière aléatoire
function moveNoButton() {
  const container = document.querySelector('.buttons-wrapper');
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  
  // Calculer les positions maximales
  const maxX = containerRect.width - btnRect.width - 20;
  const maxY = containerRect.height - btnRect.height - 20;
  
  // Position aléatoire
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  
  // Appliquer la position
  noBtn.style.position = 'absolute';
  noBtn.style.left = randomX + 'px';
  noBtn.style.top = randomY + 'px';
}

// Agrandir progressivement le bouton OUI
function updateYesButtonSize() {
  // Retirer toutes les classes grow précédentes
  yesBtn.className = 'btn btn-yes';
  
  // Ajouter la classe correspondante au nombre de clics
  if (noClickCount > 0 && noClickCount <= 6) {
      yesBtn.classList.add(`grow-${noClickCount}`);
  }
}

// Gestion du bouton OUI
yesBtn.addEventListener('click', function(e) {
  e.preventDefault();
  
  // Animation de sortie
  document.body.classList.add('fade-out');
  
  // Redirection après l'animation
  setTimeout(() => {
      window.location.href = 'login.html';
  }, 800);
});

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
  // S'assurer que le bouton NON est en position relative au début
  noBtn.style.position = 'relative';
});