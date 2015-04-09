jQuery(document).ready(function(){
	var map = L.map('map');
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {  // http://{s}.tile.osm.org/{z}/{x}/{y}.png
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	var popup = L.popup();
	map.setView([40.2838, -3.8215], 15);
	
	map.locate({setView: true, maxZoom: 16});
	function onLocationFound(e) {
    	var radius = e.accuracy / 2;
    	L.marker(e.latlng).addTo(map).bindPopup("Tu estas a  " + radius + " metros alrededor de este punto").openPopup();
    	L.circle(e.latlng, radius).addTo(map);
	}
	map.on('locationfound', onLocationFound);

});