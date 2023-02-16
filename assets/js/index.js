/* 
 1- selectionni el lampe 
 2- Interval chaque seconde
    2-1 toggle(on) toggle(off)
*/
const regions = [
  "Djerba",
  "Sousse",
  "Jendouba",
  "Tataouin",
  "Gabes",
  "Tunis",
  "Gafsa",
];
let i = 0;
const olRegions = document.querySelector(".regions");
setInterval(() => {
  if (i == regions.length) {
    i = 0;
    olRegions.innerHTML = "";
  }
  olRegions.innerHTML += `<li>
    ${regions[i++]}
  </li>`;
}, 1000);
const lampe = document.querySelector(".lampe");

toggle(lampe, 1500, "on", "off");

/**
 * Cette fonction va toggler les classes passées en paramétre
 * @param element: element to toggle
 * @param timer: duration of the interval
 */
function toggle(element, timer, ...classes) {
  setInterval(() => {
    classes.forEach((classe) => {
      element.classList.toggle(classe);
    });
  }, timer);
}

function createImage(src, width = 150, height = 150, alt = "404") {
  const image = document.createElement("img");
  image.src = src;
  image.width = width;
  image.height = height;
  image.alt = alt;
  return image;
}

const body = document.querySelector("body");
setTimeout(() => {
  body.insertBefore(createImage("assets/images/tree.png"), body.firstChild);
}, 2000);
