var myApp=angular.module("myModule", []);
myApp.controller("myController", function($scope){
	var employees=[ 
	{Name:"Manish Maurya", DateOfBirth:new Date("01/10/1994"), Gender:"Male", Salary:"10000"},
	{Name:"Madhav Maurya", DateOfBirth:new Date("01/10/1992"), Gender:"Male", Salary:"10000"},
	{Name:"Mohan Maurya", DateOfBirth:new Date("01/10/1995"), Gender:"Male", Salary:"10000"},
	{Name:"Murali Maurya", DateOfBirth:new Date("01/10/1991"), Gender:"Male", Salary:"10000"},
	{Name:"Manohar Maurya", DateOfBirth:new Date("01/10/1993"), Gender:"Male", Salary:"10000"}
];

	$scope.employees=employees;
	$scope.rowLimit=3;
});