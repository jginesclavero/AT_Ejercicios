jQuery(document).ready(function(){
	var map = L.map('map');
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {  // http://{s}.tile.osm.org/{z}/{x}/{y}.png
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	var popup = L.popup();
	map.setView([40.2838, -3.8215], 15);
	function popUpName(feature, layer) {
		if (feature.properties && feature.properties.Name) {
       	    layer.bindPopup(feature.properties.Name);
		}
	}

	$.getJSON("buildings-urjc.json", function(data) {
		buildingsLayer = L.geoJson(data, {
	    	onEachFeature: popUpName
		}).addTo(map);
	});

});