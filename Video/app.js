// MDN
// O evento DOMContentLoaded é acionado quando o documento HTML inicial foi completamente carregado e analisado, sem esperar que as folhas de estilo, imagens e subquadros terminem de carregar.
// O evento load é acionado quando a página inteira é carregada, incluindo todos os recursos dependentes, como folhas de estilo e imagens.

//SELECTORS
const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')
const preloader = document.querySelector('.preloader')

//EVENTS
//preloader
window.addEventListener('load', function () {
  preloader.classList.add('hide-preloader')
})

btn.addEventListener('click', function () {
  if (!btn.classList.contains('slide')) {
    btn.classList.add('slide')
    video.pause()
  } else {
    btn.classList.remove('slide')
    video.play()
  }
})
