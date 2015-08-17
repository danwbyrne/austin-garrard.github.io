app.directive('d2tmViewTeam', function() {
	return {
		restrict: 'E',
		replace: true,	
		templateUrl: 'directive/d2tmViewTeam.html',
		scope: {
			team: '=',		//the user's team
			players: '=',	//all the players
			done: '&'		//signal the controller to move to the next screen
		}
	};
});