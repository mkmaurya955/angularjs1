//Create  a module
var myApp=angular.module("myModule",[]);
//creating a controller with mmodule...
myApp.controller("myController", function ($scope) {
	var employee={
		FirstName:"Manish",
		LastName:"Maurya",
		Gender:"MAle"
	};
	var image={
		Name:"India",
		Flag:"india.png"
	};
	$scope.image=image;
	$scope.employee=employee;
	$scope.message="This is Angular Js form....!";
});