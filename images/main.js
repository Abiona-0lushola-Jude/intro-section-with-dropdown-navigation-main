const subMenuOne = document.querySelector('#sub-menu-one')
const subMenuTwo = document.querySelector('#sub-menu-two')
const arrowUp = document.querySelector('.arrowUp')
const arrowDownOne = document.querySelector('.arrowDownOne')
const arrowDownTwo = document.querySelector('.arrowDownTwo')
const menuBtnOn = document.querySelector('.menuOn')
const menuBtnOff = document.querySelector('.menuClose')
const mainClickOne = document.querySelector('#main-menu-one')
const mainClickTwo = document.querySelector('#main-menu-two')
const menu = document.querySelector('.menu')

function menuToggle(){
    menuBtnOff.classList.toggle('open')
    menuBtnOn.classList.toggle('open')
    menu.classList.toggle('open')
}
menuBtnOn.addEventListener('click', menuToggle)
menuBtnOff.addEventListener('click', menuToggle)

function itemOne(){
    subMenuOne.classList.toggle('open')
    arrowDownOne.classList.toggle('open')
    if (mainClickOne.classList.toggle('open') == true){
        mainClickTwo.removeEventListener('click', itemTwo)
    }else{
        mainClickTwo.addEventListener('click', itemTwo)
    }
}
function itemTwo(){
    subMenuTwo.classList.toggle('open')
    arrowDownTwo.classList.toggle('open')
    if (mainClickTwo.classList.toggle('open') == true){
        mainClickOne.removeEventListener('click', itemOne)
    }else{
        mainClickOne.addEventListener('click', itemOne)
    }
}
mainClickOne.addEventListener('click', itemOne)
mainClickTwo.addEventListener('click', itemTwo)
