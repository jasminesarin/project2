// Initialize and add the map
function initMap() {
  // The location of ID
  const position = { lat: 41.8369733, lng: -87.6282752 };
  // Request needed libraries.
  //@ts-ignore
  //const { Map } = await google.maps.importLibrary("maps");
  //const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at ID
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
   });

  // The marker, positioned at ID
  const iconImage= 'media/icon.png'  
  let marker= google.maps.Marker;
  marker = new google.maps.Marker({
    map:map,
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
