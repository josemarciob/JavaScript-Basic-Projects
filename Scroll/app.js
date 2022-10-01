// Element.getBoundingClientRect() O método retorna o tamanho de um elemento e sua posição em relação à viewport.
// pageYOffset é uma propriedade de janela somente leitura que retorna o número de pixels em que o documento foi rolado verticalmente.
// slice extrai uma seção de uma string sem modificar a string original
//offsetTop - Um Número, representando a posição superior do elemento, em pixels

// ********** set date ************
const date = document.querySelector('.date')
date.innerHTML = new Date().getFullYear()
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function () {
  //linksContainer.classList.toggle('show-links')
  //Caso Adicione mais links na navegação, tornará a altura proporcional ao tamanho dos links contidos;
  const containerHeight = linksContainer.getBoundingClientRect().height
  const linksHeight = links.getBoundingClientRect().height

  //Deixar nos styles.css como 'height: auto !important;' na media, se não ele deixara o estilo em linha como principal, para que ao voltar a um tamanho de tela maior, não bug a altura dos elementos;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0
  }
})

// ********** fixed navbar | Top Link ************
const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset //window.scrollY
  console.log(scrollHeight)
  const navHeight = navbar.getBoundingClientRect().height

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav')
  } else {
    navbar.classList.remove('fixed-nav')
  }

  //toplink
  if (scrollHeight > navHeight * 2) {
    topLink.classList.add('show-link')
  } else {
    topLink.classList.remove('show-link')
  }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    // prevent default
    e.preventDefault()
    // navega para um spot específico
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)

    const navHeight = navbar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navbar.classList.contains('fixed-nav')
    let position = element.offsetTop - navHeight

    if (!fixedNav) {
      position = position - navHeight
    }
    if (navHeight > 82) {
      position = position + containerHeight
    }

    window.scrollTo({
      left: 0,
      top: position
    })
    // close
    linksContainer.style.height = 0
  })
})
