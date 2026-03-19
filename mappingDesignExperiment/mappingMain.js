// find our elements 
const stageContainer = document.getElementById("stage-container");
const circleButton = document.getElementById("circle-button");
const changeRed = document.getElementById("change-red");
const changeYellow = document.getElementById("change-yellow");
const changeBlue = document.getElementById("change-blue");

// find stage width
let stageContainerWidth = stageContainer.offsetWidth;
//console.log(stageContainerWidth);

// find stage height
let stageContainerHeight = stageContainer.offsetHeight;
//console.log(stageContainerHeight);

// set default circlr colour
let circleColour = "red"

// create the konva stage
const stage = new Konva.Stage({
    container: "konva-stage",
    width: stageContainerWidth,
    height: stageContainerHeight,
})

// create layer
const firstLayer = new Konva.Layer();

// add the layer to the stage
stage.add(firstLayer);

// add inetaction to button
function drawNewCircle(){
    const circle = new Konva.Circle({
    x: stage.width() * Math.random(),
    y: stage.height() * Math.random(),
    radius: 50 * Math.random(),
    fill: circleColour
    });
    // add the circle to first layer
    firstLayer.add(circle);
}

circleButton.addEventListener("click",drawNewCircle);

// changing our circle colour
// Radio buttons are selected, because it allow for a exclusive selection, making user choice
// Limited but certain. A constricted amount of user choice leads to a tighter colour palette
// to change my colour, I need to find the value od the input clicked, and then update the
// circle colour const.

function changeColourRadio(clickEvent){
    // fine the value of the whichever of the radio buttons was clicked
    let newColour = clickEvent.target.value;
    // set the new circle colour to that value
    circleColour = newColour;
}

// add eventlisteners
changeRed.addEventListener("click", changeColourRadio);
changeYellow.addEventListener("click", changeColourRadio);
changeBlue.addEventListener("click",changeColourRadio);