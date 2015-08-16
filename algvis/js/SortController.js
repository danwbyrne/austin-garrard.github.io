algVis.controller('SortController', ['$scope', function($scope) {
	//options
	$scope.inputTypes = ['random', 'ascending', 'descending'];
	$scope.sortTypes = ['selection', 'insertion', 'bubble', 'heap',
						'merge', 'quick'];
	$scope.runStatuses = ['stop', 'run'];
	$scope.stageTime = 4; //ms

	//colors
	$scope.cDefault = '#5e6c84';
	$scope.cHighlight = '#ffb400';
	$scope.cBad = '#b10029';
	$scope.cGood = '#099b00';
	
	//vars
	$scope.input = {
		size: 20,
		type: '', //initialized by directive
		data: [], //initialized by directive
		colors: []//initialized by directive
	};
	$scope.sortType = '';
	$scope.runStatus = '';
	$scope.runId = 0;
	$scope.stage;

	STAGES = { init:0,
			   //selection
	           showComparison:1, 
	           showComparisonResult:2,
	           showSwap:3,
	           //insertion
	           search:4,
	           insert:5
	       	 };
	 var index1;
	 var index2;
	 var index3;

	 //index1:i, index2:j, index3:k
	 var insertionSort = function() {
	 	

	 	if(stage == STAGES.search) {
	 		$scope.input.colors[index1] = $scope.cHighlight;
	 		$scope.input.colors[index2] = $scope.cHighlight;

	 		if($scope.input.data[index1] < $scope.input.data[index2]) {
	 			$scope.input.colors[index1] = $scope.cGood;
	 			$scope.input.colors[index2] = $scope.cGood;
	 			stage = STAGES.insert;
	 			index3 = index2;
	 		}
	 		else {
	 			$scope.input.colors[index2] = $scope.cGood;
	 			index2++;
	 			if(index2 == index1) {
	 				$scope.input.colors[index2] = $scope.cGood;

	 				index2 = 0;
	 				index1++;
	 				
	 			}
	 			$scope.input.colors[index2] = $scope.cHighlight;
	 		}
	 	}

	 	else if(stage == STAGES.insert) {
	 		var temp = $scope.input.data[index3];
	 		$scope.input.data[index3] = $scope.input.data[index1];
	 		$scope.input.data[index1] = temp;
	 		temp = $scope.input.colors[index3];
	 		$scope.input.colors[index3] = $scope.input.colors[index1];
	 		$scope.input.colors[index1] = temp;

	 		index3++;
	 		if(index3 == index1) {
	 			index1++;
	 			if(index1 == $scope.input.size) {
	 					$scope.setRunStatus(0);
	 				}
	 			index2 = 0;
	 			stage = STAGES.search;
	 		}
	 	}
	 }

	 var selectionSort = function() {
	    $scope.input.colors[index1] = $scope.cHighlight;
	    
	    if(stage == STAGES.init) {
	        index2 = 1;
	        stage = STAGES.showComparison;
	    }

	    else if(stage == STAGES.showComparison) {
	        $scope.input.colors[index2] = $scope.cHighlight;
	        stage = STAGES.showComparisonResult;
	    }

	    else if(stage == STAGES.showComparisonResult) {
	        if($scope.input.data[index3] <= $scope.input.data[index2]) {
	            $scope.input.colors[index2] = $scope.cBad;
	            index2++;
	            $scope.input.colors[index2] = $scope.cHighlight;
	            if(index2 >= $scope.input.size) {
	                stage = STAGES.showSwap;
	            } else {
	                stage = STAGES.showComparison;
	            }
	        } else {
	        	if(index3 != index1)
	            	$scope.input.colors[index3] = $scope.cBad;
	            $scope.input.colors[index2] = $scope.cGood;
	            index3 = index2;
	            index2++;
	            if(index2 >= $scope.input.size) {
	                stage = STAGES.showSwap;
	            } else {
	                stage = STAGES.showComparison;
	            }
	        }
	        
	    }

	    else if(stage == STAGES.showSwap) {
	    	if(index3 < $scope.input.size) {
	    		if(index3 != index1) {
		        	var temp = $scope.input.data[index1];
			        $scope.input.data[index1] = $scope.input.data[index3];
			        $scope.input.data[index3] = temp;
			        $scope.input.colors[index1] = $scope.cGood;
			        $scope.input.colors[index3] = $scope.cBad;
			    }
			    else {
			    	$scope.input.colors[index1] = $scope.cGood;
			    }
		    }

	        index1++;
	        if(index1 == $scope.input.size) {
	            $scope.input.colors[index1-1] = $scope.cGood;
		        $scope.setRunStatus(0);
	            return;
	        }
	        index2 = index1+1;
	        index3 = index1;

	        stage = STAGES.showComparison;
	    }
	};

	$scope.test = function() {
		insertionSort1($scope.input);
		console.log($scope.input.data);
	}


	//setters
	$scope.setInputType = function(index) {
		$scope.input.type = $scope.inputTypes[index];
	};
	$scope.setSortType = function(index) {
		$scope.sortType = $scope.sortTypes[index];
	};
	$scope.setRunStatus = function(index) {
		$scope.runStatus = $scope.runStatuses[index];
		if($scope.runStatus == 'run') {
			$scope.initSort();
		}
		else if($scope.runId && $scope.runStatus == 'stop') {
			clearInterval($scope.runId);
			$scope.runId = 0;
		}
	}

	//start a new sort animation
	$scope.initSort = function() {
		var stageTime = (6-$scope.stageTime)*1000 / $scope.input.size;
		if($scope.sortType == 'selection') {
			index1 = 0; //i
	        index2 = 0; //j
	        index3 = 0; //min
	        stage = STAGES.init;
	        $scope.generateInput();
	        $scope.runId = setInterval(selectionSort, stageTime);
		}
		else if($scope.sortType == 'insertion') {
			index1 = 1; //i
	        index2 = 0; //j
	        index3 = 0; //k
	        stage = STAGES.search;
	        $scope.generateInput();
	        $scope.runId = setInterval(insertionSort, stageTime);
		}
	}

	//instantiate input with new data
	$scope.generateInput = function() {
		$scope.input.data = [];
		$scope.input.colors = [];
		if($scope.input.type == 'ascending') {
	        for(i = 1; i <= $scope.input.size; i++) {
	            $scope.input.data.push(i);
	            $scope.input.colors.push($scope.cBad);
	        }
	    }else if($scope.input.type == 'descending') {
	        for(i = $scope.input.size; i > 0; i--) {
	            $scope.input.data.push(i);
	            $scope.input.colors.push($scope.cBad);
	        }
	    }else if($scope.input.type == 'random') {
	        for(i = 0; i < $scope.input.size; i++) {
	            $scope.input.data.push(Math.floor((Math.random()*$scope.input.size) + 1));
	            $scope.input.colors.push($scope.cBad);
	        }
	    }else {
	        alert('Invalid input type.');
	    }
	};

}]);