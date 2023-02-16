/* 
    Sélectionner l'élément
*/

const lampe = document.querySelector(".lampe");
toggle(lampe, 1500, 'on', 'off');











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
