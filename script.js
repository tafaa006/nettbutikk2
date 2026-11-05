let Handlekurv = [];

const Kategorier = [
  "computers-laptops",
  "phones-tablets",
  "pc-components",
  "monitors-displays",
  "gaming-accessories",
  "audio-headphones",
  "keyboards-mice",
  "tvs-home-entertainment",
  "smart-home-iot"
];

const Produkter = [
  { id: 1, navn: "Headset", pris: 1600, kategori: [Kategorier[5], Kategorier[6]], stock: 11, stars: 4, bilde: "bilder/produkter/headset.jpg" },
  { id: 2, navn: "Mus", pris: 1600, kategori: Kategorier[6], stock: 11, stars: 4, bilde: "bilder/produkter/mus.jpg" },
  { id: 3, navn: "Ram", pris: 1600, kategori: Kategorier[2], stock: 11, stars: 4, bilde: "bilder/produkter/ram.jpg" },
  { id: 4, navn: "Skjerm", pris: 1600, kategori: Kategorier[3], stock: 11, stars: 4, bilde: "bilder/produkter/skjerm.jpg" },
  { id: 5, navn: "Tastatur", pris: 1600, kategori: Kategorier[6], stock: 11, stars: 4, bilde: "bilder/produkter/tastatur.jpg" },
];

// --- slideshow ---
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  const slides = document.querySelectorAll(".mySlides");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  slides.forEach(slide => {
    slide.style.display = "none";
  });

  slides[slideIndex - 1].style.display = "block";
}

// --- end ---

function gay(iden) {
  Handlekurv.push(iden);
  alert(iden + " er lagt til handlekurv");
}

const productsContainer = document.querySelector(".produkter");

for (let i = 0; i < Produkter.length; i++) {
  const product = Produkter[i];
  let categoryText = product.kategori;

  if (Array.isArray(product.kategori)) {
    categoryText = product.kategori.join(", ");
  }

  const stars = "★".repeat(product.stars) + "☆".repeat(5 - product.stars);

  productsContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="Produkt">
      <div class="image-frame">
        <img src="${product.bilde}" alt="">
      </div>
      <p class="ting">${categoryText}</p>
      <h2>${product.navn}</h2>
      <p class="vurdering">
        <span class="stjerner">${stars}</span> ${product.stars}.0
      </p>
      <div class="vispris">
        <h3 id="pjis">Pris:</h3>
        <h3>${product.pris.toLocaleString("nb-NO")} kr</h3>
      </div>
      <div class="Knappene">
        <button onclick="gay(${product.id})">Legg til handlekurv</button>
      </div>
    </div>
    `
  );
}

window.addEventListener("resize");