'use strict';

angular.module('mbta').
	component('mbta',{
		templateUrl:'components/mbta/mbta-template.html',
		controller: function ProjectListController($http){
		   var self = this;

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