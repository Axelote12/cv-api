function iniciarMap(){
    var coord = {lat: 26.0510053 ,lng: -98.2630805};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}