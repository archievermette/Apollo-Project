


const slides = document.querySelectorAll ('.slide');
//incertain de la terminologie des classes
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
function carousel () {
  if (counter = slides.length - 1) {
    nextBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'none';
  }

  if (counter > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
  }
}
*/