$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){

		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});

const slides = document.querySelectorAll('.slide');

const prevBtn = document.querySelector('.icon-chevron-thin-left');
const nextBtn = document.querySelector('.icon-chevron-thin-right');


/*
slides.forEach (function (slide, index) {
	slides.style.left = `${index * 100}%`;
  }); */






let currentSlide = 0;
//la slide que je veux voir apparaître
function showSlide(index) {
	slides.forEach((slide, i) => {
		if (i === index) {
			slide.classList.add('active');
		} 
	
		else {
			slide.classList.remove('active');
		} 
	});
}

prevBtn.addEventListener ('click',function prevSlide() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	showSlide(currentSlide);
});

  nextBtn.addEventListener ('click', 
  function nextSlide() {
	  currentSlide = (currentSlide + 1) % slides.length;
	  showSlide(currentSlide);
  
  });
function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	showSlide(currentSlide);
}



// document.getElementById('prevButton').addEventListener('click', prevSlide);
// document.getElementById('nextButton').addEventListener('click', nextSlide);

showSlide(currentSlide);