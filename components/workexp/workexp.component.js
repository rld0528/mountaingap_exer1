'use strict';

angular.module('workexp').
	component('workexp',{
		templateUrl:'components/workexp/workexp-template.html',
		controller: function WorkListController(){

			this.workExp = [
				{
					job:"Web and Mobile Developer",
					year:"2010 – Present",
					company:"IDESS Interactive Technologies Incorporated",
					compULR:"http://idessinteractive.com/?home=1"
				},
				{	
					job:"Multimedia Programmer",
					year:"2005 – 2010",
					company:"IDESS Interactive Technologies Incorporated",
					compULR:"http://idessinteractive.com/?home=1"
				},
				{
					job:"Software Tester",
					year:"2004 – 2005",
					company:"IDESS Interactive Technologies Incorporated",
					compULR:"http://idessinteractive.com/?home=1"
				}
			];

			this.seminars = [
				{
					title:"Introduction to JAVA",
					year:"March 2008 – April 2008",
					where:"AMA Learning Center – Olongapo City"
				},
				{
					title:"ORACLE 9i",
					year:"September 2007 – December 2007",
					where:"Informatics SM Centerpoint Metro Manila"
				},
				{
					title:"Web Page Designing Techniques",
					year:"January 14, 2004",
					where:"Bar Review Center, San Sebastian College – Recoletos, Manila"
				},
				{
					title:"Internetworking Design Concepts",
					year:"February 4,2004",
					where:"Bar Review Center, San Sebastian College – Recoletos, Manila"
				},
				{
					title:"Web Application Protocol",
					year:"March 2004",
					where:"Subic Seafront, Subic Bay Metropolitan Authority"
				},
				{
					title:"PC Troubleshooting and Maintenance",
					year:"December 10,2003",
					where:"Bar Review Center, San Sebastian College – Recoletos, Manila"
				}
			];
		}
	});