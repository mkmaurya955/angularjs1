var myApp=angular.module("myModule", []);
myApp.controller("myController", function($scope,$timeout){
	var words=["chat", "mat", "cat"];
	$scope.incorectLettersChoosen=[];
	$scope.correctLettersChoosen=[];
	$scope.guesses=6;
	$scope.displayWord="";
	$scope.input={
		letter:''
	}

	var selectRandomWord=function(){
		var index=Math.round(Math.random()*words.length);
		return words[index];
	}

	var newGame=function(){
		$scope.incorectLettersChoosen=[];
		$scope.correctLettersChoosen=[];
		$scope.guesses=6;
		$scope.displayWord='';

		selectedWord=selectRandomWord();
		var tempDisplayWord='';
		console.log(selectedWord);
		for (var i = 0; i < selectedWord.length; i++)
		{
			tempDisplayWord+='*';
		}
		console.log(tempDisplayWord);
		$scope.displayWord=tempDisplayWord;
	}

	$scope.letterChoosen=function(){
		for (var i =0; i< $scope.correctLettersChoosen.length; i++) {
			if ($scope.correctLettersChoosen[i].toLowerCase()==$scope.input.letter.toLowerCase()) {
				$scope.input.letter="";
				return;
			}
		}

		for (var i =0; i< $scope.incorectLettersChoosen.length; i++) {
			if ($scope.incorectLettersChoosen[i].toLowerCase()==$scope.input.letter.toLowerCase()) {
				$scope.input.letter="";
				return;
			}
		}

		var correct=false;
		for (var i = 0; i <selectedWord.length; i++) {
			if (selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()) {
				$scope.displayWord= $scope.displayWord.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.displayWord.slice(i+1);
				correct=true;
			}
		}
		if (correct) {
			$scope.correctLettersChoosen.push($scope.input.letter.toLowerCase());
		}
		else{
			$scope.guesses--;
			$scope.incorectLettersChoosen.push($scope.input.letter.toLowerCase());
		}
		$scope.input.letter="";
		if ($scope.guesses==0) {
			$timeout(function() {
				newGame();	
			},500);
		}
		if ($scope.displayWord.indexOf("*")==-1) {
			$timeout(function() {
				newGame();	
			},500);
		}
	}

	newGame();
});
