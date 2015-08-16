algVis.directive('avCanvas', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'js/avCanvas.html',
		scope: {
			width: '@',
			height: '@',
			input: '='
		},
		link: function(scope, element, attrs) {
			//init
			scope.canvas = element.find('canvas')[0];
			scope.canvas.width = scope.width;
			scope.canvas.height = scope.height;
			scope.context = scope.canvas.getContext('2d');
			

			//draws input elements to canvas in a requestAnimationFrame loop
			scope.draw = function() {
				requestAnimationFrame(scope.draw);
				var elemWidth = scope.width / scope.input.size;
				var elemBaseHeight = scope.height / scope.input.size;

				scope.context.clearRect(0, 0, scope.canvas.width, scope.canvas.height);

				for(i=0; i < scope.input.size; i++) {
					scope.context.fillStyle = scope.input.colors[i];
					scope.context.fillRect((elemWidth)*i, 
									       scope.canvas.height-elemBaseHeight*scope.input.data[i],
									       elemWidth,
									       elemBaseHeight*scope.input.data[i]);
					scope.context.fillStyle = '#000';
					scope.context.strokeRect((elemWidth)*i, 
									       scope.canvas.height-elemBaseHeight*scope.input.data[i],
									       elemWidth,
									       elemBaseHeight*scope.input.data[i]);
				}
			};


			//start drawing loop
			scope.draw();
		}
	};
})