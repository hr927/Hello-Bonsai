let track = document.querySelector(".carousel_track");
let slides = Array.from(track.children);
// console.log(slides);
let dotsNav = document.querySelector(".carousel_nav");
let dots = Array.from(dotsNav.children);

let slideWidth = slides[0].getBoundingClientRect().width;
slides[0].style.left = slideWidth * 0 + "px";
slides[1].style.left = slideWidth * 1 + "px";

dotsNav.addEventListener("click", navigate);

function navigate(event) {
  targetDot = event.target.closest("button");
  //   console.log(targetDot);
  if (!targetDot) {
    return;
  }
  let currentSlide = track.querySelector(".current_slide");
  let currentDot = dotsNav.querySelector(".current_slide");
  let targetIndex = dots.findIndex(function (el) {
    return el === targetDot;
  });
  // console.log(targetIndex);
  let targetSlide = slides[targetIndex];
  moveSlide(track, currentSlide, targetSlide);
  currentDot.classList.remove("current_slide");
  targetDot.classList.add("current_slide");
}

function moveSlide(track, cS, tS) {
  track.style.transform = "translateX(-" + tS.style.left + ")";
  cS.classList.remove("current_slide");
  tS.classList.add("current_slide");
}
