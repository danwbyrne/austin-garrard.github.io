app.controller('d2tmController', ['$scope', 'playerInfo', function($scope, playerInfo) {

	/* --- DATA --- */

	//the team
	$scope.team = {
		name: '',
		sponsor: '',
		logo: 'https://raw.github.com/paralin/Dota2/master/Resources/Misc/dota2_logo.jpg',
		roster: []
	};
	$scope.createTeam = function() {
		for(i=0; i<5; i++) {
			$scope.team.roster.push({
				name: '',
				handle: '',
				picture: '',
				dummy: i+1
			});
		}
	};
	$scope.createTeam();

	//the players
	$scope.allPlayers = playerInfo;
	var orderByHandle = function(a,b){ 
		return a.handle < b.handle ? -1:1; 
	};
	$scope.allPlayers.sort(orderByHandle);


	/* --- UI --- */

	$scope.status = {
		aboutOpen: true,
		teamInfoOpen: false,
		playerSelectOpen: false
	};

	//Team Information
	$scope.input = angular.copy($scope.team);
	$scope.updateTeam = function() {
		$scope.team.name = $scope.input.name;
		$scope.team.sponsor = $scope.input.sponsor;
		$scope.team.logo = $scope.input.logo;
		$scope.status.playerSelectOpen = true;
	};

	
	/* --- Drag/Drop --- */
	$scope.rlIdx = -1;

	//callback for an item dragged from the rosterList
	//responsible for removing the item 
	$scope.onDragRL = function(index, data, event) {
		var dataIdx = $scope.team.roster.indexOf(data);
		if(dataIdx > -1) {
			$scope.team.roster.splice(dataIdx, 1);
			$scope.rlIdx = dataIdx;
			$scope.team.roster.splice(dataIdx, 0, {name:'',handle:'',picture:'',dummy:dataIdx+1});
		}
	}

	//callback for the rosterList when an item is dropped inside
	//responsible for adding the item to the rosterList
	$scope.onDropRL = function(index, data, event) {
		var dataIdx = $scope.team.roster.indexOf(data);
		//if it's an open spot, place it there
		if($scope.team.roster[index].dummy) {
			$scope.team.roster.splice(index, 1);
			$scope.team.roster.splice(index, 0, data);
		}
		else if($scope.rlIdx == -1) {
			$scope.allPlayers.push(data);
			$scope.allPlayers.sort(function(a,b){ 
				return a.handle < b.handle ? -1:1; 
			});
		}
		else {
			var otherObj = $scope.team.roster[index];
			$scope.team.roster[index] = data;
        	$scope.team.roster[$scope.rlIdx] = otherObj;
        	$scope.rlIdx = -1;
		}
	};

	//callback for the item dragged from the playerSelection
	//responsible for removing the item 
	$scope.onDragPS = function(index, data, event) {
		var dataIdx = $scope.allPlayers.indexOf(data);
		if(dataIdx > -1) {
			$scope.allPlayers.splice(dataIdx, 1);
		}
	}
	
	//callback for the playerSelection when an item is dropped inside
	//responsible for adding the item
	$scope.onDropPS = function(index, data, event) {
		if(data.name=='')
			return;
		var dataIdx = $scope.allPlayers.indexOf(data);
		if(dataIdx == -1) {
			$scope.allPlayers.push(data);
			$scope.allPlayers.sort(function(a,b){ 
				return a.handle < b.handle ? -1:1; 
			});
			$scope.rlIdx = -1;
		}
	};

}]);
