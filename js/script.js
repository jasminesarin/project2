
// Initialize and add the map
let map;

async function initMap() {
  // The location of ID 41.83748488024708, -87.62810353863021
  const position = { lat: 41.837, lng: -87.628 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at ID
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "MAP_ID",
  });

    // The marker, positioned at ID
  const image = "media/icon_ID_2.png";
  const collegeMarker = new google.maps.Marker({
    position: position,
    map: map,
    icon: image,
    title: "ID",
    draggable: true,
    //adding animation to the marker
    animation: google.maps.Animation.DROP,
  });
  
  //adding event listener to animate to the marker
  collegeMarker.addListener("click", toggleBounce);
  
  function toggleBounce(){
  if (collegeMarker.getAnimation() !== null) {
    collegeMarker.setAnimation(null);
  } else {
    collegeMarker.setAnimation(google.maps.Animation.BOUNCE);
  }
  // The marker, positioned at ID
  //const marker = new AdvancedMarkerView({
   // map: map,
   // position: position,
   // title: "ID",
  //});
  }    
}

window.initMap = initMap;
