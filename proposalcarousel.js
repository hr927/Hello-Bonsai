let track = document.querySelector(".carousel-track");
let slides = Array.from(track.children);
// console.log(slides);
let nextbtn = document.querySelector(".btn-right");
let prevbtn = document.querySelector(".btn-left");

// console.log(nextbtn, prevbtn);

let slideSize = slides[0].getBoundingClientRect().width;

function setslide(el, i) {
  el.style.left = slideSize * i + "px";
}

slides.forEach(setslide);

function moveSlide(track, cS, tS) {
  track.style.transform = "translateX(-" + tS.style.left + ")";
  cS.classList.remove("current_slide");
  tS.classList.add("current_slide");
}
nextbtn.addEventListener("click", nextSlide);
function nextSlide() {
  let currentSlide = track.querySelector(".current_slide");
  let nextSlide = currentSlide.nextElementSibling;
  moveSlide(track, currentSlide, nextSlide);
}
prevbtn.addEventListener("click", prevSlide);
function prevSlide() {
  let currentSlide = track.querySelector(".current_slide");
  let prevSlide = currentSlide.previousElementSibling;
  moveSlide(track, currentSlide, prevSlide);
}
