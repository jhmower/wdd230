
function initializeMap() {
    const mapCenter = { lat: 33.15, lng: -117.35 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: mapCenter,
    });
    const point = new google.maps.Marker({
      position: mapCenter,
      map: map,
    });
}
  
window.initMap = initializeMap;