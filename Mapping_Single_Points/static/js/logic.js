// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
  center: [
    40.7, -94.5
  ],
  zoom: 4
});

// Assign the variable map to the object L.map(). Instantiate the object with 'mapid'
// The 'mapid' will reference the 'id' tag in the <div> element
// The setView() method sets the view of the map with a geographical center, 
//     where the first coordinate is the latitude and the second is longitude. Set the zoom level to "4" (0-18)

//  Add a marker to the map for Los Angeles, California.
L.circleMarker([34.0522, -118.2437], {
  radius: 300,
  color: "black",
  fillColor: "#ffffa1"
}).addTo(map);

// Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then Add our 'graymap' tile layer to the map.
streets.addTo(map);