
		$(document).ready(function(){
    			$(".header_content_4").click(function(){
       		 $(".panel").slideToggle("slow");
    		});
		});


function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(19.182755, 72.840157), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}