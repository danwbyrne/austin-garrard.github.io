app.directive('d2tmPlayerSelection', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'directive/d2tmPlayerSelection.html',
		scope: {
			team: '=',	//the roster to add players to
			players: '=',	//the players to chose from
			done: '&',		//signal the controller to move to the next screen
			options: '='
		},
		link: function(scope, element, attrs) {

			scope.addToRoster = function(player) {
				if(scope.team.roster.length < 6) {
					scope.team.roster.push(player);
					scope.players.splice(scope.players.indexOf(player), 1);
				}
				else {
					//display error message
				}
			};

			scope.removeFromRoster = function(player) {
				scope.players.push(player);
				scope.team.roster.splice(scope.team.roster.indexOf(player), 1);
				scope.players.sort(function(a,b){ 
					return a.handle < b.handle ? -1:1; 
				});
			};

			scope.setCaptain = function(index) {
				scope.team.captain = index;
			};

			scope.pictureUrl = function(player, index) {
				return 'http://cdn.dota2.com/apps/dota2/images/heroes/' + player.topHeroes[index]+'_sb.png';
			}
		}
	};
});