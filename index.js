const month = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
]

const weekdays = [
  "Monday",
  "Tuesday",
  "Wedsday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

const finalDay = document.querySelector(".finalday");
const deadline = document.querySelector(".deadline_box");
const timeLeftBox = document.querySelectorAll(".timeleft_box h1");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2023,0,2,11,30,0);

let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

let getDay = weekdays[futureDate.getDay()];
let getDate = futureDate.getDate()
let getMonth = month[futureDate.getMonth()];
let getYear = futureDate.getFullYear();
let getHour = futureDate.getHours();
let getMins = futureDate.getMinutes();
finalDay.textContent = `New Harry Potter Series is comming
  ${getYear} ${getDay} ${getDate} ${getMonth}  ${getHour} : ${getMins} am` ;

//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  //today's time in ms
  const today = new Date().getTime();
  const t = futureTime - today;

  //1s = 1000ms
  //1m = 60s
  //1h = 60m
  //1day = 24hr

  //values in ms
  const oneDayInMs = 24 * 60 * 60 * 1000;
  const oneHrInMs = 60 * 60 * 1000;
  const oneMinInMs = 60 * 1000;

  let days = Math.floor(t / oneDayInMs)
  let hours = Math.floor((t % oneDayInMs) / oneHrInMs)
  let mins = Math.floor((t % oneHrInMs) / oneMinInMs )
  let secs = Math.floor((t % oneMinInMs) / 1000)


  //set values in an array
  const values = [days,hours,mins,secs];

  //put 0 infront of each timeleftbox
  function format(timeLeftBox) {
    if(timeLeftBox < 10){
      return timeLeftBox = `0${timeLeftBox}`;
    }
    return timeLeftBox;
  }

  timeLeftBox.forEach( function(item,i){
    timeLeftBox[i].innerHTML = format( values[i] )
  });

  //When D-day is finished
  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h2 class="deadline_h2">Sorry</h2>`
  }
}

//countDown automatically
let countdown = setInterval(getRemainingTime,1000)

getRemainingTime()
