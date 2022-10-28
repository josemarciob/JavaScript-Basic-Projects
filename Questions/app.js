//usando seletores dentro do elemento
//SELECTORS
const questions = document.querySelectorAll('.question')

questions.forEach(function (question) {
  const btn = question.querySelector('.question-btn')
  btn.addEventListener('click', function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-text')
      }
    })
    question.classList.toggle('show-text')
  })
})

// percorrendo o dom
//SELECTORS
/* const btns = document.querySelectorAll('.question-btn')

//EVENTS
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement
    question.classList.toggle('show-text')
  })
})
 */
