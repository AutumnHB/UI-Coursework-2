function myMap() {
    var mapProp= {
        // Creates an interactive google map centered on the middle of Bristol
        center:new google.maps.LatLng(51.454467994499566, -2.587249048979094),
        zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}