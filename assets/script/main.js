let interaction1 = document.querySelector('a:nth-of-type(1)')
let interaction2 = document.querySelector('a:nth-of-type(2)')
let interaction3 = document.querySelector('a:nth-of-type(3)')
let interaction4 = document.querySelector('a:nth-of-type(4)')
let interaction5 = document.querySelector('a:nth-of-type(5)')
let interaction6 = document.querySelector('a:nth-of-type(6)')
let interaction7 = document.querySelector('a:nth-of-type(7)')
let interaction8 = document.querySelector('a:nth-of-type(8)')
let interaction9 = document.querySelector('a:nth-of-type(9)')
let interaction10 = document.querySelector('a:nth-of-type(12)')

// interaction 1
interaction1.addEventListener('dblclick', colorChange)

function colorChange() {
  interaction1.classList.toggle('hover1')
}

// interaction 2
interaction2.addEventListener('keydown', shaker)

function shaker() {
  interaction2.classList.toggle('shake')
}

// interaction 3
interaction3.addEventListener('mouseenter', enter)

function enter() {
  interaction3.classList.toggle('hover2')
}

// interaction 4
interaction4.addEventListener('mouseleave', leave)

function leave() {
  interaction4.classList.toggle('hover2')
}

// interaction 5
interaction5.addEventListener('pointerenter', move)

function move() {
  interaction5.classList.toggle('hover2')
}

// interaction 6
interaction6.addEventListener("focus", focuss);

function focuss() {
  interaction6.classList.toggle("zoom");
}

// interaction 7
interaction7.addEventListener("mouseover", over);

function over() {
  interaction7.classList.toggle("zoom");
}

// interaction 8
document.addEventListener("keydown", function (event) {
  if (event.key === "f") {
    FlyHandler();
  }
});
interaction8.addEventListener("animationend", FlyHandler);

function FlyHandler() {
  interaction8.classList.toggle("fly");
}

// interaction 9
interaction9.addEventListener("click", focuss);

function focuss() {
  interaction9.classList.toggle("hover1");
}

// interaction 10
interaction10.addEventListener('click', jumpHandler)
interaction10.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction10.classList.toggle('jump')
}