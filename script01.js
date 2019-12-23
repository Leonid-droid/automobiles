var header = document.querySelector('div#header')
header.addEventListener('mouseenter', function (event) {
    this.style.backgroundImage = 'url("img/mers_red.png")'
})

var str = 'Просторный универсал, Вместительный лифтбэк, Полноприводный автомобиль, Современный внедорожник'
var arrayAuto = str.split(',')
var strA = 'Lada Vesta, Lada Granta, Lada NIVA, Lada NIVA Shevrolet'
var arrayAutoF = strA.split(',')
console.log(arrayAutoF);

var vesta = document.querySelector('div#vesta > h3 > a')
var granta = document.querySelector('div#granta > h3 > a')
var niva = document.querySelector('div#niva > h3 > a')
var nivaSh = document.querySelector('div#niva_sh > h3 > a')

var arrayAutoName = [vesta, granta, niva, nivaSh]
console.log(arrayAutoName);

for (let index = 0; index < arrayAutoName.length; index++) {
    arrayAutoName[index].addEventListener('mouseenter', function (event) {
        arrayAutoName[index].textContent = arrayAuto[index]
        arrayAutoName[index].classList.add('linck')
    })
    arrayAutoName[index].addEventListener('mouseleave', function (event) {
        arrayAutoName[index].textContent = arrayAutoF[index]
        arrayAutoName[index].classList.remove('linck')
    })
}


document.querySelector('div#wrapper').addEventListener('mouseenter', function (event) {
    //console.log(event.target.tagName);
    if (event.target.tagName === 'SPAN') {
        event.target.classList.add('linck')
    }
}, true)

document.querySelector('div#wrapper').addEventListener('mouseleave', function (event) {
    if (event.target.tagName === 'SPAN') {
        event.target.classList.remove('linck')
    }
}, true)


var autoImg = document.querySelectorAll('div.car > img')
console.log(autoImg);
var autoImgBig = ['img/auto/vesta_un.png', 'img/auto/lada_granta.png', 'img/auto/lada_niva.png', 'img/auto/niva_sh.png']
var autoImgAlt = ['img/auto_alt/lada-vesta.png', 'img/auto_alt/lada-granta-lift-14.png', 'img/auto_alt/niva_bronto.png', 'img/auto_alt/chevrolet_niva.png']

for (let index = 0; index < autoImg.length; index++) {
    autoImg[index].addEventListener('click', function (event) {
        this.setAttribute('src', autoImgAlt[index])
    })
    autoImg[index].addEventListener('mouseleave', function (event) {
        this.setAttribute('src', autoImgBig[index])
    })
}