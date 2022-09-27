// Selecionar modal-btn,modal-overlay,close-btn
// adicionar eventos no modal-btn and close-btn
// quando o usuário clicar em modal-btn add .open-modal em modal-overlay
// quando o usuário clicar em close-btn remove .open-modal para modal-overlay

//SELECTORS
const modalBtn = document.querySelector('.modal-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

//EVENTS
modalBtn.addEventListener('click', function () {
  modalOverlay.classList.add('open-modal')
})

closeBtn.addEventListener('click', function () {
  modalOverlay.classList.remove('open-modal')
})
