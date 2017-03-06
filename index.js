$(document).ready(function(){
  var topSpots = $.getJSON("topspots.json", function(data){
    for (var i=0; i<data.length; i++){
      var name = data[i].name;
      var description = data[i].description;
      var location = createMapsLink(data[i].location);

      var anchor = createAnchor(location);

      var newTrow = "<tr>" +
                      "<td>" + (i+1) + "</td>" +
                      "<td>" + name + "</td>" +
                      "<td>" + description + "</td>" +
                      "<td>" + anchor + "</td>" +
                    "</tr>";
      $('#placesTable').append(newTrow);
    }
  });

  function createMapsLink(location){
    var latitude = location[0];
    var longitude = location[1];
    return ("https://www.google.com/maps?q=" + latitude + "," + longitude);
  }

  function createAnchor(location){
    return "<a href='" + location + "'>Open in Google Maps!</a>";
  }
});
