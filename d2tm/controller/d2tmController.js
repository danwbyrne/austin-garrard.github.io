app.controller('d2tmController', ['$scope', 'playerInfo', 'teamInfo', function($scope, playerInfo, teamInfo) {

	/* --- DATA --- */

	//init
	//the players
	$scope.allPlayers = playerInfo;
	var orderByHandle = function(a,b){ 
		return a.handle < b.handle ? -1:1; 
	};
	$scope.allPlayers.sort(orderByHandle);
	//the teams
	$scope.allTeams = [];
	for(i=0; i<teamInfo.length; i++) {
		var team = {
			name: teamInfo[i].name,
			logo: teamInfo[i].logo,
			roster: []
		};


		for(k=0; k<teamInfo[i].confirmed.length; k++) {
			for(l=0; l<$scope.allPlayers.length; l++) {
				if(teamInfo[i].confirmed[k] == $scope.allPlayers[l].handle) {
					$scope.allPlayers[l].confirmed = true;
					team.roster.push($scope.allPlayers[l]);
					$scope.allPlayers.splice(l, 1);
					break;
				}
			}
		}

		for(k=0; k<teamInfo[i].rumored.length; k++) {
			for(l=0; l<$scope.allPlayers.length; l++) {
				if(teamInfo[i].rumored[k] == $scope.allPlayers[l].handle) {
					$scope.allPlayers[l].confirmed = false;
					team.roster.push($scope.allPlayers[l]);
					$scope.allPlayers.splice(l, 1);
					break;
				}
			}
		}		

		for(k=team.roster.length; k<5; k++) {
			team.roster.push({
				name: '',
				handle: '',
				picture: '',
				dummy: k+1
			});
		}

		$scope.allTeams.push(team);
	}

	//the team
	$scope.curTeamIdx = 0;
	$scope.team = $scope.allTeams[$scope.curTeamIdx];

	


	/* --- UI --- */

	$scope.status = {
		aboutOpen: true,
		teamInfoOpen: false,
		playerSelectOpen: false,
		teamDropdownOpen: false
	};

	$scope.changeTeam = function(index) {
		$scope.team = $scope.allTeams[index];
	};

	//Team Information
	$scope.input = {name:'',logo:''};
	$scope.createTeam = function() {
		var team = {
			name: $scope.input.name,
			logo: $scope.input.logo,
			roster: []
		};

		for(k=0; k<5; k++) {
			team.roster.push({
				name: '',
				handle: '',
				picture: '',
				dummy: k+1
			});
		}

		$scope.allTeams.push(team);

		$scope.input = {name:'',logo:''};
	};

	$scope.logoURL = function(logo) {
		if(logo.search('http') > -1) {
			return logo;
		}
		else {
			return '/d2tm/img/'+logo;
		}
	}
	
	/* --- Drag/Drop --- */
	$scope.rlIdx = -1;

	//callback for an item dragged from the rosterList
	//responsible for removing the item 
	$scope.onDragRL = function(index, data, event) {
		if(index > -1) {
			$scope.rlIdx = index;
			$scope.team.roster.splice(index, 1);
			$scope.team.roster.splice(index, 0, {name:'',handle:'',picture:'',dummy:index+1});
		}
	}

	//callback for the rosterList when an item is dropped inside
	//responsible for adding the item to the rosterList
	$scope.onDropRL = function(index, data, event) {
		var dataIdx = $scope.team.roster.indexOf(data);
		//if open spot, place it there
		if($scope.team.roster[index].dummy) {
			$scope.team.roster.splice(index, 1);
			$scope.team.roster.splice(index, 0, data);
			$scope.rlIdx = -1;
		}
		//if filled spot and item is from playerSelection, swap
		else if($scope.rlIdx == -1) {
			var rlData = $scope.team.roster[index];
			if(rlData.confirmed) {
				$scope.allPlayers.push(data);
				$scope.allPlayers.sort(orderByHandle);
			}
			else {
				$scope.allPlayers.push(rlData);
				$scope.allPlayers.sort(orderByHandle);
				$scope.team.roster.splice(index, 1);
				$scope.team.roster.splice(index, 0, data);
			}
		}
		//if filled spot and item is from rosterList, swap
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
		if(data.confirmed) {
			$scope.team.roster.splice($scope.rlIdx, 1);
			$scope.team.roster.splice($scope.rlIdx, 0, data);
		}
		else {
			$scope.allPlayers.push(data);
			$scope.allPlayers.sort(orderByHandle);
		}
		$scope.rlIdx = -1;
	};

}]);
