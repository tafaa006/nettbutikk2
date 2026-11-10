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

const produkter = [
  { id: 1, navn: "Headset", pris: 1600, kategori: [Kategorier[5], Kategorier[6]], stock: 11, stars: 4, bilde: "bilder/produkter/headset.jpg" },
  { id: 2, navn: "Mus", pris: 1600, kategori: Kategorier[6], stock: 11, stars: 4, bilde: "bilder/produkter/mus.jpg" },
  { id: 3, navn: "Ram", pris: 1600, kategori: Kategorier[2], stock: 11, stars: 4, bilde: "bilder/produkter/ram.jpg" },
  { id: 4, navn: "Skjerm", pris: 1600, kategori: Kategorier[3], stock: 11, stars: 4, bilde: "bilder/produkter/skjerm.jpg" },
  { id: 5, navn: "Tastatur", pris: 1600, kategori: Kategorier[6], stock: 11, stars: 4, bilde: "bilder/produkter/tastatur.jpg" },
];

let handlekurv = JSON.parse(localStorage.getItem("handlekurv") || "[]");

function save_kurv() {
  localStorage.setItem("handlekurv", JSON.stringify(handlekurv));
}

function opptater() {
  const antall = document.getElementById("antallKurv");
  if (antall) {
    antall.textContent = handlekurv.length;
  }
}

function leggtil_kruv(produktId) {
  if (produkter.some((produkt) => produkt.id === Number(produktId))) {
    handlekurv.push(Number(produktId));
    save_kurv();
    opptater();
  }
}

function fjern_kruv(indeks) {
  handlekurv.splice(indeks, 1);
  save_kurv();
  vis_kurv();
  opptater();
}

function vis_kurv() {
  const container = document.getElementById("handlekurvListe");
  if (!container) {
    return;
  }

  if (handlekurv.length === 0) {
    container.innerHTML = "<p>Handlekurven er tom.</p>";
    return;
  }

  const innhold = handlekurv.map((produktId, indeks) => {
    const produkt = produkter.find((vare) => vare.id === Number(produktId));
    if (!produkt) {
      return "";
    }

    const categoryText = Array.isArray(produkt.kategori) ? produkt.kategori.join(", ") : produkt.kategori;
    const stars = "★".repeat(produkt.stars) + "☆".repeat(5 - produkt.stars);

    return `
      <article class="Produkt vare">
        <div class="image-frame">
          <img class="bilde" src="${produkt.bilde}" alt="${produkt.navn}">
        </div>
        <p class="ting">${categoryText}</p>
        <h2>${produkt.navn}</h2>
        <p class="vurdering">
          <span class="stjerner">${stars}</span> ${produkt.stars}.0
        </p>
        <div class="vispris">
          <h3 id="pjis">Pris:</h3>
          <h3>${produkt.pris.toLocaleString("nb-NO")} kr</h3>
        </div>
        <div class="Knappene">
          <button class="fjernKnapp" data-indeks="${indeks}" type="button">Fjern produkt</button>
        </div>
      </article>
    `;
  }).join("");

  container.innerHTML = innhold;

  container.querySelectorAll(".fjernKnapp").forEach((knapp) => {
    knapp.addEventListener("click", () => {
      fjern_kruv(Number(knapp.dataset.indeks));
    });
  });
}

function byggProduktKort(produkt) {
  const categoryText = Array.isArray(produkt.kategori) ? produkt.kategori.join(", ") : produkt.kategori;
  const stars = "★".repeat(produkt.stars) + "☆".repeat(5 - produkt.stars);

  return `
    <div class="Produkt">
      <div class="image-frame">
        <img src="${produkt.bilde}" alt="${produkt.navn}">
      </div>
      <p class="ting">${categoryText}</p>
      <h2>${produkt.navn}</h2>
      <p class="vurdering">
        <span class="stjerner">${stars}</span> ${produkt.stars}.0
      </p>
      <div class="vispris">
        <h3 id="pjis">Pris:</h3>
        <h3>${produkt.pris.toLocaleString("nb-NO")} kr</h3>
      </div>
      <div class="Knappene">
        <button type="button" data-legg-i-handlekurv="${produkt.id}">Legg til handlekurv</button>
      </div>
    </div>
  `;
}

function initProdukter() {
  const productsContainer = document.querySelector(".produkter");
  if (!productsContainer) {
    return;
  }

  produkter.forEach((produkt) => {
    productsContainer.insertAdjacentHTML("beforeend", byggProduktKort(produkt));
  });

  document.querySelectorAll("[data-legg-i-handlekurv]").forEach((knapp) => {
    knapp.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      leggtil_kruv(knapp.dataset.leggIHandlekurv);
      knapp.textContent = "Lagt i handlekurven";
    });
  });
}

// --- slideshow ---
let slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  const slides = document.querySelectorAll(".mySlides");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }
}

if (document.querySelectorAll(".mySlides").length) {
  showDivs(slideIndex);
}

initProdukter();
opptater();
vis_kurv();