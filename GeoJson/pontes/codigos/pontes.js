var pontesCONC = L.geoJson(pontesCONCRETO, {
    onEachFeature: function( features, layer){
             
        layer.bindPopup('<strong>' + features.properties.Name + '<br>' + 'Latitude: ' + features.geometry.coordinates[1] + '<br>' + 'Longitude: ' + features.geometry.coordinates[0]);
    }
});

console.log(pontesCONCRETO);

var pontesMAD = L.geoJson(pontesMAD, {
    onEachFeature: function( features, layer){
              
        layer.bindPopup('<strong>' + features.properties.Name + '<br>' + 'Latitude: ' + features.geometry.coordinates[1] + '<br>' + 'Longitude: ' + features.geometry.coordinates[0])
        {
            
        };
    }
});

var pontes = L.layerGroup([pontesCONC, pontesMAD]);