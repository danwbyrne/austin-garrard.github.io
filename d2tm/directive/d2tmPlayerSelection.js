app.directive('d2tmPlayerSelection', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'directive/d2tmPlayerSelection.html',
		scope: {
			team: '=',	//the roster to add players to
			players: '=',	//the players to chose from
			done: '&'		//signal the controller to move to the next screen
		},
		link: function(scope, element, attrs) {

			scope.addToRoster = function(player) {
				scope.team.roster.push(player);
				scope.players.splice(scope.players.indexOf(player), 1);
			}

			scope.removeFromRoster = function(player) {
				scope.players.push(player);
				scope.team.roster.splice(scope.team.roster.indexOf(player), 1);
			}
		}
	};
});