Kategorier = [
  "computers-laptops",
  "phones-tablets",
  "pc-components",
  "monitors-displays",
  "gaming-accessories",
  "audio-headphones",
  "keyboards-mice",
  "tvs-home-entertainment",
  "smart-home-iot"
]

Produkter = [
  { id: 1, navn: "Headset", pris: 1600, kategori: Kategorier[5,6], stock: 11, stars: 4 },
  { id: 2, navn: "Mus", pris: 1600, kategori: Kategorier[5,6], stock: 11, stars: 4 },
  { id: 3, navn: "Ram", pris: 1600, kategori: Kategorier[5,6], stock: 11, stars: 4 },
  { id: 4, navn: "Skjerm", pris: 1600, kategori: Kategorier[5,6], stock: 11, stars: 4 },
  { id: 5, navn: "Tastatur", pris: 1600, kategori: Kategorier[5,6], stock: 11, stars: 4 }
]


let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  const slides = document.querySelectorAll(".mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  slides.forEach(slide => {
    slide.style.display = "none";
  });

  slides[slideIndex - 1].style.display = "block";
}