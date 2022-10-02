//SELECTORS
const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

//EVENTS
about.addEventListener('click', function (e) {
  const id = e.target.dataset.id
  if (id) {
    //remove active dos outros buttons
    btns.forEach(function (btn) {
      btn.classList.remove('active')
      /* Adiciona novamente no elemento que foi clicado */
      e.target.classList.add('active')
    })
    //ocultar outros articles
    articles.forEach(function (article) {
      article.classList.remove('active')
    })
    /* Ativa novamente no elemento que foi clicado pegando o id */
    const element = document.getElementById(id)
    element.classList.add('active')
  }
})
