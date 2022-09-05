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
const latlngs = [                                          
    [48.863368120198004, 2.3509079846928516],
    [48.86933262048345, 2.3542531602919805],
    [48.87199261164275, 2.3400569901592183],
    [48.86993336274516, 2.3280142476578813],
    [48.86834104280146, 2.330308418109664]
]
const polygon = L.polygon(latlngs, {color: 'blue', fill: false}).addTo(myMap);

// create red pin marker


// metro station markers



