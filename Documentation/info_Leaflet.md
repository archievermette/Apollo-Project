- SOURCE : [https://leafletjs.com]
- Tutorials : https://leafletjs.com/examples.html 
- Quick Start : https://leafletjs.com/examples/quick-start/ 
- API Documentation : https://leafletjs.com/reference.html 

*******

Preparing your page
Before writing any code for the map, you need to do the following preparation steps on your page:

Include Leaflet CSS file in the head section of your document:

 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
Include Leaflet JavaScript file after Leaflet’s CSS:

 <!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
Put a div element with a certain id where you want your map to be:

 <div id="map"></div>
Make sure the map container has a defined height, for example by setting it in CSS:

#map { height: 180px; }
Now you’re ready to initialize the map and do some stuff with it.





