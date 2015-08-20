app.controller('d2tmController', ['$scope', 'playerInfo', '$modal',
	function($scope, playerInfo, $modal) {



	$scope.status = {
		aboutOpen: true,
		teamInfoOpen: false,
		playerSelectOpen: false,
		playerSelectInProgress: false
	};


	//the user's team
	$scope.input = {
		name: '',
		sponsor: '',
		logo: '',
		roster: [],
		captain: 0
	}; 
	$scope.team = {
		name: '____',
		sponsor: '__',
		logo: '',
		roster: [],
		captain: 0
	};

	$scope.inputAlerts = [];
	$scope.closeInputAlert = function(index) {
		$scope.inputAlerts.splice(index, 1);
	};
	$scope.updateTeam = function() {
		$scope.team.name = $scope.input.name;
		$scope.team.sponsor = $scope.input.sponsor;
		$scope.team.logo = $scope.input.logo;
		if(!$scope.status.playerSelectInProgress) {
			$scope.createTeam();
			$scope.status.playerSelectInProgress = true;
		}
		$scope.status.playerSelectOpen = true;
	};

	var curRosterIndex = 0;
	


	//Create Team
	$scope.createTeam = function() {
		for(i=0; i<6; i++) {
			$scope.team.roster.push({
				name: '',
				handle: '',
				picture: '',
				dummy: i+1
			});
		}
	};
	$scope.createTeam();


	$scope.allPlayers = playerInfo;
	$scope.allPlayers.sort(function(a,b){ 
		return a.handle < b.handle ? -1:1; 
	});

	$scope.onDragRL = function(index, data, event) {
		var dataIdx = $scope.team.roster.indexOf(data);
		if(dataIdx > -1) {
			$scope.team.roster.splice(dataIdx, 1);
			$scope.rlIdx = dataIdx;
			$scope.team.roster.splice(dataIdx, 0, {name:'',handle:'',picture:'',dummy:dataIdx+1});
		}
	}
	$scope.rlIdx = -1;

	//Player Selection
	$scope.onDropRL = function(index, data, event) {
		var dataIdx = $scope.team.roster.indexOf(data);
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

	$scope.onDragPS = function(index, data, event) {
		var dataIdx = $scope.allPlayers.indexOf(data);
		if(dataIdx > -1) {
			$scope.allPlayers.splice(dataIdx, 1);
		}
	}
	
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


	$scope.addToRoster = function(player) {
		for(i=0; i<6; i++) {
			if($scope.team.roster[i].dummy) {
				$scope.team.roster.splice(i, 1);
				$scope.team.roster.splice(i, 0, player);
				$scope.allPlayers.splice($scope.allPlayers.indexOf(player), 1);
				break;	
			}
		}

		/*
		if($scope.team.roster[curRosterIndex].name != '') {
			$scope.team.roster.push(player);
			$scope.allPlayers.splice($scope.allPlayers.indexOf(player), 1);
		}
		else {
			//display error message
		}*/
	};

	$scope.sortableOptions = {
		handle: '> .tile .pic'
	}

	$scope.removeFromRoster = function(player) {
		if(player.name != '') {
			$scope.allPlayers.push(player);
			$scope.allPlayers.sort(function(a,b){ 
				return a.handle < b.handle ? -1:1; 
			});
			var i = $scope.team.roster.indexOf(player);
			$scope.team.roster.splice(i, 1);
			$scope.team.roster.splice(i, 0, {name:'',handle:'',dummy:i+1});
			//$scope.team.roster.splice()
		}
	};

	$scope.setCaptain = function(index) {
		$scope.team.captain = index;
	};

	$scope.pictureUrl = function(player, index) {
		return 'http://cdn.dota2.com/apps/dota2/images/heroes/' + player.topHeroes[index]+'_sb.png';
	}

	$scope.logoDialog = function() {

	}
	

}]);


app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '=',
      logo: '='
    },
    replace: true, // Replace with the template below
    transclude: false, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    templateUrl: 'modalDialog.html' // See below
  };
});