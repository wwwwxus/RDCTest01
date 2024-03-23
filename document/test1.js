const tip = document.querySelector('.nav .tip')
const bigbox = document.querySelector('.nav .nav_bigbox')
//nav栏左侧导航栏
bigbox.style.display === 'none'
tip.addEventListener('click', function () {
    // console.log(11);
    // console.log(bigbox.style.display)
    //为什么可能为空?
    if (bigbox.style.display === 'none' || bigbox.style.display === '')
        bigbox.style.display = 'block'
    else
        bigbox.style.display = 'none'
})
//右侧蓝条移动
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

// 颜色条变化
const color = document.querySelectorAll('.note10 .color div')
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener('mouseenter', function (e) {
        //排他思想
        if (e.target.tagName === 'DIV') {

            document.querySelector('.color .active').classList.remove('active')

            color[i].classList.add('active')

        }
    })
}

//轮播图效果
const note13right = document.querySelector('.note13 .tip1')
const note13left = document.querySelector('.note13 .tip2')
const note13imgs = document.querySelector('.note13 .Bigbox .IMGS13')
let i = 0
// console.log(i);
note13left.style.display = 'none'
function note13render(){
    //移动大图库
    if(i === 0){
        note13imgs.style.transform = 'translate(0px, 0px)'
        note13left.style.display = 'none'
        note13right.style.display = 'block'
    }
    if(i === 1){
        note13imgs.style.transform = 'translate(-700px, 0px)'
        note13left.style.display = 'block'
        note13right.style.display = 'block'
    }
    if(i === 2){
        note13imgs.style.transform = 'translate(-1400px, 0px)'
        note13left.style.display = 'block'
        note13right.style.display = 'block'
    }
    if(i === 3){
        note13imgs.style.transform = 'translate(-2000px, 0px)'
        note13right.style.display = 'none'
        note13left.style.display = 'block'
    }
}
note13right.addEventListener('click',function(){
    i++
    // console.log(i)
    note13render()
})
note13left.addEventListener('click', function () {
    i--
    // console.log(i)
    note13render()
})

const note27right = document.querySelector('.note27 .tip1')
const note27left = document.querySelector('.note27 .tip2')
const note27imgs = document.querySelector('.note27 .Bigbox .IMGS27')
let k = 0
// console.log(k);
note27left.style.display = 'none'
function note27render() {
    if (k === 0) {
        note27imgs.style.transform = 'translate(0px, 0px)'
        note27left.style.display = 'none'
        note27right.style.display = 'block'
    }
    if (k === 1) {
        note27imgs.style.transform = 'translate(-600px, 0px)'
        note27left.style.display = 'block'
        note27right.style.display = 'block'
    }
    if (k === 2) {
        note27imgs.style.transform = 'translate(-1200px, 0px)'
        note27left.style.display = 'block'
        note27right.style.display = 'none'
    }

}
note27right.addEventListener('click', function () {
    k++
    // console.log(k)
    note27render()
})
note27left.addEventListener('click', function () {
    k--
    // console.log(k)
    note27render()
})

const note28right = document.querySelector('.note28 .tip1')
const note28left = document.querySelector('.note28 .tip2')
const note28imgs = document.querySelector('.note28 .Bigbox .IMGS28')
let j = 0
// console.log(j);
note28left.style.display = 'none'
function note28render() {
    if (j === 0) {
        note28imgs.style.transform = 'translate(0px, 0px)'
        note28left.style.display = 'none'
        note28right.style.display = 'block'
    }
    if (j === 1) {
        note28imgs.style.transform = 'translate(-600px, 0px)'
        note28left.style.display = 'block'
        note28right.style.display = 'block'
    }
    if (j === 2) {
        note28imgs.style.transform = 'translate(-1200px, 0px)'
        note28left.style.display = 'block'
        note28right.style.display = 'none'
    }

}
note28right.addEventListener('click', function () {
    j++
    // console.log(j)
    note28render()
})
note28left.addEventListener('click', function () {
    j--
    // console.log(j)
    note28render()
})