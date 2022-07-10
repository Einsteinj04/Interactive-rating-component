const buttons = document.querySelectorAll('.btn');
const first = document.getElementById("one");
const submit = document.getElementById('submit')
const home = document.querySelector('#home')
const end = document.querySelector("#end");
const numResult = document.querySelector('span')
window.addEventListener('DOMContentLoaded', () => {
    first.classList.add('star')
})

let stars = [
  document.getElementById("one"),
  document.getElementById("two"),
  document.getElementById("three"),
  document.getElementById("four"),
  document.getElementById("five"),
];
let count = 0
buttons.forEach(buttonsEl => {
    buttonsEl.addEventListener('click', function (element) {
        let valueClicked = element.currentTarget.textContent
        let buttonsToShow = stars.slice(0, valueClicked)
        let buttonsToRemove = stars.slice(valueClicked,);
        if (count < valueClicked) {
            buttonsToShow.forEach(buttonsToShowEl => {
                buttonsToShowEl.classList.add('star');
                count = valueClicked
            })
        } else {
            buttonsToRemove.forEach(buttonsToRemoveEl => {
                buttonsToRemoveEl.classList.remove('star');
                count = valueClicked   
            })
        }
    })
})

 submit.addEventListener('click', function () {
        home.classList.add('hide')
     end.classList.remove('hide')
     end.classList.add('center')
     if (count == 0){ count++}
        numResult.textContent = `${count}`
 })