// create map
const myMap = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 12,
});

// add openstreetmap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 15,
    attribution: '© OpenStreetMap'
}).addTo(myMap);

// create and main add geolocation marker
const marker = L.marker ([48.87007, 2.346453])
marker.addTo(myMap).bindPopup('<p><b>The Hoxton, Paris</b></p>').openPopup()

// draw the 2nd arrondissement


// create red pin marker


// metro station markers



