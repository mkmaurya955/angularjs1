var myApp=angular.module("myModule",[]);
myApp.controller("myController",function ($scope) {
	var employees=[
	{firstName:"Manish",LastName:"Maurya",Gender:"Male",Salary:"10000"},
	{firstName:"Manoj",LastName:"Maurya",Gender:"Male",Salary:"10000"},
	{firstName:"Mohan",LastName:"Yadav",Gender:"Male",Salary:"10000"},
	{firstName:"Madhav",LastName:"Yadav",Gender:"Male",Salary:"10000"},
	{firstName:"Murali",LastName:"Maurya",Gender:"Male",Salary:"10000"}
	];

	//for country which in list
	var countries=[
	{
		Name:"India",
		cities:[
		{Name:"Delhi"},{Name:"Hyderabad"},{Name:"Bangluru"}
		]
	},
	{
		Name:"USA",
		cities:[
		{Name:"Califonia"},{Name:"Washington"},{Name:"DC"}
		]
	},
	{
		Name:"China",
		cities:[
		{Name:"Honkong"},{Name:"Xyanghu"},{Name:"Nehau"}
		]
	}
	];
	$scope.countries=countries;
	$scope.employees=employees;
});