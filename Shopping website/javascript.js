
/*CAROUSEL START*/

const images = [
    "Images/Karusell-pic1.png",
    "Images/Karusell-pic2.png",
    "Images/Karusell-pic3.png",
    "Images/Karusell-pic4.png",
    "Images/Karusell-pic1.png",
    "Images/Karusell-pic2.png",
    "Images/Karusell-pic3.png",
    "Images/Karusell-pic4.png"
];

let index = 0;          
const visibleCount = 4;      
const carouselBox = document.getElementById("Carousel-box");

function showImages() {
    let htmlString = "";       

    for(let i = 0; i < visibleCount; i++){
        const imgIndex = (index + i) % images.length;  
        htmlString += '<img src="' + images[imgIndex] + '" alt="Bild ' + (imgIndex + 1) + '">';
    }
    carouselBox.innerHTML = htmlString;
}

/*When you click on the right button*/
document.getElementById("next").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length; 
  showImages();
});

/*When you click on the left button*/
document.getElementById("prev").addEventListener("click", () => {
  index = (index + 1) % images.length; 
  showImages();
});

showImages();



/*CAROUSEL END*/

/*FILTER VERTICAL MENU START*/

document.querySelectorAll("details").forEach(detail => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
     
      setTimeout(() => {
        detail.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  });
});

/*FILTER VERTICAL MENU END*/

/*POPULAR CATEGORIES MENU START*/
    const buttons = document.querySelectorAll(".lower-categories-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      
      button.classList.toggle("clicked");
    });
  });
/*POPULAR CATEGORIES MENU END*/

/*PRODUCT SECTION START*/

const products = [
  { img: "Images/Produkt1.png", subtitle: "Brigther", subsubtitle: "clearing serum 199 kr" },
  { img: "Images/Produkt2.png", subtitle: "Hydramist", subsubtitle: "spray freshner 349 kr" },
  { img: "Images/Produkt3.png", subtitle: "Biolumin", subsubtitle: "eye serum 299 kr" },
  { img: "Images/Produkt4.png", subtitle: "Derma", subsubtitle: "Skin wash 199 kr" },
  { img: "Images/Produkt4.png", subtitle: "Derma", subsubtitle: "Skin wash 199 kr" },
  { img: "Images/Produkt3.png", subtitle: "Biolumin", subsubtitle: "eye serum 299 kr" },
  { img: "Images/Produkt2.png", subtitle: "Hydramist", subsubtitle: "spray freshner 349 kr" },
  { img: "Images/Produkt1.png", subtitle: "Brigther", subsubtitle: "clearing serum 199 kr" }
];

const cardData = Array(10).fill(products).flat(); 

const container = document.getElementById("scrollableproducts");

cardData.forEach(card => {
  const div = document.createElement("div");
  div.className = "card"; 

  const img = document.createElement("img");
  img.src = card.img;

  const sub = document.createElement("div");
  sub.innerText = card.subtitle;

  const subsub = document.createElement("div");
  subsub.innerText = card.subsubtitle;

  div.appendChild(img);
  div.appendChild(sub);
  div.appendChild(subsub);

  container.appendChild(div);
});

/*PRODUCTS SECTION END*/
