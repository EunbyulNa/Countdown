# D-day countdown 

# 1. How it works 
Show the final date on the top(The default setup date is always 10 days later than whenever the user started the application), and calculate the remaining days, hours, mins, secs. Once the countdown is done, it shows up “sorry” 

# 2. What I learned 
 #### - getMonth() , getDay() : <br>
In javascript, when you use getMonth(), getDay() methods, they return the month, and date as a zero-based number, <br>
for example, January is 0, not 1.  To convert the number value to string value, I stored month and weekday values in other arrays.<br>
 #### -getTime() :<br>
Returns the number of milliseconds since January 1, 1970, 00:00:00. To get one day’s time in milliseconds I used new Date().getTime()<br>
 #### -Math.floor() : <br>
Rounds a number DOWN to the nearest integer. I don’t need decimal points in this project, so I use math.floor method to get only integer <br>
 #### -setInterval() : <br>
The setInterval() method calls a function at specified intervals (in milliseconds). And it continues calling the function until clearInterval <br>
In this project, a callback function is getReamainingTime( ) which shows the remaining hours, and the specified interval is 1000. <br>
That means every second, getRemainingTime function is working <br>
 #### -clearInterval(IntervalID) :  <br>
Clears a timer set with the setInterval() method. I want to clear the countdown function, once the countdown is done. <br>
You can stop setinterval function by calling it as an argument <br>
 #### -Difference between textContents and innerHTML :<br>
The innerHTML property gets all sets of the HTML contents. whereas The textContent does not automatically encode and decode text, <br>
only works with the content part of the element.





