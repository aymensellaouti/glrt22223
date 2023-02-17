/* 
 1- Sélectionner l'ampoule
 2- Interval chaque 1s
    1- Toggle (on)
    2- Toggle (off)
*/

/**
 * Cette fonction permet de toggles les classes à l'element
 * chaque timer secondes
 *
 * @param element l'element cible
 * @param timer le nombre de millisecondes
 * @param classes: les classes css à toggler
 *
 */
function toggle(element, timer, ...classes) {
  element.classList.add(classes[0]);
  setInterval(() => {
    classes.forEach((classe) => {
      element.classList.toggle(classe);
    });
  }, timer);
}

const ampoule = document.querySelector(".ampoule");
toggle(ampoule, 1000, "on", "off");
/* ***************** */
const regions = [
  "Djerba",
  "Tunis",
  "Tataouin",
  "Sfax",
  "Jendouba",
  "Gafsa",
  "Monastir",
  "kef",
];

const olRegions = document.querySelector(".regions");

let i = 0;
setInterval(() => {
  if (i == regions.length) {
    i = 0;
    olRegions.innerHTML = "";
  } else {
    olRegions.innerHTML += `<li>${regions[i++]}</li>`;
  }
}, 1000);

function createImage(src, height = 150, width = 150, alt = "404") {
  const image = document.createElement("img");
  image.src = src;
  image.width = width;
  image.height = height;
  image.alt = alt;
  return image;
}

const container = document.querySelector('.container');
container.insertBefore(
    createImage('assets/images/tree.png'),
    container.firstChild
)