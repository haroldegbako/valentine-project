
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".buttons");

let noScale = 1;
let yesScale = 1;

function moveNoButton() {
  const bounds = container.getBoundingClientRect();
  const btnBounds = noBtn.getBoundingClientRect();

  const maxX = bounds.width - btnBounds.width;
  const maxY = bounds.height - btnBounds.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noScale = Math.max(0.3, noScale - 0.08);
  yesScale += 0.08;

  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${noScale})`;
  yesBtn.style.transform = `translateX(-50%) scale(${yesScale})`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

noBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

yesBtn.addEventListener("click", () => {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "login.html";
  }, 500);
});
