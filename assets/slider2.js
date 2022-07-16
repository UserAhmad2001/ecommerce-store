var slider2ImagesContainer = document.querySelector('.secondary-slider-images')
var children = slider2ImagesContainer.children

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


