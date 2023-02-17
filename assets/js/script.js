const ampoule = document.querySelector(".lampe");

/* 
    toggle(ampoule, 1000, "on", "off");
 */

const regions = ["Tunis", "Kef", "Djerba", "gafsa", "sousse"];
const ol = document.querySelector(".regions");
let i = 0;
setInterval(() => {
  if (i == regions.length) {
    i = 0;
    ol.innerHTML = "";
  }
  ol.innerHTML += `<li>${regions[i++]}</li>`
}, 1000);
/**
 * Cette fonction permet d'ajouter et d'enlever
 * des classes chaque timer interval
 *
 * @param element l'element du dom a traiter
 * @param timer le nombre de millisecondes de l'interval
 *
 */
function toggle(element, timer, ...classes) {
  setInterval(() => {
    classes.forEach((classe) => {
      element.classList.toggle(classe);
    });
  }, timer);
}
