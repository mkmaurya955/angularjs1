var myApp=angular.module("myModule", []);
myApp.controller("myController", function($scope){
	var employees=[
	{name:'Manish',gender:'male',salary:'3999'},
	{name:'due',gender:'xsx',salary:'3999'},
	{name:'poed',gender:'maxdsle',salary:'3999'},
	{name:'xsks',gender:'sdfedf',salary:'3999'}
	];


	$scope.employees=employees;
});