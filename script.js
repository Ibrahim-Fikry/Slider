var selectedimg = document.querySelectorAll('#imgcontainer img') //list of image
var imgarr = Array.from(selectedimg)
var fixedbox = document.getElementById('fixedbox')
var innerimg = document.getElementById('innerimg')
var closebtn = document.getElementById('btn-close')
var rightbtn = document.getElementById('btn-right')
var leftbtn = document.getElementById('btn-left')
var fixedboxLayer = document.getElementById('fixedboxLayer')
var imgcontainer = document.getElementById('imgcontainer')
var selectedimgindex = 0

imgcontainer.addEventListener('click', (e) => {

    var clickedimg = e.target
    selectedimgindex = imgarr.indexOf(clickedimg)
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
    selectedimgindex--
    if (selectedimgindex < 0) {
        selectedimgindex = selectedimg.length - 1
    }
    rightliftslider()

})
rightbtn.addEventListener('click', (e) => {

    ++selectedimgindex
    if (selectedimgindex == selectedimg.length) {
        selectedimgindex = 0
    }
    rightliftslider()
})

function rightliftslider() {
    var previmg = selectedimg[selectedimgindex]
    var previmgsrc = previmg.getAttribute('src')
    innerimg.setAttribute('src', previmgsrc)
}