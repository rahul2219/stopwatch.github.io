// Seconds Variable counter
let counter = 0;
// Milliseconds Variable counter1
let counter1=0;
// timeout variable is used to clearTimeout whenever user clicks on the stop or reset Buttons;
let timeout;
// timer_on is like a flag variable to note whenever the timer is running or not
let timer_on = 0;

function timedCount(){
    //  If one second is elapsed then update the counter1 to 0 
    if(counter1 >= 100){
        counter1=0;
        // increment the counter variable as 1 second got elapsed
        counter++;
        // if counter is greater than or equal to 10 then update the inner html using span1 to counter
        if(counter >= 10){
            document.getElementById("span1").innerHTML = counter;
          }
        //   else add a zero infront if it is less than 10 and then attach the counter variable, the purpose of adding zero is to make it look good.
          else{
            document.getElementById("span1").innerHTML = `0${counter}`;
          } 
    }
    counter1++;
    // if counter1 is greater than or equal to 10 then update the inner html using span2 tag to counter1
    if(counter1 >= 10){
        document.getElementById("span2").innerHTML = counter1;
      }
      else{
        // else add a zero infront if it is less than 10 and then attach the counter1 variable, the purpose of adding zero is to make it look good.
        document.getElementById("span2").innerHTML = `0${counter1}`;
      }
    // Now we pass the timedCount function inside the setTimeout so  timedCount function triggers after 10 milliseconds
    timeout = setTimeout(timedCount, 10);
 
}

function startCount() {
    // If the timer is not running then timedCount() function will be called
  if (timer_on === 0) {
    timer_on = 1;
    timedCount();
  }
}

function stopCount() {
    // It clears timeout for the timeout variable to stop the counter
  clearTimeout(timeout);
//As the timer is not running now timer_on will be switched to 0.   
  timer_on = 0;
  
}

function Reset(){
    // It clears timeout for the timeout variable to stop the counter
    clearTimeout(timeout);
    // Reinitializing span tags which are used to update the innerHTML back to 00
    document.getElementById("span1").innerHTML = "00";
    document.getElementById("span2").innerHTML = "00";
    // Reinitializing the variables like how they were at the start
    counter=0;
    counter1=0;
    timer_on=0;
}





