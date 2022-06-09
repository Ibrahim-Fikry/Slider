//#region   select elements
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
    //#endregion



imgcontainer.addEventListener('click', (e) => {

    var clickedimg = e.target
    selectedimgindex = imgarr.indexOf(clickedimg)
    var clickedimgsrc = clickedimg.getAttribute('src')
    if (clickedimgsrc != null) {

        innerimg.setAttribute('src', clickedimgsrc)
        fixedbox.classList.replace('d-none', 'd-flex')
    }

})

fixedboxLayer.addEventListener('click', (e) => {
    e.stopPropagation()
})
fixedbox.addEventListener('click', closeslid)
closebtn.addEventListener('click', closeslid)
leftbtn.addEventListener('click', getprevslider)
rightbtn.addEventListener('click', getnextslider)

function getnextslider() {
    ++selectedimgindex
    if (selectedimgindex == selectedimg.length) {
        selectedimgindex = 0
    }
    rightliftslider()
}

function getprevslider() {
    selectedimgindex--
    if (selectedimgindex < 0) {
        selectedimgindex = selectedimg.length - 1
    }
    rightliftslider()
}

function rightliftslider() {
    var slidimg = selectedimg[selectedimgindex]
    var slidimgsrc = slidimg.getAttribute('src')
    innerimg.setAttribute('src', slidimgsrc)
}

function closeslid() {
    fixedbox.classList.replace('d-flex', 'd-none')
}
//-----use   ArrowLeft    ArrowRight   spacebar
document.addEventListener('keyup', (e) => {

    if (fixedbox.getAttribute('class').includes("d-flex") == true) {
        if (e.key == "ArrowRight") {
            getnextslider()

        } else if (e.key == "ArrowLeft") {
            getprevslider()

        } else if (e.key == " ") {
            closeslid()
        }
    }

})