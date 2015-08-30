app.controller('d2tmController', ['$scope', '$modal', '$localStorage', 'defaultPlayers', 'defaultTeams', function($scope, $modal, $localStorage, defaultPlayers, defaultTeams) {

	/* --- DATA --- */

	var loadDefaults = function() {
		$scope.allPlayers = defaultPlayers;
		for(i=0; i<$scope.allPlayers.length; i++)
			$scope.allPlayers[i].assigned = false;

		$scope.allTeams = [];
		for(i=0; i<defaultTeams.length; i++) {
			var team = {
				name: defaultTeams[i].name,
				logo: defaultTeams[i].logo,
				roster: []
			};


			for(k=0; k<defaultTeams[i].confirmed.length; k++) {
				for(l=0; l<$scope.allPlayers.length; l++) {
					if(defaultTeams[i].confirmed[k] == $scope.allPlayers[l].handle) {
						$scope.allPlayers[l].confirmed = true;
						$scope.allPlayers[l].assigned = true;
						team.roster.push(l);
						break;
					}
				}
			}

			for(k=0; k<defaultTeams[i].rumored.length; k++) {
				for(l=0; l<$scope.allPlayers.length; l++) {
					if(defaultTeams[i].rumored[k] == $scope.allPlayers[l].handle) {
						$scope.allPlayers[l].confirmed = false;
						$scope.allPlayers[l].assigned = true;
						team.roster.push(l);
						break;
					}
				}
			}		

			for(k=team.roster.length; k<5; k++) {
				team.roster.push(k);
			}

			$scope.allTeams.push(team);
		}
	};

	//init
	$scope.$storage = $localStorage;
	if($scope.$storage.saved) {
		$scope.allPlayers = $scope.$storage.allPlayers;
		$scope.allTeams = $scope.$storage.allTeams;
	}
	else {
		loadDefaults();
		$scope.$storage.allPlayers = $scope.allPlayers;
		$scope.$storage.allTeams = $scope.allTeams;
		//$scope.$storage.saved = true;
	}

	//the team
	$scope.curTeamIdx = 0;
	$scope.team = $scope.allTeams[$scope.curTeamIdx];



	//Team CRUD
	$scope.createTeam = function() {
		var team = {
			name: $scope.input.teamToCreate.name,
			logo: $scope.input.teamToCreate.logo,
			roster: []
		};

		for(k=0; k<5; k++) {
			team.roster.push(k);
		}

		$scope.allTeams.push(team);

		$scope.input.teamToCreate = {name:'',logo:''};
	};

	$scope.editTeam = function() {
		$scope.allTeams[$scope.input.teamToEdit.index].name = $scope.input.teamToEdit.name;
		$scope.allTeams[$scope.input.teamToEdit.index].logo = $scope.input.teamToEdit.logo;
	}

	$scope.removeTeam = function() {
		$scope.allTeams.splice($scope.input.teamToRemove, 1);
	}

	//Player CRUD
	$scope.createPlayer = function() {
		var player = angular.copy($scope.input.playerToCreate);
		$scope.allPlayers.push(player);
	}

	$scope.editPlayer = function() {
		$scope.allPlayers[$scope.input.playerToEdit.index].name = $scope.input.playerToEdit.name;
		$scope.allPlayers[$scope.input.playerToEdit.index].handle = $scope.input.playerToEdit.handle;
		$scope.allPlayers[$scope.input.playerToEdit.index].logo = $scope.input.playerToEdit.logo;
	}

	$scope.removePlayer = function() {
		$scope.allPlayers.splice($scope.input.playerToRemove, 1);
		$scope.team = $scope.allTeams[0];
	}
	


	/* --- UI --- */

	$scope.playersFilter = function(element) {
		return element.name != '';
	}

	$scope.playerSelectionFilter = function(element) {
		return !element.assigned && element.name != '';
	}

	//dropdown, accordion status
	$scope.status = {
		aboutOpen: false,
		teamsOpen: false,
		playersOpen: false,
		playerSelectOpen: true,
		teamDropdownOpen: false,
		selectTeamToEdit: false,
		selectTeamToRemove: false,
		selectPlayerToEdit: false,
		selectPlayerToRemove: false
	};

	//User input
	$scope.input = {
		teamToCreate: {
			name:'',
			logo:''
		},
		teamToEdit: {
			index: 0,
			name: $scope.allTeams[0].name,
			logo: $scope.allTeams[0].logo
		},
		teamToRemove: 0,
		playerToCreate: {
			name: '',
			handle: '',
			picture: ''
		},
		playerToEdit: {
			index: 0,
			name: $scope.allPlayers[0].name,
			handle: $scope.allPlayers[0].handle,
			picture: $scope.allPlayers[0].picture
		},
		playerToRemove: 0
	};

	//CRUD
	$scope.changeTeam = function(index) {
		$scope.team = $scope.allTeams[index];
	};

	$scope.selectTeamToEdit = function(idx) {
		$scope.input.teamToEdit = {
			index: idx,
			name: $scope.allTeams[idx].name,
			logo: $scope.allTeams[idx].logo
		};
	}

	$scope.selectTeamToRemove = function(index) {
		$scope.input.teamToRemove = index;
	}

	$scope.selectPlayerToEdit = function(idx) {
		$scope.input.playerToEdit = {
			index: idx,
			name: $scope.allPlayers[idx].name,
			handle: $scope.allPlayers[idx].handle,
			picture: $scope.allPlayers[idx].picture
		}
	}

	$scope.selectPlayerToRemove = function(index) {
		$scope.input.playerToRemove = index;
	}

	//confirm delete
	$scope.confirmDelete = function(team) {
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'confirmDeleteModal.html',
			controller: 'ConfirmDeleteCtrl',
			resolve: {
				itemName: function() {
					return team? $scope.allTeams[$scope.input.teamToRemove].name : $scope.allPlayers[$scope.input.playerToRemove].handle;
				}
			}
		});

		modalInstance.result.then(function() {
			if(team)
				$scope.removeTeam();
			else
				$scope.removePlayer();
		});
	}
	
	

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
			$scope.team.roster.splice(index, 0, index);
		}
	}

	//callback for the rosterList when an item is dropped inside
	//responsible for adding the item to the rosterList
	$scope.onDropRL = function(index, data, event) {
		var dataIdx = $scope.allPlayers.indexOf(data);

		//if filled spot and item is from playerSelection, swap
		if($scope.rlIdx == -1) {
			var rlData = $scope.team.roster[index];
			if($scope.allPlayers[rlData].confirmed) {
				data.assigned = false;
			}
			else {
				$scope.allPlayers[rlData].assigned = false;
				$scope.team.roster.splice(index, 1);
				$scope.team.roster.splice(index, 0, dataIdx);
			}
		}
		//if filled spot and item is from rosterList, swap
		else {
			var otherObj = $scope.team.roster[index];
			$scope.team.roster[index] = data;
	    	$scope.team.roster[$scope.rlIdx] = otherObj;
		    $scope.rlIdx = -1;
		    for(i=0; i<5; i++) {
		    	if($scope.team.roster[i] < 5) {
		    		$scope.team.roster[i] = i;
		    	}
		    }
		}
	};

	//callback for the item dragged from the playerSelection
	//responsible for removing the item 
	$scope.onDragPS = function(index, data, event) {
		var dataIdx = $scope.allPlayers.indexOf(data);
		if(dataIdx > -1) {
			data.assigned = true;
		}
	}
	
	//callback for the playerSelection when an item is dropped inside
	//responsible for adding the item
	$scope.onDropPS = function(index, data, event) {
		if(Number(data) == data) {
			if($scope.allPlayers[data].dummy) {
				//do nothing
			}
			else if($scope.allPlayers[data].confirmed) {
				$scope.team.roster.splice($scope.rlIdx, 1);
				$scope.team.roster.splice($scope.rlIdx, 0, data);
			}
			else {
				$scope.allPlayers[data].assigned = false;
				$scope.team.roster.splice($scope.rlIdx, 1);
				$scope.team.roster.splice($scope.rlIdx, 0, $scope.rlIdx);
			}
			$scope.rlIdx = -1;
		}
		else {
			data.assigned = false;
		}
	};

}]);


app.controller('ConfirmDeleteCtrl', ['$scope', '$modalInstance', 'itemName', function($scope, $modalInstance, itemName) {
	$scope.itemName = itemName;
	$scope.ok = function() {
		$modalInstance.close();
	}
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	}
}]);