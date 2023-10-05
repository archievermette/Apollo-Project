$( document ).ready(function() {
	

function nav(){
	
	$('.nav-toggle').click(function(){

		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});

//Défilement

document.querySelectorAll('a[href^="#"]').forEach(ancre => {
    ancre.addEventListener('click', function (e) {
        e.preventDefault();
		const targetElement = document.querySelector(this.getAttribute('href'));

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' 
        });
    });
});


// SECTION SLIDER

const prevBtn = document.querySelector('.icon-chevron-thin-left');
const nextBtn = document.querySelector('.icon-chevron-thin-right');
const ulElement = document.querySelector('.banner');
const liElements = ulElement.querySelectorAll('li');

let counter = 0;

 nextBtn.addEventListener ('click', 
  function nextSlide() {
	  counter = (counter + 1) % liElements.length;
	  Slide(counter);
  
  });

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

// SECTION LEAFLET

// Map 
var map = L.map('map').setView([45.55, -73.56], 12);

// Tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker
var marker = L.marker([45.550611, -73.540587]).addTo(map);

