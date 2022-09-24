// classList - mostra/pega todas as classes
// contains - check a lista de classes para uma especifica
// add - add class
// remove - remove class
// toggle - toggles class

//SELECTORS
const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

//EVENTS
//Adiciona e remove a class ao clicar no Button 
navToggle.addEventListener('click', function() {
  /* if(links.classList.contains('show-links')){
    links.classList.remove('show-links')
  }else {
    links.classList.add('show-links');
  } */

  links.classList.toggle('show-links')
})