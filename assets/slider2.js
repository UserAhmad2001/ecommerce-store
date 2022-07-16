var slider2ImagesContainer = document.querySelector('.secondary-slider-images')
var children = slider2ImagesContainer.children
var clickables = document.querySelectorAll('.clickable')

clickables.forEach(el =>{
    el.addEventListener('click',(e)=>{
        alert('This is just a demo link!')
    })
})



for(var i=0; i<children.length; i++){
    console.log(children[i]);
    var s = children[i].clientWidth
    children[i].style.left = ( (s+75) * i )
}


window.addEventListener('resize',(e)=>{
    for(var i=0; i<children.length; i++){
        console.log(children[i]);
        var s = children[i].clientWidth
        children[i].style.left = ( (s+25) * i )
    }
})


