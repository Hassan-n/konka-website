// Initialize slide index for the first slideshow
let slideIndex1 = 1;

// Get all elements with class 'slideshow2-container'
const slideShows = document.querySelectorAll('.slideshow2-container');

// Variables to track the current slideshow and its slide index
let slideShow, slideIndex2;

// Initialize the first slideshow
showSlides1(slideIndex1);

// Next/previous controls for the first slideshow
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls for the first slideshow
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

// Function to display slides for the first slideshow
function showSlides1(n) {
  let i;
  let slides1 = document.getElementsByClassName("mySlides1");
  let dots1 = document.getElementsByClassName("dot");
  
  // Reset slide index if it goes out of bounds
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  
  // Hide all slides
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  
  // Remove the 'active' class from all dots
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  
  // Display the current slide and mark its dot as 'active'
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active";
}

// Loop through all slideshow containers
for (let i = 0; i < slideShows.length; i++) {
  // Set the current slideshow
  slideShow = slideShows[i];
  
  // Store the slide index for each slideshow in a data attribute
  slideShow.setAttribute('data-slideIndex', 1);
  
  // Initialize slideIndex2
  slideIndex2 = 1;
  
  // Display the first slide of each slideshow
  showSlides2(1);
}

// Next/previous controls for any slideshow
function plusSlides2(n) {
  // Identify the parent slideshow container using event target
  slideShow = event.target.parentElement;
  slideIndex2 = Number(slideShow.getAttribute('data-slideIndex'));
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls for any slideshow
function currentSlide2(n) {
  // Identify the parent slideshow container using event target
  slideShow = event.target.parentElement.parentElement.parentElement;
  slideIndex2 = Number(slideShow.getAttribute('data-slideIndex'));
  showSlides2(slideIndex2 = n);
}

// Function to display slides for any slideshow
function showSlides2(n) {
  var i;
  var slides = slideShow.getElementsByClassName("mySlides2");
  var dots = slideShow.getElementsByClassName("demo");
  var captionText = slideShow.querySelector(".caption");
  
  // Reset slide index if it goes out of bounds
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove the 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current slide, mark its dot as 'active', and update caption
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
  captionText.innerHTML = dots[slideIndex2-1].alt;
  
  // Remember the slideIndex for this slideshow in a data attribute
  slideShow.setAttribute('data-slideIndex', slideIndex2);
}

// Function to open a popup with a given ID
function openPopup(id) {
  document.getElementById(id).style.display = "block";
}

// Function to close a popup with a given ID
function closePopup(id) {
  document.getElementById(id).style.display = "none";
}
