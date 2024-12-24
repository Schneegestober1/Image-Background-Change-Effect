let imgBox = document.querySelector('.img-box')
let imgWrap = document.querySelector('.img-wrap')
let originalImg = document.getElementById('originalImg')
let line = document.getElementById('line')

originalImg.style.width = imgBox.offsetWidth + 'px'
console.log(imgBox.offsetWidth)

let leftSpace = imgBox.offsetLeft
console.log(`Расстояние слева ${leftSpace}`)

imgBox.onmousemove = function(event){
    let boxWidth = (event.pageX - leftSpace) + 'px'
    console.log(`Ширина изображения ${boxWidth} = горизонтальная позиция относительно левого края всей страницы ${event.pageX} - расстояние от слева ${leftSpace}`)
    imgWrap.style.width = boxWidth
    line.style.left = boxWidth
}