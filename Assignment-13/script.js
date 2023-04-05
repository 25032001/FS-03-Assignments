let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

function currentSlide(index) {
  slideIndex = index;
  showSlides();
}
function plusSlides(step) {
  if (step < 0) {
    slideIndex -= 2;

    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  }
}
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(showSlides, 3000); 
}
let timeleft = 10;
let timer = document.getElementById("Timer");
let downloadTimer = setInterval(() => {
  timeleft--;
  timer.innerHTML = `<h2>Wait for</h2> 
                        <h2>${timeleft}</h2>
                      <h4>Loading...</h4>`;
  if (timeleft <= 0) clearInterval(downloadTimer);
}, 1000);
setInterval(() => {
  timer.remove();
  showSlides();
}, 10000);
