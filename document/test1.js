const tip = document.querySelector('.nav .tip')
const bigbox = document.querySelector('.nav .nav_bigbox')
tip.addEventListener('click', function () {
    if (bigbox.style.display === 'none')
        bigbox.style.display = 'block'
    else
        bigbox.style.display = 'none'
})
const rightnav = document.querySelectorAll('.nav_right li')
// console.log(rightnav)
for (let i = 0; i < rightnav.length; i++) {
    rightnav[i].addEventListener('click', function (e) {
        // console.log(11)
        e.preventDefault()
        // console.log(e.target.tagName)
        if (e.target.tagName === 'A') {
            // console.log(11);
            document.querySelector('.nav_right .active').classList.remove('active')
            rightnav[i].classList.add('active')
        }
    })
}
const color = document.querySelectorAll('.note10 .color div')
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener('mouseenter', function (e) {

        if (e.target.tagName === 'DIV') {

            document.querySelector('.color .active').classList.remove('active')

            color[i].classList.add('active')

        }
    })
}
const right = document.querySelector('.note13 .tip1')
const left = document.querySelector('.note13 .tip2')
const imgs = document.querySelector('.note13 .Bigbox .IMGS13')
let i = 0
// console.log(i);
left.style.display = 'none'
function render(){
    if(i === 0){
        imgs.style.transform = 'translate(0px, 0px)'
        left.style.display = 'none'
        right.style.display = 'block'
    }
    if(i === 1){
        imgs.style.transform = 'translate(-700px, 0px)'
        left.style.display = 'block'
        right.style.display = 'block'
    }
    if(i === 2){
        imgs.style.transform = 'translate(-1400px, 0px)'
        left.style.display = 'block'
        right.style.display = 'block'
    }
    if(i === 3){
        imgs.style.transform = 'translate(-2000px, 0px)'
        right.style.display = 'none'
        left.style.display = 'block'
    }
}
right.addEventListener('click',function(){
    i++
    // console.log(i)
    render()
})
left.addEventListener('click', function () {
    i--
    // console.log(i)
    render()
})

