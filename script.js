// AOS animation library
AOS.init({
  offset: 300,
  duration: 1100,
});

// Add smooth scrolling to all links
$("a#ciao").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});

// Header resize
let header = document.getElementsByClassName('.header');
const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
var iOS = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent);

window.addEventListener('scroll', function(){

  if (width > 1025) {
    if(document.documentElement.scrollTop > 50){
      $(".header").css("background-color", "#292829");
      $(".header").css("padding", "1.5vw 0vw");
    }
    else {
      $(".header").css("background-color", "rgba(255, 255, 255, 0)");
      $(".header").css("padding", "2.5vw 0vw");
    }
  }
  else {
    if(document.documentElement.scrollTop > 20){
      $(".header").css("background-color", "rgba(255, 255, 255, 1)");
      $(".header").css("padding", "1.5vh 10vw 1.5vh 10vw");
    }
    else {
      $(".header").css("background-color", "rgba(255, 255, 255, 0)");
      $(".header").css("padding", "2.5vh 10vw 2.5vh 10vw");
    }
  }
})
