var myApp=angular.module("myModule",[]);
myApp.controller("myController",function($scope){
	var employees=[
	{Name:'Manish Maurya',Dateofbirth:new Date("01/10/1994"), Gender:'Male', Salary:"15000"},
	{Name:'himesh Maurya',Dateofbirth:new Date("01/10/1994"), Gender:'Male', Salary:"3847"},
	{Name:'roshan Maurya',Dateofbirth:new Date("01/10/1994"), Gender:'Male', Salary:"1212"},
	{Name:'Zoya Maurya',Dateofbirth:new Date("01/10/1994"), Gender:'Female', Salary:"9098"},
	{Name:'Abhi Maurya',Dateofbirth:new Date("01/10/1994"), Gender:'Male', Salary:"87364"},
	];

	$scope.employees=employees;
	$scope.sortColumn='Name';
});