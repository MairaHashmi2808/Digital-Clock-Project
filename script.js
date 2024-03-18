//creating variables for hours, minutes and seconds

let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let seconds = document.getElementById("seconds");

//here we use a function of setting interval to keep updating the time!
//the code inside uses currentTime to store the already excisting function Date()
//we use currentTime to collect and get the hours, minutes and seconds of the time
//at first we display it in the console, the best thing for testing your program
//then we write code for the html elements to show the time like the hours, minutes aand seconds

setInterval(()=> {
    let currentTime = new Date();

    console.log(currentTime);
console.log(currentTime.getHours());
console.log(currentTime.getMinutes());
console.log(currentTime.getSeconds());

hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
mins.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
seconds.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000)

//we have now succesfully completed the program!
//made using tutorial for practice and experience!