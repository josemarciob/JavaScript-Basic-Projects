//valor inicial do contador
let count = 0;

//SELECTORS
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//EVENTS
//Faz uma procura em uma nodelist dos elementos que ela contém
btns.forEach(function (btn) {
  //Adiciona um evento de click a esses elementos
  btn.addEventListener('click', function(e) {
    //Pega o alvo clicacado para mudar seu Estilo
    const styles = e.currentTarget.classList;

    //Faz verificações se contém em sua class o valor, aumentar, diminuir ou resetar, mudando o valor do contador
    if(styles.contains("diminuir")){
      count--;
    } else if(styles.contains("aumentar")){
      count++;
    } else {
      count = 0;
    }

    //Faz verificações se o contador é maior, menor ou igual a 0, e altera o estilo de cor do elemento
    if(count > 0) {
      value.style.color = "rgb(0, 255, 34)";
    }
    if(count < 0){
      value.style.color = "red";
    }
    if(count === 0){
      value.style.color = "#222";
    }

    //Traz para o conteúdo de texto do elemento o valor atual do contador;
    value.textContent = count;
  });
});