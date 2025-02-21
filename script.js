/**
 * shopping list
 * access html elements
 * add event listener
 * create functions
 * WEB AUDIO API
 * oscillator node
 * gain node
 * connect nodes
 */

//ACCESS HTML ELEMENTS

let freqSlider = document.getElementById("freqSlider");

let gainSlider = document.getElementById("gainSlider");

let startButton = document.getElementById("startButton");

let stopButton = document.getElementById("stopButton");

//WEB AUDIO API

let audioCtx =  new AudioContext(); //open webaudio API

//OSCILLATOR NODE

let oscillator = audioCtx.createOscillator(); //create oscillator node
oscillator.type = "sine"; //set oscillator type
oscillator.frequency.value = 440; //set oscillator frequency


//GAIN NODE

let gainNode = audioCtx.createGain(); //create gain node


//CONNECT NODES

oscillator.connect(gainNode); //connect oscillator to gain node
gainNode.connect(audioCtx.destination); //connect gain node to audio context destination


//CREATE FUNCTIONS

const startOscillator = function () {
    gainNode.gain.value = 1; //gate open makes gain 1
}
const stopOscillator = function () {
    gainNode.gain.value = 0; //gate closed makes gain 0
}
const updateFrequency = function (event) {
    oscillator.frequency.value = event.target.value; //update frequency value
}
const updateGain = function (event) {
    gainNode.gain.value = event.target.value; //update gain value
}
gainNode.gain.value = 0; //set oscillator gain to start silent
//ADD EVENT LISTENER


startButton.addEventListener("click", startOscillator); //start oscillator when button clicked
stopButton.addEventListener("click", stopOscillator); //stop oscillator when button clicked
freqSlider.addEventListener("input", updateFrequency); //update frequency when slider moved
gainSlider.addEventListener("input", updateGain); //update gain when slider moved


oscillator.start(); //start oscillator

