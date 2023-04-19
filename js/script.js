let map;
let infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 41.837, lng: -87.628}, 
    mapTypeId: "terrain",
  });

  // Define the LatLng coordinates for the polygon.
  const rectangleCoords = [
    { lat: 41.839, lng: -87.629 }, 
    { lat: 41.839, lng: -87.623 }, 
    { lat: 41.831, lng: -87.623 }, 
    { lat: 41.830, lng: -87.629 },
  ];
  // Construct the polygon.
  const collegeSquare = new google.maps.Polygon({
    paths: rectangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  collegeSquare.setMap(map);
  // Add a listener for the click event.
  collegeSquare.addListener("click", showArrays);
  infoWindow = new google.maps.InfoWindow();
}

function showArrays(event) {
  // Since this polygon has only one path, we can call getPath() to return the
  // MVCArray of LatLngs.
  // @ts-ignore
  const polygon = this;
  const vertices = polygon.getPath();
  let contentString =
    "<b>College Square polygon</b>" +
    "Clicked location: " +
    event.latLng.lat() +
    "," +
    event.latLng.lng() +
    " ";

  // Iterate over the vertices.
  for (let i = 0; i < vertices.getLength(); i++) {
    const xy = vertices.getAt(i);

    contentString +=
      " " + "Coordinate " + i + ":  " + xy.lat() + "," + xy.lng();
  }

  // Replace the info window's content and position.
  infoWindow.setContent(contentString);
  infoWindow.setPosition(event.latLng);
  infoWindow.open(map);
}

window.initMap = initMap;
