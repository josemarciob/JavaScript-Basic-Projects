//SELECTORS
const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

//EVENTS
//Ao clicar no botão ele ira mostrar a sidebar e se clicar novamente ira remover, inserindo e removendo a classe;
toggleBtn.addEventListener('click', function () {
  /* console.log(sidebar.classList)
  if (sidebar.classList.contains('show-sidebar')) {
    sidebar.classList.remove('show-sidebar')
  } else {
    sidebar.classList.add('show-sidebar')
  } */

  sidebar.classList.toggle('show-sidebar')
})

//Ao clicar no botão de fechar(X), ele irá fechar a side bar removendo sua classe;
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})
