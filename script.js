var loader = document.getElementsByClassName("bm");
                    
function loadBMAnimation(loader) {
  var animation = bodymovin.loadAnimation({
    container: loader,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "https://gist.githubusercontent.com/guaard/f6acabe23755224c0ecfcbc898e8ba2c/raw/0c1b7e4fb441c2925a177d5003494689a30ff240/intro2.json"
  });
}

for (var i = 0; i < loader.length; i++) {
  loadBMAnimation(loader[i]);
}


var slideIndex = 0;
showSlides();
var slides,dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 8000); 
}

function plusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function currentSlide(index) {
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
}

document.getElementById("navbar").addEventListener("click", () => {

  const topbar = document.getElementById("topbar");
  
  if(topbar.style.display === "none"){
      topbar.style.display="block";
  }else{
      topbar.style.display="none";
  }
})

  /* Animate scroll */


$(document).ready(function() {
  $('.js--wp-1').waypoint(function(){
    $('.js--wp-1').addClass('animated fadeIn'); 
}, {
    offset: '50%'
});

  $('.js--wp-slide').waypoint(function(){
    $('.js--wp-slide').addClass('animated fadeIn'); 
}, {
    offset: '80%'
});

  $('.js--wp-copy').waypoint(function(){
    $('.js--wp-copy').addClass('animated fadeInUp'); 
}, {
    offset: '100%'
});

$('.js--wp-2').waypoint(function(){
 $('.js--wp-2').addClass('animated fadeInRight'); 
}, {
 offset: '50%'
});

$('.js--wp-3').waypoint(function(){
 $('.js--wp-3').addClass('animated fadeInLeft'); 
}, {
 offset: '50%'
});

$('.js--wp-footerright').waypoint(function(){
 $('.js--wp-footerright').addClass('animated fadeInRight'); 
}, {
 offset: '70%'
});

$('.js--wp-footerleft').waypoint(function(){
 $('.js--wp-footerleft').addClass('animated fadeInLeft'); 
}, {
 offset: '70%'
});

$('.js--wp-25').waypoint(function(){
 $('.js--wp-25').addClass('animated fadeInRight'); 
}, {
 offset: '50%'
});

$('.js--wp-35').waypoint(function(){
 $('.js--wp-35').addClass('animated fadeInLeft'); 
}, {
 offset: '50%'
});

$('.js--wp-4').waypoint(function(){
 $('.js--wp-4').addClass('animated swing'); 
}, {
 offset: '100%'
});

$('.js--wp-5').waypoint(function(){
 $('.js--wp-5').addClass('animated pulse'); 
}, {
 offset: '70%'
});

$('.js--wp-projects1').waypoint(function(){
 $('.js--wp-projects1').addClass('animated fadeInUp'); 
}, {
 offset: '80%'
});

$('.js--wp-projects2').waypoint(function(){
 $('.js--wp-projects2').addClass('animated fadeInUp'); 
}, {
 offset: '50%'
});

});

