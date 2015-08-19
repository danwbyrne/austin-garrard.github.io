app.controller('d2tmController', ['$scope', 'playerInfo', '$modal',
	function($scope, playerInfo, $modal) {


    $scope.modalShown = false;
	  $scope.toggleModal = function() {
	    $scope.modalShown = !$scope.modalShown;
	  };

	//the user's team
	$scope.team = /*{
		name: 'My Team',
		tag: 'MT',
		logo: 'http://cdn.dota2.com/apps/dota2/images/heroes/rubick_full.png?v=2918132?v=2918132',
		sponsor: 'Volvo',
		roster: [],
		captain: 6
	};*/{
		name: '',
		tag: '',
		logo: 'http://esgnetwork.weebly.com/uploads/2/8/0/2/28020395/6620151_orig.png',
		sponsor: '',
		roster: [],
		captain: 5
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

	//Player Selection
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