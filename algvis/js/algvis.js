
var algVis = angular.module('algVis', ['rzModule']);





var selectionSort1 = function(input) {
	for(i = 0; i < input.size; i++) {
		var min = i;
		for(j = i; j < input.size; j++) {
			if(input.data[j] < input.data[min]) {
				min = j;
			}
		}

		var temp = input.data[i];
		input.data[i] = input.data[min];
		input.data[min] = temp;
	}
}

var insertionSort1 = function(input) {
	for(i = 1; i < input.size; i++) {
		for(j=0; j < i; j++) {
			if(input.data[i] < input.data[j]) {
				for(k = j; k < i; k++) {
					var temp = input.data[k];
					input.data[k] = input.data[i];
					input.data[i] = temp;
				}
				break;
			}
		}
	}
}
	

	

	


