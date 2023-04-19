// Initialize and add the map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    position: new google.maps.LatLng{-41.8369733, 87.6282752},
    zoom: 16,
  });

  // The marker, positioned at ID
  const iconImage = "media/icon.png";
  let marker = google.maps.Marker;
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    icon: iconImage,
    animation: google.maps.Animation.DROP,
    position: position,
  });
  marker.addListener("click", toggleBounce);

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}

initMap();
