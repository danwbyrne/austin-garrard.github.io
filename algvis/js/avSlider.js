algVis.directive('avSlider', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'js/avSlider.html',
		scope: {
			title: '@',
			value: '=',
			min: '@',
			max: '@',
			update: '&'
		}
	};
})