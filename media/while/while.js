/* Exercise 1: Log numbers 1-10 */
var output = document.querySelector("#exercise1")
var n = 1;
strVar = "<h3>Exercise 1 - Print 1-10 </h3><ul>";
while (n <= 10) {
  strVar += " <li> "+ n +" </li> ";
  n++;
}
strVar += "</ul>";
output.innerHTML = strVar;
/* End Exercise 1 */

/* Exercise 3: Count by 2s to 20 */
var output = document.querySelector("#exercise2");
var n = 2;
strVar = "<h3>Exercise 2 - Print by 2s </h3><ul>";
while (n <= 20) {
  strVar += " <li> "+ n +" </li> ";
  n += 2;
}
strVar += "</ul>";
output.innerHTML = strVar;
/* End Exercise 2 */

/* Exercise 3 */
var output = document.querySelector("#exercise3")
var n = 100;
var i = 1;
var sum = 0;
strVar = "<h3>Exercise 3 - Print running total of numbers 1-100 </h3><ul>";
while (i <n) {
  sum +=i;
  strVar += " <li> "+ sum +" </li> ";
  i++;
}
strVar += "</ul>";
  output.innerHTML = strVar;
/* End Exercise 3 */

/* Exercise 4 */
var output = document.querySelector("#exercise4")
strVar = "<h3>Exercise 4 - All prior exercises print to HTML </h3><ul>";
  output.innerHTML = strVar;
/* End Exercise 4 */


/* Exercise 5 - Print from 15 to 1 and ID if 'even' or 'odd' */
var output = document.querySelector("#exercise5");
var n = 15;
strVar = "<h3>Exercise 5 - Print from 15 to 1 and ID if 'even' or 'odd' </h3><ul>";
while (n >= 0) {
  if(n % 2 === 0) {
    strVar += " <li> "+ n +" <span class= nbrType> even </span></li> ";
  } else {
    strVar += " <li> "+ n +" <span class= nbrType> odd </span></li> ";
  }
  n--;
}
strVar += "</ul>";
output.innerHTML = strVar;
/* End Exercise 5 */


/* Exercise 6 - FizzBuzz */
var output = document.querySelector("#exercise6");
var n = 1;
strVar = "<h3>Exercise 6 - From 1-100 if div by 3 print Fizz, if div by 5 print Buzz, if div by both 3 & 5, print FizzBuzz </h3><ul>";
while (n <= 100) {
  if(n % 3 === 0 && n % 5 == 0){
    strVar += " <li> "+ n +" <span class= nbrType> FizzBuzz! </span></li> ";
  } else if(n % 3 === 0){
    strVar += " <li> "+ n +" <span class= nbrType> Fizz </span></li> ";
  } else if (n % 5 === 0) {
    strVar += " <li> "+ n +" <span class= nbrType> Buzz </span></li> ";
  } else {strVar += " <li> "+ n +"</li> ";
}
  n++;
}
strVar += "</ul>";
output.innerHTML = strVar;
/* End Exercise 6 */
