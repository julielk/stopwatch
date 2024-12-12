/* stopwatch javascript */

const display = document.getElementById('display');

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;





// function start
function start(){
// check if correct stopwatch is running
    if(!isRunning){
         startTime = Date.now()-elapsedTime;
         timer = setInterval(update, 10); // millisecond
         console.log(timer);
         isRunning = true;
       
    }

    //console.log(startTime);
}



// function stop
function stop(){
// if isRunning is true stop
    if(isRunning){
     // clearInterval pass in timer stop the stopwatch
     clearInterval(timer);
     //calculate elapsed time Date now minus statTime
     elapsedTime = Date.now() - startTime;
     isRunning = false; //stopwatch not running

    }


}


// function reset()
function reset(){
  clearInterval(timer);
  timer = null;
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
// display textContext in zeros
   display.textContent = "00:00:00:00";
  
}



// function update to update the display
function update(){
// get current time
const currentTime = Date.now();
// calculate  elapsedTime equal currentTme minus startTime
 elapsedTime = currentTime - startTime;

 // elapsedTime div 1000 ms times 60 seconds time 60 minute 
 let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
// elapsedTime div 1000 ms times 60 modulus 60
 let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);

 // elapsed time div 1000 ms modulus 60
 let seconds = Math.floor(elapsedTime / 1000 % 60);

 // elapsed time modulus 1000 div 10 first two digit
 let milliseconds = Math.floor(elapsedTime % 1000 / 10);
// convert hours into string, first two digit zero
  hours = String(hours).padStart(2,"0");
  minutes = String(minutes).padStart(2,"0");
  seconds = String(seconds).padStart(2,"0");
  milliseconds = String(milliseconds).padStart(2,"0");

  display.textContent = `${hours}:${minutes}:${seconds}:
  ${milliseconds}`;


}

