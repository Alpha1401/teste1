// menu lateral

var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
  menuItem.forEach((item)=>
    item.classList.remove('ativo')
  )
  this.classList.add('ativo')
}

menuItem.forEach((item)=>
  item.addEventListener('click', selectLink)
)

// expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
  menuSide.classList.toggle('expandir')
})


const menuLateral = document.getElementById("btn-exp");
const sideMenu = document.getElementById("side-menu");
let isMenu = false;

function menuActived() {
  menuLateral.querySelector(".bi").classList.remove("bi-list");
  menuLateral.querySelector(".bi").classList.add("bi-x");
  sideMenu.play();
  isMenu = true;
}

function menuDesactived() {
  menuLateral.querySelector(".bi").classList.add("bi-list");
  menuLateral.querySelector(".bi").classList.remove("bi-x");
  sideMenu.play();
  isMenu = false;
}

function menuDecider() {
  if (isMenu === true) {
    menuDesactived(); // Corrigido para desativar o menu
  } else {
    menuActived(); // Corrigido para ativar o menu
  }
}

menuLateral.addEventListener("click", menuDecider);
