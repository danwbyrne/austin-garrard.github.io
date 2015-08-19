app.controller('d2tmController', ['$scope', 'playerInfo',
	function($scope, playerInfo) {


	//the user's team
	$scope.team = {
		name: 'My Team',
		tag: 'MT',
		logo: 'http://cdn.dota2.com/apps/dota2/images/heroes/rubick_full.png?v=2918132?v=2918132',
		sponsor: 'Volvo',
		roster: [],
		captain: 6
	};/*{
		name: '',
		tag: '',
		logo: '',
		sponsor: '',
		roster: []
	}*/
	$scope.inputTeam = angular.copy($scope.team);
	


	//Create Team
	$scope.createTeam = function() {
		$scope.team = angular.copy($scope.inputTeam);
	}


	$scope.allPlayers = playerInfo;
	$scope.allPlayers.sort(function(a,b){ 
		return a.handle < b.handle ? -1:1; 
	});

	

	

}])