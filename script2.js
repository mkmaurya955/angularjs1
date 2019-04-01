var myApp=angular.module("myModule",[]);
myApp.controller("myController",function ($scope) {
	var technologies=[
	{Name:"Python",Likes:0,Dislikes:0},
	{Name:"Java",Likes:0,Dislikes:0},
	{Name:"Angular",Likes:0,Dislikes:0},
	{Name:"NodeJS",Likes:0,Dislikes:0},
	{Name:"Php",Likes:0,Dislikes:0},
	];

	$scope.technologies=technologies;

	$scope.incrementLikes=function(technology){
		technology.Likes++;
	}
	$scope.incrementDislikes=function(technology){
		technology.Dislikes++;
	}

});