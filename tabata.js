//listing all the variable first

var outermostDiv = document.getElementById("outermost");
var sets = document.getElementById("sets");
var timeon = document.getElementById("timeon");
var timeoff = document.getElementById("timeoff");
var start = document.getElementById("start");
var reset = document.getElementById("reset");
var stop = document.getElementById("stop");
var textarea = document.getElementById("textarea");
var form = document.getElementById("form");
var setTime; //for accessing or clearing out setInterval in the startbutton function
var numberOfSets = sets.value; //number of times the main function will repeat itself
var myvalue = 0; //counter to track seconds in the startbutton function
var mytimeon; //the time for which the timer runs in seconds input by the user
var mytimeoff; //time for which it stays off in seconds input by the user
var lol; //for accessing or clearing the setTimeout in the startbutton function
var mysets = 0; //a counter to keep track of no. of sets and how many times to run startbutton

//adding event listeners to needed elements
start.addEventListener("click", startbutton);
stop.addEventListener("click", stopbutton);
reset.addEventListener("click", resetbutton);


//this is what happen when user clicks start button
function startbutton() {

    start.style.display = "none";
    stop.style.display = "inline";

    setTime = setInterval(fireseconds, 1000);

    function fireseconds() {
        myvalue++;
        var mydate = new Date();
        var myseconds = mydate.getSeconds();
        if (myvalue < 10) {
            textarea.innerHTML = "00:0" + myvalue;
        } else {
            textarea.innerHTML = "00:" + myvalue;
        }
    }





    if (mytimeon < timeon.value) {
        mytimeon = timeon.value - mytimeon;
    } else {
        mytimeon = timeon.value * 1000; //converting to milliseconds
    }

    lol = setTimeout(stopAutomatic, mytimeon);


    function stopAutomatic() {
        clearInterval(setTime);
        mytimeoff = timeoff.value * 1000; //converting to milliseconds
        //check if its permanent stoppage or still more sets to go
        var s = sets.value;
        mysets++;
        if (mysets < s) {
            textarea.innerHTML = "Rest " + (mytimeoff * 10e-4) + " secs";
            myvalue = 0;
            setTimeout(startbutton, mytimeoff);
        } else {
            start.style.display = "inline";
            stop.style.display = "none";
            textarea.innerHTML = "00:00";
            myvalue = 0;
        }

    }

} //startbutton() function ends



//this will run when stop button is clicked
function stopbutton() {
    clearInterval(setTime);
    clearTimeout(lol);
    mytimeon = mytimeon - (myvalue * 1000); //assigned a new value so mytimeon asks the setTimeout function in startbutton to fire at the remaining time, if start button is clicked
    start.style.display = "inline";
    stop.style.display = "none";
}




//this is what will run when reset button is clicked
function resetbutton() {
    clearInterval(setTime);
    clearTimeout(lol);
    myvalue = 0; //assigned a new value so myvalue starts from the beginnning in startbutton() and it appears that timer started from 0, if start button is clicked of course
    mysets = 0;
    textarea.innerHTML = "00:00";
    start.style.display = "inline";
    stop.style.display = "none";
    form.reset();
}
