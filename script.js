var selectedimg = document.querySelectorAll('#containerimg img') //list of image
var fixedbox = document.getElementById('fixedbox')
var innerimg = document.getElementById('innerimg')
var closebtn = document.getElementById('btn-close')
var rightbtn = document.getElementById('btn-right')
var leftbtn = document.getElementById('btn-left')
var fixedboxLayer = document.getElementById('fixedboxLayer')
var imgcontainer = document.getElementById('imgcontainer')
imgcontainer.addEventListener('click', (e) => {

    var clickedimg = e.target
    var clickedimgsrc = clickedimg.getAttribute('src')
    if (clickedimgsrc != null) {

        innerimg.setAttribute('src', clickedimgsrc)
        fixedbox.classList.replace('d-none', 'd-flex')
    }

})
fixedbox.addEventListener('click', (e) => {

    fixedbox.classList.replace('d-flex', 'd-none')
})

fixedboxLayer.addEventListener('click', (e) => {
    e.stopPropagation()
})
closebtn.addEventListener('click', (e) => {

    fixedbox.classList.replace('d-flex', 'd-none')
})
leftbtn.addEventListener('click', (e) => {


})
rightbtn.addEventListener('click', (e) => {


})