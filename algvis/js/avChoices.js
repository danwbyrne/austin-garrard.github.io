algVis.directive('avChoices', function() {
	return {
		//the directive will be a dom element
		restrict: 'E',
		//the directive will be completely replaced by its template
		replace: true,
		//the directive html exists here
		templateUrl: 'js/avChoices.html',
		//details of variables
		scope: {
			//bind title to a const string
			title: '@',
			//bind items to a model in the controller
			items: '=',
			//bind update to a function reference
			update: '&'
		},
		//how to utilize the scope
		link: function(scope) {
			//save the selected index and call the provided function
			scope.click = function(index) {
				scope.selectedIndex = index;
				scope.update({index: index});
			}

			//init
			scope.click(0);
		}
	};
});