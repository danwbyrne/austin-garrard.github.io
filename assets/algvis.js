
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

//other
var opts;
function Options() {
    this.color = cDefault;
    this.color1 = cHighlight;
    this.color2 = cBad;
    this.color3 = cGood;
    this.inputType = 'ascending';
    this.inputSize = 10;
    this.sortType = 'selection';
    
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

function parseInput(str_data) {
    var str_array = str_data.trim().split(' ');
    var int_array = [];
    for(i = 0; i < str_array.length; i++) {
        int_array.push(parseInt(str_array[i]));
    }
    return int_array;
}

function selectionSort(str_data) {
    var data = parseInput(input.value)
    
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
    testPrint.textContent = data;
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
    //sort
    gui.add(opts, 'sortType', ['selection', 'insertion']);
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




