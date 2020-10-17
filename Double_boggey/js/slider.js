
var slides=document.querySelector('.slider-items').children;
var slide=document.querySelector('.slider1-item1s').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var nextSlides=document.querySelector(".right-slide1");
var prevSlides=document.querySelector(".left-slide1");
var totalSlides=slides.length;
var totalSlide=slide.length;
var index=0;

nextSlide.onclick=function () {
    next("next");
}
prevSlide.onclick=function () {
    next("prev");
}

nextSlides.onclick=function () {
    next1("next");
}
prevSlides.onclick=function () {
    next1("prev");
}

function next(direction){

    if(direction=="next"){
        index++;
        if(index==totalSlides){
            index=0;
        }
    }
    else{
        if(index==0){
            index=totalSlides-1;
        }
        else{
            index--;
        }
    }

    for(i=0;i<slides.length;i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");

}


function next1(direction){

    if(direction=="next1"){
        index++;
        if(index==totalSlide){
            index=0;
        }
    }
    else{
        if(index==0){
            index=totalSlide-1;
        }
        else{
            index--;
        }
    }

    for(i=0;i<slide.length;i++){
        slide[i].classList.remove("active");
    }
    slide[index].classList.add("active");

}

