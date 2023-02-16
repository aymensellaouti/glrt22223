/* 
    Sélectionner l'élément
*/

const lampe = document.querySelector(".lampe");
/* toggle(lampe, 1500, "on", "off"); */

lampe.addEventListener('click', () => {
    toggle2(lampe, 'on', 'off');
} );
const regions = ["Djerba", "Sousse", "Kasserine", "Beja", "Tunis"];

let i = 0;
let olContent = "";
const olRegions = document.querySelector("#regions");
setInterval(() => {
  if (regions.length == i) {
    olRegions.innerHTML = "";
    i = 0;
  }
  olRegions.innerHTML += `<li> ${regions[i]} </li>`;
  i++;
}, 1000);
/* 
    boucle t3awed 
    9ali c'est bon

*/

/**
 * Toggle css class of the element each timer
 * @param element: the dom element to toggle
 *
 * */
function toggle(element, timer, class1, class2) {
  setInterval(() => {
    element.classList.toggle(class1);
    element.classList.toggle(class2);
  }, timer);
}
/**
 * Toggle css class of the element 
 * @param element: the dom element to toggle
 *
 * */
function toggle2(element, class1, class2) {
    element.classList.toggle(class1);
    element.classList.toggle(class2);
}

function createImage(src, alt = "404", width = 150, height = 150) {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.width = width;
  image.height = height;
  return image;
}
const body = document.querySelector("body");
const image = createImage("assets/images/tree.png");
setTimeout(() => {
  body.insertBefore(image, body.firstChild);
}, 2000);
