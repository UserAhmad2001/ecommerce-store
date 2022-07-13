var sliderImages = 
[
'../images/client-1.jpg',
'../images/client-2.jpg',
'../images/finance_calculator.png',
'../images/movie_trailer.png'
]

// constants and elements
var imagesContainer = document.querySelector('.images')
var counter = document.querySelector('.counter')
var sliderItems = document.querySelectorAll('.img') 
var ind = 0
var sliderMoving = true

// image translate value per slider item
var itv = -100

// functions
function sliderInit(){
    imagesContainer.innerHTML = ""
    for(var i=0; i<sliderImages.length; i++){
        var el = document.createElement('span')
        el.attributes.ind = i
        el.style.left = (i * 100) + '%'
        el.style.width = "100%"
        el.style.background = 'url('+ sliderImages[i] +')'
        el.style.backgroundRepeat = "no-repeat"
        el.style.backgroundSize = 'cover'
        el.style.backgroundPosition = 'center'
        el.style.transition = 'transform 1s ease'
        if(i===0){el.classList.add('activeImg')}
        imagesContainer.append(el)
    }
    for(var i=1; i<sliderImages.length; i++){
        counter.innerHTML += "<span> </span>"
    }
}

function setCounter(ind){
        // images container children
        var icc = imagesContainer.children
        // counter children
        var cc = counter.children
        for(var i=0; i<cc.length; i++){
            cc[i].classList.remove('active')
        }
        cc[ind].classList.add('active')
}
function toggleImage(ind){
    // images container children
    var icc = imagesContainer.children
    for(var i=0; i<icc.length; i++){
        if(icc[i].className === 'activeImg'){
            var translateValue = (ind - i) * itv
            for(var i=0; i<icc.length; i++){
                icc[i].style.transform
                = 'translate('+ translateValue +'%)'
            }

        }
        setCounter(ind)
    }

icc[ind].classList.add('activeImg')
}
function intervalFunc(){
if(sliderMoving){
    if(ind === 4){
        ind = 0
    }
    toggleImage(ind)
    ind++
}
}


// startup
sliderInit()
setInterval(intervalFunc, 2000);



//EVENT LISTERNERS
document.querySelector('.top-slider')
.addEventListener('mouseover',(e)=>{
    sliderMoving = false
})
document.querySelector('.top-slider')
.addEventListener('mouseout',(e)=>{
    sliderMoving = true
})


