$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){

		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});

// SECTION SLIDER

const prevBtn = document.querySelector('.icon-chevron-thin-left');
const nextBtn = document.querySelector('.icon-chevron-thin-right');
const ulElement = document.querySelector('.banner');
const liElements = ulElement.querySelectorAll('li');

let counter = 0;

function Slide(index) {
	liElements.forEach((li, i) => {
		if (i === index) {
			li.classList.add('active');
		} 
	
		else {
			li.classList.remove('active');
		} 
	});
}

prevBtn.addEventListener ('click',function prevSlide() {
	counter = (counter - 1 + liElements.length) % liElements.length;
	Slide(counter);
});

  nextBtn.addEventListener ('click', 
  function nextSlide() {
	  counter = (counter + 1) % liElements.length;
	  Slide(counter);
  
  });
function nextSlide() {
	counter = (counter + 1) % liElements.length;
	Slide(counter);
}

// SECTION DÉFILEMENT; 



// SECTION LEAFLET; 