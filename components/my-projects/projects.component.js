'use strict';

angular.module('myProjects').
	component('myProjects',{
		templateUrl:'components/my-projects/projects-template.html',
		controller: function ProjectListController(){
			this.projList = [
				{
					name:"iTEST",
					desc:"Interactive Training Evaluation Tool is a versatile computer based assessment tool for evaluating the knowledge and understanding of personnel in any particular subject, of combination of subjects relevant to a specific job function.",
					img:"img/2.jpg"
				},
				{
					name:"iTEST Facility",
					desc:"A facility to manage the users and exams needed for iTEST. Test results are stored here for easy access and report generation.",
					img:"img/5.jpg"
				},
				{
					name:"Computer Based Training",
					desc:"Programs for Maritime Industries that support practical training exercises, whether conducted in a training facility or on board ship, and are designed so that they can be used by instructors as teaching/learning aids, or by individuals as self-paced learning tools.",
					img:"img/6.jpg"
				},
				{
					name:"Pitch Race",
					desc:"An educational music game for grade school students. Use your favorite instrument to control your car to victory.",
					img:"img/1.jpg"
				},
				{
					name:"Tone Defender",
					desc:"Just like pitch race this is an educational music game. A music instrument is needed to control your battleship in defending the galaxy against out of tune enemies.",
					img:"img/3.jpg"
				},
				{
					name:"Grade School Music Tests",
					desc:"A compilation of small music exams that evaluates the students knowledge after a related lesson.",
					img:"img/4.jpg"
				}
			];

			this.str = "str to buuuyyy";
		}
	});