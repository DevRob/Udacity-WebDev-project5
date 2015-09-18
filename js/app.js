"use strict";$(function(){function e(){function e(){var e={center:b,zoom:14,minZoom:3,maxZoom:18,disableDefaultUI:!0};m=new google.maps.Map(document.getElementById("map-canvas"),e),f=new google.maps.InfoWindow({pixelOffset:new google.maps.Size(-23,-10)}),v=new google.maps.StyledMapType(k,{name:"Styled Map"}),m.mapTypes.set("map_style",v),m.setMapTypeId("map_style")}function o(){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){b={lat:e.coords.latitude,lng:e.coords.longitude},m.setCenter(b),t(b)},function(){n(!0,f,m.getCenter())}):n(!1,f,m.getCenter())}function n(e,o,n){t(b)}function t(e){y.places([]);var o=new google.maps.places.PlacesService(m);o.nearbySearch({location:e,radius:y.radius(),type:y.categories()},a)}function a(e,o,n){{var t=new google.maps.LatLngBounds;document.getElementById("places")}if(o===google.maps.places.PlacesServiceStatus.OK){for(var a,i=0;a=e[i];i++)"political"!=a.types[a.types.length-1]&&(y.places.push(a),t.extend(a.geometry.location));s(),m.fitBounds(t)}}function i(){y.places([]);var e=document.getElementById("search-input"),o=new google.maps.places.SearchBox(e);m.addListener("bounds_changed",function(){o.setBounds(m.getBounds()),b=m.getCenter()}),o.addListener("places_changed",function(){y.places(o.getPlaces()),0!=y.places().length&&(1==y.places().length?t(y.places()[0].geometry.location):s())})}function s(){y.markers().forEach(function(e){e.setMap(null)}),y.markers([]),h=new google.maps.LatLngBounds,y.places().forEach(function(e){var o={url:e.icon,size:new google.maps.Size(71,71),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,34),scaledSize:new google.maps.Size(25,25)},n=new google.maps.Marker({map:m,icon:o,title:e.name,animation:google.maps.Animation.DROP,position:e.geometry.location});n.addListener("click",function(){y.markers().forEach(function(e){e.setAnimation(null)}),n.setAnimation(null!==n.getAnimation()?null:google.maps.Animation.BOUNCE)}),y.markers().push(n),google.maps.event.addListener(n,"click",function(){r(e,n),m.setZoom(15)}),e.geometry.viewport?h.union(e.geometry.viewport):h.extend(e.geometry.location)}),m.fitBounds(h)}function r(e,o){var n=new google.maps.places.PlacesService(m);n.getDetails({placeId:e.place_id},function(e,n){n===google.maps.places.PlacesServiceStatus.OK&&(console.log(e),f.setContent('<div style="width: 200px;"><div class="longtext><strong">'+e.name+"</strong></div><hr><span>"+e.formatted_address+'</span><br><span style="color: #4a81ab;">'+l(e)+'</span><br><br><div style="max-height: 150; overflow-y: scroll;"><span>'+c(e)+'</span></div><br><span style="color: #df6d15;">'+p(e)+'</span><br><span id="infoLink">'+g(e)+'</span><br><div class="longtext"><a href="'+d(e)+'" target="_blank">'+d(e)+"<a></div>"+u(e)),f.open(m,o),document.getElementById("infoLink").addEventListener("click",function(){m.setZoom(18),m.panTo(o.position)}),document.getElementById("photoLink").addEventListener("click",function(){$("#photoViewer").show(),$("#close").click(function(){$("#photoViewer").hide()})}),y.placePhotos(e.photos),m.panTo(o.position))})}function l(e){return e.opening_hours?e.opening_hours.weekday_text[w.getDay()-1]:""}function c(e){return e.reviews?e.reviews[0].text:""}function p(e){return e.rating?e.rating:""}function g(e){return e.international_phone_number?e.international_phone_number:'<a href="#">'+e.geometry.location+"<a>"}function d(e){return e.website?e.website:""}function u(e){return e.photos&&e.photos.length>1?'<a id="photoLink" href="#"">photos<a>':'<div id="photoLink"></div>'}var m,f,h,v,y=this,b={lat:53.339821,lng:-6.2362889999999425},w=new Date;y.places=ko.observableArray([]),y.markers=ko.observableArray([]),y.categories=ko.observableArray([]),y.icons=ko.observableArray([{icon:"https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png"},{icon:"https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png"}]),y.radius=ko.observable(1e3),y.switchInfoBox=ko.observable(!0),y.listBoolean=ko.observable(!0),y.placePhotos=ko.observableArray([]),y.formattedType=function(e){var o=e.types[0].replace(/[_-]/g," ");return o.charAt(0).toUpperCase()+o.substr(1,o.length)};var k=[];e(),o(),i(),y.clickMarker=function(e){var o=e.name.toLowerCase();y.markers().forEach(function(e){e.title.toLowerCase()===o&&(google.maps.event.trigger(e,"click"),m.panTo(e.position))})}}function o(e){return document.body.doScroll?document.body.doScroll(e.wheelDelta>0?"left":"right"):(e.wheelDelta||e.detail)>0?document.body.scrollLeft-=10:document.body.scrollLeft+=10,!1}document.body.addEventListener("mousewheel",o),ko.applyBindings(new e),$("[group~=controls]").show(1e3),$("#hide").click(function(){var e="",o=$(this).children("span").attr("class");e="left"===o.slice(29)?o.replace("left","right"):o.replace("right","left"),$(this).siblings("div").animate({width:"toggle"},500),$(this).children("span").attr("class",e)})});