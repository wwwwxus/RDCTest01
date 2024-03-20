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
