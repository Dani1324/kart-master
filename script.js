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

// Mobile optimization
const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

if (width > 1025) {
  $("#mobile").css("display", "none");
  $("#desktop").css("display", "block");
}
else {
  $("#desktop").css("display", "none");
  $("#mobile").css("display", "block");
}

// Menu
$( document ).ready(function() {
  $( "#header-control-right" ).on('click', function() {
      $(".menu").css("right", "-80%");
    });
});

$( document ).ready(function() {
  $( "#menu-close" ).on('click', function() {
      $(".menu").css("right", "-100%");
    });
});
