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
    zoom: 16,
    center: position,
    mapId: "MAP_ID",
    
  }); //content box 
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Institute of Design</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Institute of Design</b>, at the Illinois Institute of Technology, " +
    "founded as the New Bauhaus, is a graduate school" +
    "teaching systemic, human-centered design. " +
    "3137 S Federal St, Chicago, IL 60616 </p>" +
    '<p>Attribution: ID, <a href="https://en.wikipedia.org/wiki/IIT_Institute_of_Design">' +
    "https://en.wikipedia.org/wiki/IIT_Institute_of_Design</a></p>" +
    "</div>" +
    "</div>";
  
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "ID",
  });

 //Polygon overlay 
  const polygonCoords = [
    { lat: 41.8394663080058, lng: -87.63006892091917 },
    { lat: 41.8397379108827, lng: -87.62349671028755 },
    { lat: 41.831046046955656, lng: -87.62984613409192 },
    { lat: 41.831076229105406, lng: -87.62327392348134 },
  ];
  // Construct the polygon.
  const collegePolygon = new google.maps.Polygon({
    paths: polygonCoords,
    strokeColor: "#00FF00",
    strokeOpacity: 0.6,
    strokeWeight: 2,
    fillColor: "#00FF00",
    fillOpacity: 0.20,
  });

  collegePolygon.setMap(map);
  
    // The marker, positioned at ID
  const image = "media/icon_ID_2.png";
  const collegeMarker = new google.maps.Marker({
    position: position,
    map: map,
    icon: image,
    title: "ID - MY COLLEGE",
    animation: google.maps.Animation.DROP,
  });
  
    
  map.addListener('click', (mapsMouseEvent) =>  {
    infowindow.open({
    anchor: collegeMarker,
    map,
    });
  });
  
  //Adding a second marker
  const image2 = "media/icon_MTCC.png";
  const mtccMarker = new google.maps.Marker({
    position: { lat: 41.835, lng: -87.625 },
    map: map,
    icon: image2,
    title: "MTCC - COMMONS",
    animation: google.maps.Animation.DROP,
    
  });
   
  ////Adding a third marker
  const image3 = "media/icon_DORM.jpg";
  const dormMarker = new google.maps.Marker({
    position: { lat: 41.833, lng: -87.626 },
    map: map,
    icon: image3,
    title: "DORM - ROWE VILLAGE",
    animation: google.maps.Animation.DROP,
    
  });


////41.8309797118452, -87.62681831845501
//Adding a 4th marker
  const image4 = "media/icon_STARB.png";
  const starMarker = new google.maps.Marker({
    position: { lat: 41.831, lng: -87.626 },
    map: map,
    icon: image4,
    title: "STARBUCKS",
    animation: google.maps.Animation.DROP,
    
  });
  
  //Added biking layer
  const bikeLayer = new google.maps.BicyclingLayer();

  bikeLayer.setMap(map);
}


initMap();
