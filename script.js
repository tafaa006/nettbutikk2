const produkter = [
  { id: 1, navn: "Headset", pris: 1600, kategori: "Lyd og hodetelefoner", stock: 11, stars: 4, featured: true, bilde: "bilder/produkter/headset.jpg" },
  { id: 2, navn: "Mus", pris: 1600, kategori: "Tastatur og mus", stock: 11, stars: 4, featured: false, bilde: "bilder/produkter/mus.jpg" },
  { id: 3, navn: "Ram", pris: 1600, kategori: "PC-komponenter", stock: 11, stars: 4, featured: true, bilde: "bilder/produkter/ram.jpg" },
  { id: 4, navn: "Skjerm", pris: 1600, kategori: "Skjermer", stock: 11, stars: 3, featured: false, bilde: "bilder/produkter/skjerm.jpg" },
  { id: 5, navn: "Tastatur", pris: 1600, kategori: "Tastatur og mus", stock: 11, stars: 4, featured: false, bilde: "bilder/produkter/tastatur.jpg" },
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

function slett_alt() {
  handlekurv = [];
  save_kurv();
  vis_kurv();
  opptater();
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

    const stars = "★".repeat(produkt.stars) + "☆".repeat(5 - produkt.stars);

    return `
      <article class="Produkt vare">
        <div class="image-frame">
          <img class="bilde" src="${produkt.bilde}" alt="${produkt.navn}">
        </div>
        <p class="ting">${produkt.kategori}</p>
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
  const stars = "★".repeat(produkt.stars) + "☆".repeat(5 - produkt.stars);

  return `
    <div class="Produkt">
      <div class="image-frame">
        <img src="${produkt.bilde}" alt="${produkt.navn}">
      </div>
      <p class="ting">${produkt.kategori}</p>
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

function visProdukter(liste) {
  const productsContainer = document.getElementById("produktContainer");
  if (!productsContainer) {
    return;
  }

  if (liste.length === 0) {
    productsContainer.innerHTML = '<p class="ingen-treff">Ingen produkter funnet.</p>';
    return;
  }

  productsContainer.innerHTML = liste.map((produkt) => byggProduktKort(produkt)).join("");
}

function initProdukter() {
  const productsContainer = document.getElementById("produktContainer");
  const sokefelt = document.getElementById("sokefelt");
  if (!productsContainer) {
    return;
  }

  const kategoriKnapper = document.querySelectorAll(".typebuttons");
  let valgtKategori = "";

  kategoriKnapper.forEach((knapp) => {
    knapp.addEventListener("click", () => {
      const kategori = knapp.dataset.kategori;

      if (valgtKategori === kategori) {
        valgtKategori = "";
        knapp.setAttribute("aria-pressed", "false");
        visProdukter(produkter);
      } else {
        valgtKategori = kategori;
        kategoriKnapper.forEach((kategoriKnapp) => {
          kategoriKnapp.setAttribute("aria-pressed", String(kategoriKnapp === knapp));
        });
        const filtrerteProdukter = produkter.filter(
          (produkt) => produkt.kategori === kategori
        );
        visProdukter(filtrerteProdukter);
      }
    });
  });

  visProdukter(produkter);

  productsContainer.addEventListener("click", (event) => {
    const knapp = event.target.closest("[data-legg-i-handlekurv]");
    if (!knapp || !productsContainer.contains(knapp)) {
      return;
    }

    leggtil_kruv(knapp.dataset.leggIHandlekurv);
    knapp.textContent = "Lagt i handlekurven";
  });

  if (sokefelt) {
    sokefelt.addEventListener("input", () => {
      const sok = sokefelt.value.trim().toLocaleLowerCase("nb-NO");
      const resultat = produkter.filter((produkt) =>
        `${produkt.navn} ${produkt.kategori}`.toLocaleLowerCase("nb-NO").includes(sok)
      );

      visProdukter(resultat);
    });
  }
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