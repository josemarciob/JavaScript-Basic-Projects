const colors = [
  'green',
  'gray',
  'blue',
  'red',
  'white',
  'rgba(110,1,200)',
  'rgba(133,122,200)',
  '#f15025',
  '#f12365'
]

//Selectors
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const links = document.querySelector('.link')
const title = document.querySelector('.title')


//Events
btn.addEventListener('click', function () {
  //Recebe um número aleatório da função
  const randomNumber = getRandomNumber()
    //muda o estilo da cor de background do body;
    document.body.style.backgroundColor = colors[randomNumber]
    //muda o conteúdo de texto da classe selecionada;
    color.textContent = colors[randomNumber]
    //muda a cord de texto da classe selecionada;
    links.style.color = colors[randomNumber]
    title.style.color = colors[randomNumber]
})


//Functions
function getRandomNumber() {
  //Recebe um número aleatório do tamanho do array de cores;
  return Math.floor(Math.random() * colors.length)
}
