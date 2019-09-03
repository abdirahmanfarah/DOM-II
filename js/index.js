// Your code goes here

//Mouse Over

let mouseOver = document.querySelectorAll('.nav-link');

mouseOver.forEach(item => {
  item.addEventListener('mouseover', event =>{
    event.target.style.color = 'teal'; 
  })
})

// Mouse Enter

const scaleUp = document.querySelectorAll('.img-content');

scaleUp.forEach(item => {
  item.addEventListener('mouseenter', event =>{
    item.style.transform = 'scale(1.3)';
    item.style.transition = 'transform 0.5s';
  })
})

// Mouse Leave
const scaleDown = document.querySelectorAll('.img-content');

scaleDown.forEach(item => {
  item.addEventListener('mouseleave', event =>{
    item.style.transform = 'scale(1.1)';
    item.style.transition = 'transform 0.5s';
  })
})

// Focus
let focus = document.querySelectorAll('.nav-link');

focus.forEach(item => {
  item.addEventListener('focus', event =>{
    event.target.style.background = 'pink';
  })
})

// Click 

const desti = document.querySelectorAll('.destination');

desti.forEach(item => {
  item.addEventListener('click', e => {
    item.style.backgroundColor = 'blue';
  })
})

// Select

function logSelection(event){
  const log = document.querySelector('.footer');
  const select = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You Selected: ${select}`;

}

const textarea = document.querySelector('textarea');
textarea.onselect = logSelection;

// select.addEventListener('select', event => {
//     event.target.style.color = 'red';
// })

