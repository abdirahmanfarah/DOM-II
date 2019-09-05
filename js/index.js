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
    item.style.transform = 'scale(2.5)';
    item.style.transition = 'transform 0.5s';
  })
})

// Mouse Leave
const scaleDown = document.querySelectorAll('.img-content');

scaleDown.forEach(item => {
  item.addEventListener('mouseleave', event =>{
    item.style.transform = 'scale(1)';
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

// Re-size
window.addEventListener('resize', event =>{
  const newDoc = document.querySelector('.content-destination');
  newDoc.textContent= "Don't Pick Your Destination!";
  newDoc.style.backgroundColor = 'green';
})

// Load 

window.addEventListener('load', e => {
  console.log('Hello, welcome to Earth!');
});

//Key Down

const key = document.querySelector('.main-navigation');

// key.addEventListener('keydown', event =>{
//   key.style.backgroundColor = ''
// });

let turnBlue = e =>{
  key.style.backgroundColor = 'pink'
}
document.addEventListener('keydown', turnBlue);

// document.getElementsByClassName(".nav-link").style.zIndex = "-1";

//Created New Element

const header = document.querySelector('.intro');
const newInput = document.createElement('input');

newInput.setAttribute('type', 'text');

header.append(newInput);

// Select

let selectParagraph = document.querySelector('.footer p')
let select = document.querySelector('.footer')

function changeColor(event){
 document.body.style.backgroundColor = 'red'

}

// selectParagragraph.addEventListener('select', changeColor);

// Animation 

// const animation = document.querySelector('.btn');

// const applyAnimation = document.querySelectorAll('.btn');

// applyAnimation.forEach(item => {
//   item.addEventListener('click', e => {
//     item.style.backgroundColor = 'green';
//   })
// })

// animation.addEventListener('animationstart', e =>{
//     console.log('Animation Started');
// })

// animation.addEventListener('animationstart', () => {
//   animation.textContent = `'animation started'`;
// });

// const newDoc = document.querySelector('h2.content-destination');

// Select

// const intro = document.querySelector('.intro');
// const input = document.createElement('.input');

// intro.append(input);





