(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([32.735624, -117.150860], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([32.731437, -117.150432]).addTo(map);
var circle = L.circle([32.747508, -117.160407], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var circle2 = L.circle([32.748739, -117.132331

], {
    color: 'blue',
    fillColor: '#0000ff',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [32.731437, -117.150432],
    [32.747508, -117.160407],
    [32.748739, -117.132331]
]).addTo(map);
marker.bindPopup("I worked at the San Diego Zoo!").openPopup();
circle.bindPopup("My first apartment was located in this area");
polygon.bindPopup("This is where I spent most of my 20's");

}());