app.controller('d2tmController', ['$scope', function($scope) {


	//the user's team
	$scope.team = {
		name: 'My Team',
		tag: 'MT',
		logo: 'http://cdn.dota2.com/apps/dota2/images/heroes/rubick_full.png?v=2918132?v=2918132',
		sponsor: 'Volvo',
		roster: []
	};/*{
		name: '',
		tag: '',
		logo: '',
		sponsor: '',
		roster: []
	}*/
	$scope.inputTeam = angular.copy($scope.team);
	
	//UI data
	$scope.screen = 'CreateTeam';
	$scope.setScreen = function(screen) {
		console.log(screen);
	}
	//drag/drop
	$scope.sortableOptions = {
		start: function(e, ui) {

		},
		update: function(e, ui) {

		},
		stop: function(e, ui) {

		}
	}


	//Create Team
	$scope.createTeam = function() {
		$scope.team = angular.copy($scope.inputTeam);
	}


	//list of all players. will be scraped from liquipedia
	$scope.allPlayers = [
		{
			name: 'Kurtis Ling',
			handle: 'aui_2000',
			picture: 'url_of_picture',
			prizeMoney: 1000000,
			tiPlacement: 1,
			topHeroes: ['Naga Siren', 'Techies', 'Visage'],
			formerTeams: ['Dignitas', 'Cloud 9']
		},
		{
			name: 'Sun Zheng',
			handle: 'Aggresif',
			picture: 'url_of_picture',
			prizeMoney: 500000,
			tiPlacement: 2,
			topHeroes: ['Gyrocopter', 'Phantom Lancer'],
			formerTeams: ['LGD.CDEC']
		},
		{
			name: 'Clement Ivanov',
			handle: 'Puppey',
			picture: 'url_of_picture',
			prizeMoney: 999999999,
			tiPlacement: 1,
			topHeroes: ['Chen', 'Dazzle', 'Shadow Shaman'],
			formerTeams: ['Dignitas', 'Cloud 9']
		},
		{
			name: 'Artour Babaev',
			handle: 'Arteezy',
			picture: 'url_of_picture',
			prizeMoney: 1337,
			tiPlacement: 3,
			topHeroes: ['Gyrocopter', 'Luna', 'Naga Siren'],
			formerTeams: ['Evil Geniuses', 'Team Secret']
		},
		{
			name: 'Peter Dager',
			handle: 'ppd',
			picture: 'url_of_picture',
			prizeMoney: 1000000,
			tiPlacement: 1,
			topHeroes: ['Treant Protector', 'Dazzle', 'Winter Wyvern'],
			formerTeams: ['HON Trash']
		},
		{
			name: 'Clinton Loomis',
			handle: 'Fear',
			picture: 'url_of_picture',
			prizeMoney: 1000000,
			tiPlacement: 1,
			topHeroes: ['Literally Anything'],
			formerTeams: ['Literally Everything']
		},
		{
			name: 'Jacky Mao',
			handle: 'EternalEnvy.CRUMBLING',
			picture: 'url_of_picture',
			prizeMoney: 2,
			tiPlacement: 6,
			topHeroes: ['Naga Siren', 'Phantom Lancer'],
			formerTeams: ['POTM Bottom']
		}
	];

	

	

}])