function menuFunction(){
    var x = document.getElementById("menu");
    var y = document.getElementById("menuBar");
    if (x.style.display === "block"){
        x.style.display="none";
        y.classList.remove("active")
    }
    else{
        x.style.display="block";
        y.classList.add("active")
    }
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementById("offers").querySelectorAll(".ofr");
  var dots = document.getElementById("offers").querySelectorAll(".dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// var logout = true;
// logout= false;

function goBack() {
  window.history.back();
}


