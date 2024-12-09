/* stopwatch javascript */

const display = document.getElementById('display')

let timer = Null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;



//const startBtn = document.getElementById('startBtn');
//const stopBtn = document.getElementById('stopBtn');
//const resetBtn = document.getElementById('resetBtn');


// function start
function start(){
// check if correct stopwatch is running
    if(isRunning){
         startTime = Date.now() - elapsedTime;
         timer = setInterval(update, 10); // millisecond
         //console.log(timer);
         isRunning = true;
       
    }

    //console.log(startTime);
}

// function stop
function stop(){


}

// function reset()
function reset(){



}

// function update to update the display
function update(){
// get current time
const currentTime = Date.now();
// calculate  elapsedTime equal currentTme minus startTime
 elapsedTime = currentTime - startTime;

 let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

 let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);

 let seconds = Math.floor(elapsedTime / 1000 % 60);

 let milliseconds = Math.floor(elapsedTime % 1000 / 10);


  display.textContent = `${hours}:${minutes}:${seconds}:
  ${milliseconds}`;


}