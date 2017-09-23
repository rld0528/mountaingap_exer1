'use strict';

angular.module('mbta').
	component('mbta',{
		templateUrl:'components/mbta/mbta-template.html',
		controller: function ProjectListController($http){
		   var self = this;

		    $http.get('http://realtime.mbta.com/developer/api/v2/routesbystop?api_key=wX9NwuHnZU2ToO7GmGR9uw&stop=place-bbsta&format=json').then(function(response) {
       			 self.mbtaRes = response.data;
    	  	});
		    
		}
	});