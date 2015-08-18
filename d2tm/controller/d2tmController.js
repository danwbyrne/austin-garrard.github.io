app.controller('d2tmController', ['$scope', function($scope) {


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
	
	//UI data
	$scope.screen = 'CreateTeam';
	$scope.setScreen = function(screen) {
		console.log(screen);
	}
	//drag/drop
	$scope.sortableOptions = {
		start: function(e, ui) {
			console.log(ui.item.html());
		},
		update: function(e, ui) {
			console.log('update');
		},
		stop: function(e, ui) {
			console.log('stop');
		},
		change: function(e, ui) {
			console.log('change');
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
			handle: 'Aui_2000',
			picture: 'http://live.starladder.tv/uploads/avatars/7/1/5/2/thumb_270_b49258f9f2bd5e4c59b0855e94d83c14.png',
			prizeMoney: 1000000,
			tiPlacement: 1,
			topHeroes: ['naga_siren', 'techies', 'visage'],
			formerTeams: ['Dignitas', 'Cloud 9']
		},
		{
			name: 'Sun Zheng',
			handle: 'Agressif',
			picture: 'https://cdn0.gamesports.net/storage/75000/75829.jpg',
			prizeMoney: 500000,
			tiPlacement: 2,
			topHeroes: ['gyrocopter', 'phantom_lancer', 'ember_spirit'],
			formerTeams: ['LGD.CDEC']
		},
		{
			name: 'Clement Ivanov',
			handle: 'Puppey',
			picture: 'http://live.starladder.tv/uploads/avatars/3/8/4/3/thumb_270_c1b8e04790edaa541bfcf2bfe35b490e.png',
			prizeMoney: 999999999,
			tiPlacement: 1,
			topHeroes: ['chen', 'dazzle', 'shadow_shaman'],
			formerTeams: ['Dignitas', 'Cloud 9']
		},
		{
			name: 'Artour Babaev',
			handle: 'Arteezy',
			picture: 'http://live.starladder.tv/uploads/avatars/b/2/1/0/thumb_270_d16ebf0edeaea9e7df16e4224e433edf.png',
			prizeMoney: 1337,
			tiPlacement: 3,
			topHeroes: ['gyrocopter', 'luna', 'naga_siren'],
			formerTeams: ['Evil Geniuses', 'Team Secret']
		},
		{
			name: 'Peter Dager',
			handle: 'ppd',
			picture: 'http://live.starladder.tv/uploads/avatars/d/4/e/2/thumb_270_9e8dd90c1ca2578d7c2e69618190da52.png',
			prizeMoney: 1000000,
			tiPlacement: 1,
			topHeroes: ['treant', 'dazzle', 'winter_wyvern'],
			formerTeams: ['HON Trash']
		},
		{
			name: 'Clinton Loomis',
			handle: 'Fear',
			picture: 'http://evilgeniuses.gg/content/players/13-list.jpg',
			prizeMoney: 1000000,
			tiPlacement: 1,
			topHeroes: [],
			formerTeams: ['Literally Everything']
		},
		{
			name: 'Jacky Mao',
			handle: 'EternaLEnVy',
			picture: 'http://live.starladder.tv/uploads/avatars/0/6/2/0/thumb_270_c1d092ca604cec251c02017d4ff64d7a.png',
			prizeMoney: 2,
			tiPlacement: 6,
			topHeroes: [],
			formerTeams: ['POTM Bottom']
		},
		{
			name: 'Wang Jiao',
			handle: 'Banana',
			picture: 'http://live.starladder.tv/uploads/avatars/e/6/f/9/thumb_270_0bf6614c4aaea4712470816064a5dfed.png'
		},
		{
			name: 'Johan Sundstein',
			handle: 'BigDaddyN0tail',
			picture: 'http://live.starladder.tv/uploads/comment_attachment/file/137378/preview_2deff2605c3c2dbf006f0e73896c80a4.png'
		},
		{
			name: 'Xu Zhilei',
			handle: 'BurNing',
			picture: 'http://live.starladder.tv/uploads/avatars/b/7/f/1/thumb_270_a2cb09bb0e0cd565efd1d5f014e3c190.png'
		},
		{
			name: 'Wong Hock Chuan',
			handle: 'ChuaN',
			picture: 'http://live.starladder.tv/uploads/avatars/f/d/1/b/thumb_270_902b27ca52143a744240ad8bd3fe7e2b.png'
		},
		{
			name: 'Danil Ishutin',
			handle: 'Dendi',
			picture: 'http://live.starladder.tv/uploads/avatars/7/b/a/5/thumb_270_a5c24bea785dc30514311de912668246.png'
		},
		{
			name: 'Luo Feichi',
			handle: 'Ferrari_430',
			picture: 'http://live.starladder.tv/uploads/avatars/c/f/a/e/thumb_270_caaa9d5bdb8fc648dc742a89202e1236.png'
		},
		{
			name: 'Gleb Lipatnikov',
			handle: 'Funn1k',
			picture: 'http://live.starladder.tv/uploads/avatars/8/f/5/5/thumb_270_628c4ab51df2c4bee7ef66d5b5edf203.png'
		},
		{
			name: 'Xu Linsen',
			handle: 'fy',
			picture: 'http://live.starladder.tv/uploads/avatars/2/6/3/e/thumb_270_042eb7870d88fb5c0cd3ab3ee3d8a838.png'
		},
		{
			name: 'Sergey Alexandrovich Bragin',
			handle: 'God',
			picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_rKiguWTL0IgJyxG2-uMWrbz-eQcVvFqFDi9w4fyemEjH7Ku1mlmFmQ'
		},
		{
			name: 'Chen Zhihao',
			handle: 'Hao',
			picture: 'http://live.starladder.tv/uploads/avatars/6/2/5/0/thumb_270_cfa52c756d510dac00a2e5d51ca309be.png'
		},
		{
			name: 'Daryl Koh Pei Xiang',
			handle: 'iceiceice',
			picture: 'http://live.starladder.tv/uploads/avatars/8/1/2/4/thumb_270_6e584aca3f7db4a9d5fae87c6557de7f.png'
		},
		{
			name: 'Kuro Salehi Takhasomi ',
			handle: 'KuroKy',
			picture: 'http://live.starladder.tv/uploads/avatars/b/1/1/8/thumb_270_7c8d991dbc6dc573cbbfb6bdd30ecc35.png'
		},
		{
			name: 'Zhang Zhicheng',
			handle: 'LaNm',
			picture: 'http://live.starladder.tv/uploads/avatars/7/b/3/9/thumb_270_964516377961520c78adb31478c2da75.png'
		},
		{
			name: '',
			handle: '',
			picture: ''
		}
	];

	$scope.allPlayers.sort(function(a,b){ 
		return a.handle < b.handle ? -1:1; 
	});

	

	

}])