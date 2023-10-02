$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});



const slides = document.querySelectorAll ('.slide');

const prevBtn = document.querySelector('.icon-chevron-thin-left');
const nextBtn = document.querySelector('.icon-chevron-thin-right');


/*
slides.forEach (function (slide, index) {
	slides.style.left = `${index * 100}%`;
  }); */


let counter = 0;

prevBtn.addEventListener ('click', function () {
	counter--;
	carousel ();
  });

  nextBtn.addEventListener ('click', function () {
	counter++;
	carousel ();
  });

  function carousel(){
	if(counter === slides.length ){
	
	counter = 0
	
	}
	
	if(counter < 0) {
	counter = slides.length -1;
	
	} 

	slides.forEach (function (slide) {

		slide.style.opacity = `1`;
		
	  }); 
	}


/*
const slides = document.querySelector();

modalBtn.addEventListener('click', function(){

    modal.classList.add('open-modal')

})

closeBtn.addEventListener('click', function() {

    modal.classList.remove('open-modal')

})

*/