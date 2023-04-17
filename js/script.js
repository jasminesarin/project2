// Initialize and add the map
let map;

async function initMap() {
  // The location of Institute of Design, IIT
  const position = { lat: 41.837047066759155, lng: -87.62828512182891 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at ID
  map = new Map(document.getElementById("map"), {
    zoom: 8,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Institute of Design, IIT",
  });
}

initMap();
