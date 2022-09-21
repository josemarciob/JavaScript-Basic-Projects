const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f12345

//Selectors
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const title = document.querySelector('.title')
const links = document.querySelector('.link')


//Events
btn.addEventListener('click', function() {
  //Está função faz um loop para pegar números de uma função que pega números aleatórios e acrescenta a váriavel para formar um código de cor hexadecimal, mudando o conteúdo de texto, e o estilo de background do body.
  let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];  
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    title.style.color = hexColor
    links.style.color = hexColor
});

//Functions
function getRandomNumber() {
   //Recebe números aleatório do tamanho do array hex;
  return Math.floor(Math.random() * hex.length)
}