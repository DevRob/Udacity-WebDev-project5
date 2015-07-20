$(function(){

  var data = {
     userLocation: [37.4184, 22.0880],
     targetLocation: {},
     targetRadius: 1000,
     TypeOfInterest: ['food', 'service', 'libraries']
   };

   var worker = {
     getUserLocation: function() {
       var startPos;
       var geoOptions = {
          timeout: 10 * 1000
       };
       var geoSuccess = function(position) {
         var pos = [position.coords.latitude, position.coords.longitude];
         view.init(pos);
         worker.detailedResult(pos);
       };
       var geoError = function(error) {
         alert('Error occurred. Error code: ' + error.code);
         // error.code can be:
         //   0: unknown error
         //   1: permission denied
         //   2: position unavailable (error response from location provider)
         //   3: timed out
       };
       navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
     },
     /*
      autocomplete search field
     */
     autoComplete: function() {
       var address = (document.getElementById('my-address'));
       var autocomplete = new google.maps.places.Autocomplete(address);
       autocomplete.setTypes(['geocode']);
       google.maps.event.addListener(autocomplete, 'place_changed',
       function() {
           var place = autocomplete.getPlace();
           if (!place.geometry) {
               return;
           }

       var address = '';
         if (place.address_components) {
             address = [
                 (place.address_components[0] && place.address_components[0].short_name || ''),
                 (place.address_components[1] && place.address_components[1].short_name || ''),
                 (place.address_components[2] && place.address_components[2].short_name || '')
                 ].join(' ');
         }
      });
     },

     codeAddress: function() {
       geocoder = new google.maps.Geocoder();
       var address = document.getElementById("my-address").value;
       geocoder.geocode( { 'address': address}, function(results, status) {
         if (status == google.maps.GeocoderStatus.OK) {
           alert(result);
           //return result;
         }

         else {
           alert("Geocode was not successful for the following reason: " + status);
         }
       });
     },

     detailedResult: function(pos) {
       var map, placesList;
       var request = {
         location: pos,
         radius: 1000,
         types: ['store']
       };

       placesList = document.getElementById('places');

       var service = new google.maps.places.PlacesService(map);
       service.nearbySearch(request, callback);
       function callback(results, status, pagination) {
         if (status != google.maps.places.PlacesServiceStatus.OK) {
         return;
          } else {
            createMarkers(results);

        if (pagination.hasNextPage) {
           var moreButton = document.getElementById('more');

           moreButton.disabled = false;

           google.maps.event.addDomListenerOnce(moreButton, 'click',
               function() {
             moreButton.disabled = true;
             pagination.nextPage();
           });
         }
       }
     }

     function createMarkers(places) {
       var bounds = new google.maps.LatLngBounds();

       for (var i = 0, place; place = places[i]; i++) {
         var image = {
           url: place.icon,
           size: new google.maps.Size(71, 71),
           origin: new google.maps.Point(0, 0),
           anchor: new google.maps.Point(17, 34),
           scaledSize: new google.maps.Size(25, 25)
         };

         var marker = new google.maps.Marker({
           map: map,
           icon: image,
           title: place.name,
           position: place.geometry.location
         });

         placesList.innerHTML += '<li>' + place.name + '</li>';

         bounds.extend(place.geometry.location);
       }
       map.fitBounds(bounds);
     }

     }
   };

   var view = {
     init: function(mapCenter) {
       worker.autoComplete();
       var map;
       var infowindow;

       function initialize(mapCenter) {
         var pyrmont = new google.maps.LatLng(mapCenter[0], mapCenter[1]);

         map = new google.maps.Map(document.getElementById('map-canvas'), {
           center: pyrmont,
           zoom: 15
         });

         var request = {
           location: pyrmont,
           radius: 1000,
           types: ['store']
         };

         infowindow = new google.maps.InfoWindow();
         var service = new google.maps.places.PlacesService(map);
         service.nearbySearch(request, callback);
       }

       function callback(results, status) {
         if (status == google.maps.places.PlacesServiceStatus.OK) {
           for (var i = 0; i < results.length; i++) {
             createMarker(results[i]);
           }
         }
       }

       function createMarker(place) {
         var placeLoc = place.geometry.location;
         var marker = new google.maps.Marker({
           map: map,
           position: place.geometry.location
         });

         google.maps.event.addListener(marker, 'click', function() {
           infowindow.setContent(place.name);
           infowindow.open(map, this);
         });
        }
        google.maps.event.addDomListener(window, 'load', initialize(mapCenter));
     },

     render: function() {
       view.init(data.userLocation);
     }
   }
   worker.getUserLocation();
});
