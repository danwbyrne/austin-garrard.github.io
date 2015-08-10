
//drawing components
var canvas;
var context;
var requestId;
var elemWidth;
var elemBaseHeight;

//colors
var cDefault = '#5e6c84';
var cHighlight = '#ffb400';
var cBad = '#b10029';
var cGood = '#099b00';

//algorithm logic
var input;
var inputColors;
var stage;
var stageLength;
STAGES = { init:0,
           showComparison:1, 
           showComparisonResult:2,
           showSwap:3 ,
           done:4};
var index1;
var index2;
var index2;

//other
var opts;
function Options() {
    this.color = cDefault;
    this.color1 = cHighlight;
    this.color2 = cBad;
    this.color3 = cGood;
    this.inputType = 'ascending';
    this.inputSize = 10;
    this.sortType = ' ';
    this.reRandomize = function() {
        this.inputType = 'random';
        generateInput();
    };
}


function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    for(i = 0; i < opts.inputSize; i++) {
        context.fillStyle = inputColors[i];
        context.fillRect((elemWidth+2)*i, canvas.height -elemBaseHeight*input[i], elemWidth, elemBaseHeight*input[i]);
    }
    
    requestAnimationFrame(draw);
}
function startDraw() {
    requestId = requestAnimationFrame(draw);
}
function stopDraw() {
    if(requestId)
        window.cancelAnimationFrame(requestId);
    requestId = 0;
}

function initSort(sort) {
    if(sort == 'selection') {
        index1 = 0; //i
        index2 = 0; //j
        index3 = 0; //min
        stage = STAGES.init;
        setInterval(selectionSort, 1000);
    }
}

function selectionSort() {
    console.log(stage);
    console.log(index1+' '+index2+' '+index3);
    for(i = 0; i < opts.inputSize; i++) {
        inputColors[i] = cDefault;
    }
    inputColors[index3] = cGood;
    if(stage == STAGES.init) {
        index2 = 1;
        stage = STAGES.showComparison;
    }

    else if(stage == STAGES.showComparison) {
        //inputColors[index3] = cHighlight;
        inputColors[index2] = cHighlight;
        stage = STAGES.showComparisonResult;
    }

    else if(stage == STAGES.showComparisonResult) {
        if(input[index3] < input[index2]) {
            inputColors[index3] = cGood;
            inputColors[index2] = cBad;
            index2++;
            if(index2 >= opts.inputSize) {
                stage = STAGES.showSwap;
            } else {
                stage = STAGES.showComparison;
            }
        } else {
            inputColors[index3] = cBad;
            inputColors[index2] = cGood;
            index3 = index2;
            index2++;
            if(index2 >= opts.inputSize) {
                stage = STAGES.showSwap;
            } else {
                stage = STAGES.showComparison;
            }
        }
        
    }

    else if(stage == STAGES.showSwap) {
        var temp = input[index1];
        input[index1] = input[index3];
        input[index3] = temp;
        var temp1 = inputColors[index1];
        inputColors[index1] = inputColors[index3];
        inputColors[index3] = temp1;

        index1++;
        if(index1 == opts.inputSize) {
            stage = STAGES.done;
            return;
        }
        index2 = index1+1;
        index3 = index1;

        stage = STAGES.showComparison;
    }

    else if(stage == STAGES.done) {
        return;
    }


/*
    for(i = 0; i < data.length; i++) {
        var min = i;
        for(j = i; j < data.length; j++) {
            if(data[j] < data[min]) {
                min = j;
            }
        }
        
        if(min != i ) {
            var temp = data[min];
            data[min] = data[i];
            data[i] = temp;
        }
    }
    */
}

function generateInput() {
    input = [];
    inputColors = [];
    if(opts.inputType == 'ascending') {
        for(i = 1; i <= opts.inputSize; i++) {
            input.push(i);
            inputColors.push(cDefault);
        }
    }else if(opts.inputType == 'descending') {
        for(i = opts.inputSize; i > 0; i--) {
            input.push(i);
            inputColors.push(cDefault);
        }
    }else if(opts.inputType == 'random') {
        for(i = 0; i < opts.inputSize; i++) {
            input.push(Math.floor((Math.random()*opts.inputSize) + 1));
            inputColors.push(cDefault);
        }
    }else {
        alert('Invalid input type.');
    }
}

$(document).ready(function(){
    //init drawing components
    canvas = document.getElementById('mainCanvas');
    context = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 200;
    requestId = 0;
    elemWidth = 30;
    elemBaseHeight = 10;
    stageLength;
    
    //init gui
    opts = new Options();
    var gui = new dat.GUI({autoPlace:false});
    $('#options').append(gui.domElement);
    //input
    gui.add(opts, 
            'inputType', 
            ['ascending', 'descending', 'random'])
            .onFinishChange(function(value) {
                inputType = value;
                generateInput();
            });
    generateInput();
    gui.add(opts, 'reRandomize');
    //sort
    gui.add(opts, 'sortType', 
            [' ', 'selection', 'insertion'])
            .onFinishChange(function(value) {
                sortType = value;
                initSort(value);
            });
    //debug
    var df = gui.addFolder('debug');
    df.addColor(opts, 'color');
    df.addColor(opts, 'color1');
    df.addColor(opts, 'color2');
    df.addColor(opts, 'color3');
    df.open();
    
    //gogo
    startDraw();
    
});




