'use strict';

angular.module('skills').
	component('skills',{
		templateUrl:'components/skills/skills-template.html',
		controller: function ProjectListController(){
			this.skillSet = [
				{
					name:"angularJS",
					perc:80
				},
				{
					name:"jQuery / JS",
					perc:90
				},
				{
					name:"nodeJS",
					perc:85
				},
				{
					name:"JAVA",
					perc:75
				},
				{
					name:"HTML",
					perc:90
				},
				{
					name:"Flex",
					perc:90
				},
				{
					name:"Animate CC",
					perc:90
				},
				{
					name:"PHP",
					perc:86
				},
				{
					name:"MySQL",
					perc:86
				}
			];

			this.offLineSkills = [
				{
					name:"AS2 / AS3",
					perc:92
				},
				{
					name:"Lingo",
					perc:92
				}
			];	
		}
	});