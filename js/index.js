const menu = document.querySelector(".header__menu");
const toggler = document.querySelector(".header__menu--mobile button");
const carouselWrapper = document.querySelector(".carousel__wrapper");
const images = document.querySelectorAll(".testimonies__images img");
const testimonials = document.querySelectorAll(".carousel__content");
const buttons = document.querySelectorAll(".carousel__navigate--button");

toggler.addEventListener("click", (e) => {
  toggler.classList.toggle("toggle");

  menu.classList.toggle("show");
})


let currentIndex = 0;

setInterval(() => {
  nextSlide();
}, 2500);

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    showImage(index);
    showTestimonial(index);
    showActiveButton(index);

    currentIndex = index;
  })
})

function nextSlide() {
  const nextActive = currentIndex + 1 <= images.length ? currentIndex ++ : currentIndex = 0;

  showImage(nextActive);
  showTestimonial(nextActive);
  showActiveButton(nextActive);
}

function showImage(nextIndex){
  images.forEach(image => image.removeAttribute("data-active"));

  images[nextIndex].setAttribute("data-active", "");
}

function showTestimonial(nextIndex){
  carouselWrapper.style.minHeight = testimonials[nextIndex].clientHeight + 'px';

  testimonials.forEach(testimonial => {
    testimonial.removeAttribute("data-active");
  });

  testimonials[nextIndex].setAttribute("data-active", "");
}

function showActiveButton(nextIndex){
  buttons.forEach(button => button.classList.remove("active"));

  buttons[nextIndex].classList.add("active");
}