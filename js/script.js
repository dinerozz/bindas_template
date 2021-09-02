const menu = document.querySelector(".header-icon");
const ul = document.querySelector(".header-ul");
const span1 = document.querySelector(".line-1");
const span2 = document.querySelector(".line-2");
const span3 = document.querySelector(".line-3");

menu.addEventListener('click',()=>{
    ul.classList.toggle('active');
    span1.classList.toggle('span1-style');
    span2.classList.toggle('span2-style');
    span3.classList.toggle('span3-style');
})

$(document).ready(function(){
    $("a.nav-link").click(function(){
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top+ "px" // smooth scrolling jquery
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });
});

var slideIndex = 0; // slider auto
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length){
      slideIndex = 1
    }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

