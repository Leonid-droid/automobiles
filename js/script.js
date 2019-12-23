var img = document.querySelectorAll('div.car img')
var car = document.querySelectorAll('div.car')
var p = document.querySelectorAll('div.car > p > span')
var title = document.querySelector('h2#title')

function changeTitle(){
    title.textContent = 'ЛАДА'
}
title.addEventListener('mouseenter', changeTitle)

function changeImg(){
    img[0].setAttribute('src', 'img/auto/lada-vesta.png')
    linckUp()
}
img[0].addEventListener('click', changeImg)

// p[1].textContent = '$ 2990'
// var easy = document.querySelectorAll('div.car > p')
// easy[0].classList.remove('carDescr')

function linckUp() {
   var linck = document.querySelectorAll('div.car > h3 > a')
for (let index = 0; index < linck.length; index++) {
    linck[index].classList.add('linck')    
} 
}

function linckDown() {
    var linck = document.querySelectorAll('div.car > h3 > a')
 for (let index = 0; index < linck.length; index++) {
     linck[index].classList.remove('linck')    
 } 
 }

//linckUp()//Вызов функции linckUp()
//linckDown()//Вызов функции linckDoun()
//linck[0].classList.add('linck')

console.log(img);
// console.log(img[2]);
// console.log(car[2]);
// console.log(p[1]);
//console.log(easy)
console.log(title);

var li = document.querySelectorAll('ul#menu > li > a')
li[0].classList.add('linck')

console.log(li);




