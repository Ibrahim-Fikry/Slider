var selectedimg = document.querySelectorAll('#containerimg img') //list of image
var fixedbox = document.getElementById('fixedbox')
var innerimg = document.getElementById('innerimg')
var closebtn = document.getElementById('btn-close')
var rightbtn = document.getElementById('btn-right')
var leftbtn = document.getElementById('btn-left')
var imgcontainer = document.getElementById('imgcontainer')
imgcontainer.addEventListener('click', () => {
    fixedbox.classList.replace('d-none', 'd-flex')
})
closebtn.addEventListener('click', () => {
    fixedbox.classList.replace('d-flex', 'd-none')
})
fixedbox.addEventListener('click', () => {
    fixedbox.classList.replace('d-flex', 'd-none')
})