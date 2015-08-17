app.directive('d2tmCreateTeam', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'directive/d2tmCreateTeam.html',
		scope: {
			team: '=', //the data will be stored in this object
			done: '&'  //signal the controller to move to the next screen
		}
	};
});