'use strict';

angular.module('mbta').
	component('mbta',{
		templateUrl:'components/mbta/mbta-template.html',
		controller: function ProjectListController($http){
		   var self = this;


		     //GET GEOLOC HERE
  			/*navigator.geolocation.getCurrentPosition(getPos);

  			function getPos(position) {
			    self.lat = position.coords.latitude;
			    self.long = position.coords.longitude;
			}*/
  			$http.get('http://ip-api.com/json').
		    then(function(response) {
       			 self.geoLoc = response.data;
       			 self.lat = response.data.lat;
       			 self.lot = response.data.lon;
       			 /*  $http.get('https://realtime.mbta.com/developer/api/v2/stopsbylocation?api_key=wX9NwuHnZU2ToO7GmGR9uw&lat='+response.data.lat+'&lon='+response.data.lon+'&format=json').
				    then(function(response) {
		       			 self.mbtaRes = response.data;
		    	  	});*/
       		});


		         $http.get('https://realtime.mbta.com/developer/api/v2/stopsbylocation?api_key=wX9NwuHnZU2ToO7GmGR9uw&lat=42.346961&lon=-71.076640&format=json').
				    then(function(response) {
		       			 self.mbtaRes = response.data;
		    	  	});
		    
		    this.stopID = "11384";
		  
    	  	this.selectedItemChanged = function(stopID){
    			$http.get('https://realtime.mbta.com/developer/api/v2/routesbystop?api_key=wX9NwuHnZU2ToO7GmGR9uw&stop='+stopID+'&format=json').
				   then(function(response) {
		       	 	self.stops = response.data;
		    	});

		    	//this.stopID = ('http://realtime.mbta.com/developer/api/v2/routesbystop?api_key=wX9NwuHnZU2ToO7GmGR9uw&stop='+this.stopID+'&format=json');
  			}


		}
	});