let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
};

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


// Get the slider container
const slider = document.querySelector('.slider');

// Get all the slide elements
const slides = slider.querySelectorAll('div');

// Add CSS class on hover
slides.forEach(slide => {
  slide.addEventListener('mouseover', () => {
    slide.classList.add('slide-hovered');
  });

  slide.addEventListener('mouseout', () => {
    slide.classList.remove('slide-hovered');
  });
});
